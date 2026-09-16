// Regression tests: isolated mocks only. Never reads .env or contacts SMTP.
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import vm from 'node:vm';
import ts from 'typescript';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../', import.meta.url));
const require = createRequire(root + '/package.json');
const compile = async (path) => ts.transpileModule(await readFile(root + '/' + path, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true } }).outputText;
const routeCode = await compile('app/api/contact/route.ts');
const templateCode = await compile('app/api/contact/confirmation-email.ts');
const env = { SMTP_HOST: 'smtp.invalid', SMTP_PORT: '587', SMTP_SECURE: 'false', SMTP_USER: 'maximilian.oettl@reltest-solutions.com', SMTP_PASSWORD: 'fake-test-only', MAIL_FROM: 'website@reltest-solutions.com', MAIL_CONFIRMATION_FROM: 'info@reltest-solutions.com', MAIL_TO: 'info@reltest-solutions.com' };
function setup({ failMail = 0, configured = true, envOverrides = {} } = {}) {
    const mails = [];
    const template = { exports: {} };
    const common = { Buffer, Response, Request, Headers, URL, Date, Uint8Array, console: { error() { } }, process: { cwd: () => root, env: configured ? { ...env, ...envOverrides } : {} }, require };
    vm.runInNewContext(templateCode, { ...common, module: template, exports: template.exports });
    const sandboxModule = { exports: {} };
    let transport;
    const customRequire = name => name === './confirmation-email' ? template.exports : name === 'nodemailer' ? { createTransport(options) { transport = options; return { async sendMail(mail) { mails.push(mail); if (mails.length === failMail)
                throw Error('Simulated SMTP failure'); return { messageId: 'fake' }; } }; } } : require(name);
    vm.runInNewContext(routeCode, { ...common, require: customRequire, module: sandboxModule, exports: sandboxModule.exports });
    return { post: sandboxModule.exports.POST, mails, get transport() { return transport; } };
}
const valid = { locale: 'de', audience: 'company', company: 'RelTest QA', email: 'audit@example.com', name: 'Audit Test', phone: '', message: 'Lokaler Funktionstest ohne echten E-Mail-Versand.', privacy: true, topic: 'project', website: '' };
function request(body = valid, headers = {}) { return new Request('http://localhost:3100/api/contact', { method: 'POST', headers: { Origin: 'http://localhost:3100', 'Content-Type': 'application/json', ...headers }, body: typeof body === 'string' ? body : JSON.stringify(body) }); }
const results = [];
async function test(name, fn) { try {
    await fn();
    results.push({ name, passed: true });
}
catch (error) {
    results.push({ name, passed: false, error: String(error) });
} }
await test('Foreign origin rejected', async () => assert.equal((await setup().post(request(valid, { Origin: 'https://untrusted.example' }))).status, 403));
await test('Spoofed forwarded origin rejected', async () => assert.equal((await setup().post(request(valid, { Origin: 'https://untrusted.example', 'x-forwarded-host': 'untrusted.example', 'x-forwarded-proto': 'https' }))).status, 403));
await test('Malformed JSON rejected', async () => assert.equal((await setup().post(request('{bad'))).status, 400));
await test('Declared oversized body rejected', async () => assert.equal((await setup().post(request(valid, { 'content-length': '20000' }))).status, 413));
await test('Actual UTF-8 body bytes limited without Content-Length', async () => assert.equal((await setup().post(request({ ...valid, message: '😀'.repeat(8000) }))).status, 413));
await test('Single-recipient validation rejects lists and header syntax', async () => { for (const email of ['a@example.com,b@example.com', 'A <a@example.com>', 'a@example.com\r\nBcc: b@example.com'])
    assert.equal((await setup().post(request({ ...valid, email }))).status, 400); });
await test('Privacy required server-side', async () => assert.equal((await setup().post(request({ ...valid, privacy: false }))).status, 400));
await test('Organisation required for company inquiry', async () => assert.equal((await setup().post(request({ ...valid, company: '' }))).status, 400));
await test('Private inquiry permits empty organisation', async () => assert.equal((await setup().post(request({ ...valid, audience: 'private', company: '' }))).status, 200));
await test('Short message rejected server-side', async () => assert.equal((await setup().post(request({ ...valid, message: 'short' }))).status, 400));
await test('Honeypot returns benign response without mail', async () => { const s = setup(); assert.equal((await s.post(request({ ...valid, website: 'spam' }))).status, 200); assert.equal(s.mails.length, 0); });
await test('Missing SMTP configuration handled as 503', async () => assert.equal((await setup({ configured: false }).post(request())).status, 503));
await test('Missing confirmation sender prevents delivery', async () => { const s = setup({ envOverrides: { MAIL_CONFIRMATION_FROM: '' } }); assert.equal((await s.post(request())).status, 503); assert.equal(s.mails.length, 0); });
await test('German inquiry + branded confirmation, correct From/Reply-To', async () => {
    const s = setup();
    const r = await s.post(request());
    assert.equal(r.status, 200);
    assert.equal((await r.json()).confirmationSent, true);
    assert.equal(s.mails.length, 2);
    assert.equal(s.mails[0].from.address, env.MAIL_FROM);
    assert.equal(s.mails[0].to, env.MAIL_TO);
    assert.equal(s.mails[0].replyTo.address, valid.email);
    assert.equal(s.mails[1].from.address, env.MAIL_CONFIRMATION_FROM);
    assert.equal(s.mails[1].to.address, valid.email);
    assert.equal(s.mails[1].replyTo.address, env.MAIL_TO);
    assert.equal(s.transport.auth.user, env.SMTP_USER);
    assert.equal(s.transport.secure, false);
    assert.equal(s.transport.requireTLS, true);
    assert.match(s.mails[1].html, /cid:reltest-logo/);
    assert.equal(s.mails[1].attachments.length, 1);
    assert.equal(r.headers.get('cache-control'), 'no-store');
});
await test('English confirmation and escaped visitor name', async () => { const s = setup(); await s.post(request({ ...valid, locale: 'en', name: '<script>alert(1)</script>' })); assert.match(s.mails[1].html, /Thank you/); assert.ok(!s.mails[1].html.includes('<script>')); assert.match(s.mails[1].html, /&lt;script&gt;/); });
await test('Internal mail failure: 502, no confirmation sent', async () => { const s = setup({ failMail: 1 }); assert.equal((await s.post(request())).status, 502); assert.equal(s.mails.length, 1); });
await test('Confirmation failure: inquiry retained, partial success', async () => { const s = setup({ failMail: 2 }); const r = await s.post(request()); assert.equal(r.status, 200); assert.equal((await r.json()).confirmationSent, false); });
await test('Fifth request in window blocked with Retry-After', async () => { const s = setup(); for (let i = 0; i < 4; i++)
    assert.equal((await s.post(request())).status, 200); const r = await s.post(request()); assert.equal(r.status, 429); assert.equal(r.headers.get('retry-after'), '900'); assert.equal(s.mails.length, 8); });
console.log(JSON.stringify(results, null, 2));
if (results.some(r => !r.passed))
    process.exitCode = 1;

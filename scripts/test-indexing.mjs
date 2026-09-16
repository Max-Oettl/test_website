// Regression tests: isolated mocks only. Never reads .env or contacts SMTP.
import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { createRequire } from 'node:module';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import ts from 'typescript';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../', import.meta.url));
const require = createRequire(root + '/package.json');
function loader(env) { const cache = new Map(); function load(path) { path = resolve(root, path); if (!existsSync(path))
    path += '.ts'; if (cache.has(path))
    return cache.get(path).exports; const sandboxModule = { exports: {} }; cache.set(path, sandboxModule); const code = ts.transpileModule(readFileSync(path, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true } }).outputText; vm.runInNewContext(code, { module: sandboxModule, exports: sandboxModule.exports, process: { env }, URL, console, Map, Set, require: name => name.startsWith('.') ? load(resolve(dirname(path), name)) : require(name) }, { filename: path }); return sandboxModule.exports; } return load; }
const results = [];
for (const [name, env, enabled] of [['default production', { NODE_ENV: 'production', VERCEL_ENV: 'production' }, false], ['explicit disabled', { NODE_ENV: 'production', SITE_INDEXING_ENABLED: 'false' }, false], ['preview cannot opt in', { NODE_ENV: 'production', VERCEL_ENV: 'preview', SITE_INDEXING_ENABLED: 'true' }, false], ['development cannot opt in', { NODE_ENV: 'development', SITE_INDEXING_ENABLED: 'true' }, false], ['approved production', { NODE_ENV: 'production', VERCEL_ENV: 'production', SITE_INDEXING_ENABLED: 'true' }, true]]) {
    const load = loader(env);
    const deployment = load('app/_seo/deployment.ts');
    assert.equal(deployment.isSiteIndexingEnabled, enabled);
    const robots = load('app/robots.ts').default();
    const sitemap = load('app/sitemap.ts').default();
    const meta = load('app/_seo/metadata.ts').buildLocalizedMetadata({ locale: 'en', path: '/leistungen', title: 'Test', description: 'Test' });
    assert.equal(meta.robots.index, enabled);
    assert.equal(sitemap.length, enabled ? 104 : 0);
    assert.equal(robots.rules.disallow, enabled ? robots.rules.disallow : '/');
    const headers = await load('next.config.ts').default.headers();
    const restriction = headers.find(r => r.headers.some(h => h.key === 'X-Robots-Tag' && h.value.includes('nofollow')));
    assert.ok(restriction);
    assert.equal(Boolean(restriction.has), enabled);
    assert.equal(meta.alternates.canonical, 'https://reltest-solutions.com/en/services');
    assert.equal(meta.alternates.languages.de, 'https://reltest-solutions.com/de/leistungen');
    if (enabled) {
        assert.equal(new Set(sitemap.map(x => x.url)).size, 104);
        assert.ok(sitemap.every(x => !x.lastModified));
    }
    results.push({ name, passed: true, indexing: enabled, sitemapEntries: sitemap.length });
}
console.log(JSON.stringify(results, null, 2));

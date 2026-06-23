<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# SEO Agent Rules

For all SEO-relevant work in this repository, use [SEO-Codex-Leitfaden](C:/Users/MaximilianÖttl/Documents/test_website/docs/seo/seo-codex-leitfaden.md) as the primary operating guide and [SEO-Audit und Aufgaben](C:/Users/MaximilianÖttl/Documents/test_website/docs/seo/seo-audit-und-aufgaben.md) as the concrete project backlog.

For WordPress-to-Next.js migration, go-live planning, redirects, legacy URL handling, Calendly/contact migration, hosting/DNS handover and post-launch checks, use [Migrationsplan WordPress zu Next.js](C:/Users/MaximilianÖttl/Documents/test_website/docs/project/migrationsplan-wordpress-nextjs.md) as the primary operating guide.

# Website Vision Rules

For all content, UX and visual work in this repository, use [RelTest Website Vision](C:/Users/MaximilianÖttl/Documents/test_website/docs/vision/reltest-website-vision.md) as the primary brand, structure and positioning guide.

For practical execution, workflows and content decisions, also use [Arbeitsregeln und Workflows](C:/Users/MaximilianÖttl/Documents/test_website/docs/project/arbeitsregeln-und-workflows.md) and [Content- und Seitenregeln](C:/Users/MaximilianÖttl/Documents/test_website/docs/content/content-und-seitenregeln.md).

For mobile QA, performance checks, on-demand SEO reviews and URL migration work, use [QA, SEO-Review und Migration](C:/Users/MaximilianÖttl/Documents/test_website/docs/project/qa-review-und-migration.md) and maintain [URL-Migrationsmatrix](C:/Users/MaximilianÖttl/Documents/test_website/docs/seo/url-migrationsmatrix.md).

This document captures the user’s intended website direction, including:

- target audiences
- desired brand effect
- design principles
- how services should be presented
- how trust signals such as book, podcast, references and real team imagery should be used
- expectations for the homepage, hero, education offerings and knowledge section

When changing visible website structure, messaging or design, always check that the result stays aligned with the RelTest vision and does not drift into generic, playful or purely decorative solutions.

When adding or changing content, follow the content rules: every page needs a clear audience, purpose, search intent, trustworthy technical substance, German and English coverage where relevant, and a concrete next step.

When making larger changes, follow the workflow rules: define the goal, check the relevant docs, evaluate SEO impact, implement in a small scoped change, verify responsive behavior and language variants, then update documentation if the decision changes project practice.

Before go-live or whenever requested, run the documented QA/review workflow rather than relying only on visual judgment: mobile viewport checks, production build, Lighthouse/PageSpeed, crawler-based SEO review, redirect checks and Search Console follow-up where available.

SEO-relevant work includes changes to:

- `app/[lang]/**`
- `app/_content/site-content.ts`
- `app/_components/site-header.tsx`
- `app/_components/site-footer.tsx`
- `app/_components/language-switcher.tsx`
- `proxy.ts`
- metadata, routing, sitemap, `robots.txt`, canonicals, `hreflang`
- public images, image names, alt texts and performance-critical assets

When touching SEO-relevant areas, always check:

- search intent and page purpose
- duplicate or cannibalizing pages
- unique titles and meta descriptions
- exactly one meaningful H1 per indexable page
- correct canonical and `hreflang` setup
- crawlable HTML links and robust server-rendered main content
- image SEO, performance and Core Web Vitals implications
- mobile parity and accessibility basics
- impact on existing WordPress URLs, redirects and backlinks

For this project, protecting existing SEO signals during the WordPress-to-Next.js relaunch is a top priority. Do not change URL structure, language paths, metadata patterns or internal-link architecture without considering migration effects.

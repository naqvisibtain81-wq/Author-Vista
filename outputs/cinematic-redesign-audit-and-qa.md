# Author Vista Cinematic Redesign

Date: 13 August 2026

## Current site audit

### Findings

- The original implementation had a clear information architecture, but its visual language relied too heavily on pale backgrounds, simple split sections, bordered grids and repeated editorial lists.
- The opening hero communicated the positioning, but it did not establish an intimate manuscript atmosphere or an immediate sense of craft.
- The stage router, services, principles and answer blocks used closely related compositions, which made the homepage feel assembled rather than narrated.
- Motion was limited to hover states and basic transitions. Sections did not visually connect as parts of one story.
- The typography was sound and readable, but the original scale and presentation did not create enough contrast between intimate manuscript moments and expansive brand statements.
- Some visible copy used em dashes, en dashes and mechanical compound constructions that weakened the human editorial voice.
- The strongest elements were the stage based routing, ownership language, transparent pricing boundaries, FAQ answers, service URLs, metadata, structured data, preview protection and form behavior. These were preserved.

## Redesign delivered

- Introduced the concept, “From the first page to the wider horizon.”
- Rebuilt the homepage as seven connected editorial chapters: unwritten possibility, manuscript stages, the opening vista, craft in motion, ownership, a preview only portfolio composition and the final horizon.
- Replaced the safe light opening with a dark, image led hero using phrase based typography reveals and an immediate positioning statement.
- Added a sticky service narrative where the manuscript page changes as writing, editing, design, publishing, audio and author platform services enter the reading frame.
- Added restrained parallax, intersection reveals, a reading progress line, atmospheric light, paper grain and perspective without introducing a heavy graphics dependency.
- Added a stable trust ledger for copyright, account control, royalties, approvals and custom quotations.
- Added a portfolio composition that appears only in preview mode and is explicitly labelled as a development placeholder.
- Applied the deep ink, midnight green, warm paper, parchment, copper and sage visual system throughout the website.
- Preserved semantic HTML, crawlable copy, internal links, one H1 per page, canonicals, Open Graph metadata, XML sitemap, robots controls and structured data.
- Added two locally hosted, licensed editorial photographs with recorded source and licence details.
- Rewrote visible copy to remove em dashes and en dashes, and softened mechanical hyphenated phrasing where natural language was clearer.

## Accessibility and performance decisions

- Key colour pairs exceed WCAG AA for normal text. The lowest checked primary pair is dark copper on warm paper at 5.57:1.
- Primary buttons use dark copper with white text at 6.48:1.
- Focus outlines, a skip link, labelled forms, visible validation and semantic navigation remain in place.
- With reduced motion, parallax and spatial transforms are removed, reveal content is shown immediately and the reading progress animation is hidden.
- Without JavaScript, essential content remains visible and the mobile navigation falls back to a visible static menu.
- No WebGL, canvas, autoplay video or animation framework was added.
- The two photography assets total approximately 374 KB. The largest file is approximately 254 KB.

## Verification results

- Astro check: 0 errors, 0 warnings, 0 hints.
- Production build: successful, 21 HTML pages generated.
- Browser console: 0 errors or warnings.
- Browser page audit: 20 routes checked, each with one H1 and no horizontal overflow at the connected viewport.
- Internal link audit: 20 unique internal routes checked, 0 broken.
- Metadata audit: 21 unique page titles across 21 HTML pages.
- Visible dash audit: 20 rendered routes checked, 0 visible em dashes or en dashes.
- Image audit: no broken images and no image elements missing alt text.
- Form test: required fields, completion flow and honest preview success state verified.
- Sitemap and robots files generated successfully. The preview remains intentionally nonindexable.

## Responsive capture note

Exact viewport overrides were requested through the connected browser for 360, 390, 768, 1024, 1440 and 1920 pixel widths. The browser host retained its fixed 1219 pixel viewport despite accepting those overrides. The supplied screenshot therefore records the verified 1219 pixel laptop rendering. Responsive rules for mobile, tablet, laptop and desktop remain implemented in the production CSS, but exact device screenshots should be repeated in an external browser before launch.

## Launch protections preserved

- The production domain is not connected.
- Search indexing remains disabled by default.
- Forms do not transmit or store personal information.
- Testimonials, awards, team biographies, office claims, platform partnerships and portfolio books have not been invented.
- Legal policies, public contact details, secure form delivery, spam protection and real portfolio permissions remain launch requirements.

# Delivery checks

Validated locally on 29 September 2026.

## Build

- `npm run typecheck`: passed.
- `npm run build`: passed, including the production TypeScript check and static prerendering.
- Homepage and metadata routes served successfully in production mode.
- Custom 404 returned HTTP 404 and the designed recovery page.
- Dependency installation audit reported zero known vulnerabilities at installation time.

## Browser checks

- Inspected the live website at desktop, tablet, and mobile widths.
- Checked 320, 390, 768, and 1440 CSS-pixel widths: no horizontal page overflow.
- Hero links, section navigation, contact navigation, and back-to-top behavior worked.
- All four project case studies opened with their corresponding content. Opening one closed the previous case.
- Native case-study activation worked with Enter.
- Mobile menu opened and closed, supported Escape, and closed after choosing a section.
- Keyboard Tab moved from the open-menu toggle to Selected work; choosing the link moved focus to the destination section.
- The featured case study had a visible inset keyboard focus indicator.
- The sculpture pause control changed to Play and stopped continuous rotation.
- No duplicate element IDs or broken internal section links were found.
- Exactly one H1 was present.
- No browser console errors or warnings were reported during the final interaction checks.

## Résumé and contact

- Clicking the résumé link triggered an actual browser download.
- The served PDF returned HTTP 200, `application/pdf`, and 44,565 bytes.
- The website’s PDF and the supplied original had matching SHA-256 hashes.
- GitHub and LinkedIn destinations match the supplied CV hyperlinks and use `noopener noreferrer` when opening in another tab.
- Email links use the CV’s real email address with `mailto:`. No message was sent during testing.
- Capgemini is shown in Casablanca, per the owner’s explicit correction. The original PDF remains unchanged and still says Agadir for that role.

## Accessibility and SEO

- Reviewed headings, landmarks, link names, skip navigation, visible focus styles, and keyboard controls.
- Reviewed system reduced-motion behavior in source: automatic rotation is disabled; nonessential transitions are suppressed.
- Reviewed animation scheduling: the requestAnimationFrame loop is canceled offscreen and when the document is hidden, and resumes on return.
- Title, description, English language, viewport, Open Graph, favicon, and robots metadata are present.
- Canonical URL and populated sitemap intentionally require the actual deployment origin in `NEXT_PUBLIC_SITE_URL`.

This is a focused manual and source review, not a formal WCAG certification or an exhaustive device test. External social-account sign-in and actual email sending are outside the local site’s behavior.

## Cloudflare preparation — 30 September 2026

- `npm run build:pages`: passed, including production TypeScript checking.
- Produced a standalone `out` directory with 52 files (approximately 1.4 MB total); largest file approximately 229 KB.
- Included the homepage, custom 404, local fonts, JavaScript, CSS, favicon, original résumé, robots.txt, sitemap.xml, and PDF attachment header configuration.
- The static export uses a separate command and leaves the standard Vercel build available.
- Git repository initialized locally on `main`; repository visibility requested by the owner: private.

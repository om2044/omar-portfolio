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

## Project galleries and interaction update — 20 October 2026

- Static preview build with Next.js webpack and TypeScript passed after the final OCR addition.
- Eight original captures across five project galleries: ECODRIVE (2), TomatoGrade (1), Olist (3), OCR (1), anomaly detection (1). The portfolio case study remains the sixth project; NYC Taxi is excluded.
- Browser checks passed: opening cases with Enter, next-image button, ArrowRight navigation, thumbnail selection, enlarged native dialog, Escape dismissal, and focus return to the opener.
- Reading progress changes with scroll. Case-study and gallery transitions plus hover effects supplement the existing scroll reveals and interactive sculpture. Reduced-motion handling verified in source.
- At a 390 × 844 viewport, the gallery and enlarged dialog fit without horizontal page overflow. Original image aspect ratios are retained.
- OCR and anomaly screenshots loaded successfully. No console warnings or errors during final interaction checks.
- Default homepage remains maintenance; PORTFOLIO_PREVIEW=true is used only for the local build. No public deployment of these updates was made.
- Desktop evidence: ../review/portfolio-galerie-ecodrive.png.

This section supersedes earlier résumé and content notes: the current supplied PFE 2027 CV replaces the initial CV, Capgemini is Casablanca, and the case studies follow the latest reports and owner corrections.

## Data studio redesign — 20 October 2026
- Final webpack static build and TypeScript passed after contrast refinements.
- Checked 320 px, 390 px, 768 px and desktop: no horizontal overflow.
- Verified tab keyboard navigation, project filters, native project expansion, enlarged gallery, Escape and focus return.
- Verified a direct Olist link resets an incompatible Web filter and opens the requested case study.
- Mobile menu toggling and Escape passed. No browser warnings or errors in the final checks.
- Contact contrast visually reviewed. Reduced-motion transitions reviewed in source.
- Public interim version (ce1e537) verified live without the 3D hero. New visual design remains local.

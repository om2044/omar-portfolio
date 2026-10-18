# Omar Ait Bouhmad — Portfolio

A complete personal portfolio in English, built with Next.js App Router, TypeScript, Tailwind CSS, Motion, and Lucide. Near-black surfaces, ivory typography, chartreuse accents, and an original interactive canvas sculpture define the visual identity.

## Run locally

Use Node.js 20.9 or newer and npm. A current supported Node.js LTS release is recommended.

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3000. The project uses self-hosted font packages, so it does not fetch fonts from Google when building or visiting the site.

## Production

```sh
npm run typecheck
npm run build
npm run start
```

The homepage is prerendered. There is no database, external API dependency, authentication service, contact form, or required secret.

## Deploy to Cloudflare Pages (free static hosting)

The portfolio does not require server-side rendering or a backend at runtime. A separate build produces the static files needed by Cloudflare Pages, while the ordinary build remains available for Vercel.

```sh
npm ci
npm run build:pages
npm run preview:pages
```

The static preview runs at http://127.0.0.1:4173. Cloudflare publishes the generated `out` directory; keep that directory out of Git.

For GitHub integration, create a **private** `omar-portfolio` repository and push the project source to `main`. In Cloudflare, choose **Workers & Pages → Create application → Pages → Import an existing Git repository** and select that repository. Grant the Cloudflare GitHub app access to this repository only.

Use these build settings:

| Setting | Value |
| --- | --- |
| Framework preset | None (custom build command below) |
| Production branch | `main` |
| Build command | `npm run build:pages` |
| Build output directory | `out` |
| Root directory | Repository root |
| Node.js | `22` (also declared in `.node-version`) |

Cloudflare assigns a `pages.dev` address after the project is created. Set `NEXT_PUBLIC_SITE_URL` to that actual production address and redeploy to populate the canonical URL and sitemap. Use the stable project address, not a deployment-specific preview URL. Preview builds do not require a separate origin.

After the initial setup, commits to `main` trigger a new deployment automatically. This build has no Pages Functions, Workers runtime, paid add-ons, database, or external API calls. The original CV is included in the public site files, and `_headers` tells Cloudflare to download it as a PDF attachment.

## Deploy to Vercel (alternative)

1. Put this folder in your Git repository, excluding `node_modules`, `.next`, and local environment files as defined in `.gitignore`.
2. Import the repository in Vercel. Select this folder as the root directory if it is nested in a larger repository.
3. Use the **Next.js** framework preset. The default install and build commands are sufficient (`npm ci`, `npm run build`).
4. Set `NEXT_PUBLIC_SITE_URL` to the actual public origin, including `https://`, before the production build. This enables canonical URLs and populates `/sitemap.xml` and the sitemap reference in `/robots.txt`. No made-up domain is used when it is absent.
5. Deploy and check the homepage, résumé download, and social links on the resulting domain.

This project is also prepared for Vercel; no Vercel deployment is required for the Cloudflare setup.

## Content and links

- `src/lib/site.ts`: name, SEO description, email, GitHub, LinkedIn, and résumé destination.
- `src/lib/projects.ts`: the four expandable project case studies.
- `src/components/experience.tsx`: professional timeline.
- `src/components/expertise.tsx`: technology categories and evidence labels.
- `src/components/about.tsx`, `beyond.tsx`, and `contact.tsx`: personal introduction, community roles, and closing section.
- `public/Omar-Ait-Bouhmad-Resume.pdf`: the supplied original CV, served by both résumé links.

The email address and social destinations are taken from the supplied CV. The LinkedIn address uses the actual hyperlink in the PDF, which is more complete than its displayed label. A `null` resource destination automatically renders a clearly explained placeholder dialog instead of a broken link.

### Source integrity

The original brief supplies the portfolio structure, current academic year, initial four projects, and ENSA specialization wording. The later CV adds the contact links, more project detail, the NET ALEK internship, and community experience. The owner explicitly confirmed **Casablanca** for Capgemini. The downloadable original CV still says **Agadir** for that internship; the PDF itself has not been edited.

“Applied in projects” reflects the supplied project descriptions and CV; “Broader toolkit” reflects listed skills without specific project evidence; “Exploring / interests” reflects the engineering interests in the brief. These are not skill scores. Fuel/emissions improvements are objectives, and no unprovided accuracy, impact, deployment, award, or project URL is claimed. The 5,000-image dataset and three tomato grades come from the supplied CV.

## Design and architecture

```text
src/
  app/
    layout.tsx          Metadata, local fonts, reduced-motion provider
    page.tsx            Composition of the seven page sections
    globals.css         Core tokens, hero, navigation, responsive styles
    sections.css        Editorial sections and responsive layouts
    not-found.tsx       Custom 404
    robots.ts           Crawler instructions
    sitemap.ts          Real-domain sitemap when configured
  components/
    signal-field.tsx    Interactive mathematical point sculpture
    reveal.tsx          Progressive scroll reveals
    navigation.tsx      Responsive navigation
    resource-link.tsx   Real destinations / honest missing-link fallback
    project-visual.tsx  Original conceptual graphics
    ...                 Reusable section components
  lib/
    site.ts
    projects.ts
public/
  icon.svg
  Omar-Ait-Bouhmad-Resume.pdf
```

The geometric visuals are conceptual, not measured project results. All typography is locally served through Fontsource packages. Fonts retain their package licenses.

## Accessibility and interactions

- Semantic headings and named sections, a skip link, visible keyboard focus, and descriptive link names.
- Native expandable project details with one case open at a time. Keyboard activation uses Enter or Space.
- Mobile navigation supports Escape and closes after choosing a section.
- The sculpture supports mouse dragging and a keyboard-accessible rotate button. Touch scrolling is preserved.
- Continuous motion can be paused; system reduced-motion preferences disable automatic rotation and remove nonessential transitions.
- Scroll reveals progressively enhance server-rendered content.
- Email uses the visitor’s mail app; it does not claim to send a message from the website.

See `QA.md` for the checks completed on this delivery.

## Reference documentation

- [Next.js App Router](https://nextjs.org/docs/app)
- [Next.js on Vercel](https://vercel.com/docs/frameworks/full-stack/nextjs)
- [Static Next.js on Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/)
- [Cloudflare Pages Git integration](https://developers.cloudflare.com/pages/configuration/git-integration/)
- [Motion accessibility](https://motion.dev/docs/react-accessibility)

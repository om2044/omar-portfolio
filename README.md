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
- `src/lib/projects.ts`: the six expandable project case studies, verified repository and demo links, and optional project images.
- `src/components/experience.tsx`: professional timeline.
- `src/components/expertise.tsx`: technology categories and evidence labels.
- `src/components/about.tsx`, `beyond.tsx`, and `contact.tsx`: personal introduction, community roles, and closing section.
- `public/Omar-Ait-Bouhmad-Resume.pdf`: the supplied French PFE 2027 CV, served by both résumé links.
- `public/projects/`: original project captures supplied by the owner, presented in keyboard-accessible galleries with an enlarged view.

The email address and social destinations are taken from the supplied CV. The LinkedIn address uses the actual hyperlink in the PDF, which is more complete than its displayed label. A `null` resource destination automatically renders a clearly explained placeholder dialog instead of a broken link.

### Source integrity

The October 2026 update uses the owner's supplied `CV_Ait_Bouhmad_Omar_2027.pdf`, the project repositories, and the owner's explicit corrections. The French CV replaces the previous download without altering its contents. The page and CV both identify **Casablanca** for Capgemini. Education is described as the engineering cycle (2024–present), and the internship goal is **PFE 2027**. NYC Taxi is intentionally omitted at the owner's request because it is not ready.

The owner confirmed that TomatoGrade's **CNN mode is canceled**. The case study therefore describes YOLO only; TensorFlow remains in the broader toolkit from the CV rather than in this project's stack. The deployed [Hugging Face Space](https://huggingface.co/spaces/om440/tomato-grading-app) was reviewed at commit `77a9f93e935f208c1f7435055747dd4ea6baf57e`. Its [prediction endpoint](https://huggingface.co/spaces/om440/tomato-grading-app/blob/77a9f93e935f208c1f7435055747dd4ea6baf57e/backend/app/api/routes/predict.py) performs background removal and YOLO classification, then saves predictions in PostgreSQL. The Dockerfile and README establish the React / Vite, FastAPI, Neon, and Docker deployment. The portfolio links the demo, deployment source, and original GitHub repository separately.

The reviewed classifier source still labels CNN as pending integration, but this is superseded by the owner's cancellation; it must not be presented as a planned feature. Its model-selection UI does not switch the backend away from YOLO. The displayed 18 ms/frame and 85% threshold are hardcoded UI values, not benchmark evidence. The three class bars read an `all_probabilities` response field that the endpoint does not return, explaining their zero values in the scanner screenshot. That lower-resolution capture is omitted. These findings inform the portfolio wording; the TomatoGrade application itself was not modified.

The three quality grades come from the CV and prediction code. The supplied CV was updated during preparation; the newest file replaces the earlier copy unchanged. The earlier 5,000-image and nine-subsystem counts are omitted to align with that latest version. The included dashboard screenshot illustrates the interface, whose statistics aggregate saved predictions. Its counters, percentage split, and "t" suffix do not establish model accuracy, measured tonnage, or business impact. No industrial production deployment or measured model-performance claims are made.

The [Olist dashboard code](https://github.com/om2044/Olist-BI-Solution-ETL-SSIS-visualisation-/blob/main/Vizualisation/app.py) uses **Streamlit and Plotly**, so those are the technologies credited for the displayed project. Power BI remains in the broader toolkit from the CV. The owner's `portfolio-projects.zip` supplies the original Olist sales, finance, and warehouse captures, ECODRIVE interface and trip analysis captures, anomaly prediction examples, source code, and reports. Only selected images are copied into public assets; datasets, model weights, nested Git metadata, and reports are excluded.

ECODRIVE describes the modeling pipeline, traceability, 30-second features, vehicle-level splits, and simulation / replay interface. Displayed fuel savings are model estimates, not measured on-road gains. The OCR report distinguishes LoRA / Unsloth fine-tuning experiments from the interface prototype, which uses the base vision model via the Hugging Face API. Quantitative evaluation was not completed. Its interface image is extracted unchanged from the supplied report; the owner confirmed that the example data are publicly available and non-confidential. The anomaly source uses an ImageNet-pretrained ResNet18, training its final block and classifier, with augmentation and a stratified split. The gallery shows prediction examples without claiming benchmark accuracy. The portfolio itself is included as requested, with its verified Next.js stack and repository.

“Applied in projects” reflects the supplied project descriptions, code, and CV; “Broader toolkit” reflects listed skills without specific evidence in the displayed projects; “Exploring / interests” reflects the engineering interests in the brief. These are not skill scores.

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
- Project galleries support thumbnails, previous / next controls, arrow keys, and a native modal with Escape to close and focus return.
- A reading-progress bar follows page scroll. Gallery transitions, case-study reveals, and hover effects respect reduced-motion preferences.
- Email uses the visitor’s mail app; it does not claim to send a message from the website.

See `QA.md` for the checks completed on this delivery.

## Temporary maintenance and local review

The current portfolio is the public interim release. Set `PORTFOLIO_MAINTENANCE=true` only to restore the maintenance page. The new visual redesign is prepared locally before a separate release. For a static preview in PowerShell:

```powershell
$env:PORTFOLIO_MAINTENANCE = 'false'
$env:STATIC_EXPORT = 'true'
npx next build --webpack
node scripts/preview-pages.mjs
```

The preview is served at `http://127.0.0.1:4173`. The production deployment follows the GitHub main branch.

## Reference documentation

- [Next.js App Router](https://nextjs.org/docs/app)
- [Next.js on Vercel](https://vercel.com/docs/frameworks/full-stack/nextjs)
- [Static Next.js on Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/)
- [Cloudflare Pages Git integration](https://developers.cloudflare.com/pages/configuration/git-integration/)
- [Motion accessibility](https://motion.dev/docs/react-accessibility)

## Visual redesign — 20 October 2026

The public interim release is ce1e537: updated projects and galleries, maintenance removed, 3D hero removed. The new data-studio design is local only. See DESIGN-NOTES.md for references, components, resume instructions, and the deployment boundary. The obsolete sculpture source remains unused; it is not rendered or included by the homepage.


## Data studio release

The owner authorized deployment of the interactive redesign on 20 October 2026. This release replaces the interim design with the three-stage SVG workflow, project filters, screenshot cards, refreshed colors and responsive interactions. The static build and TypeScript checks passed before publication.

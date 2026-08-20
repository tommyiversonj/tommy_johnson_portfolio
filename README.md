# Tommy Iverson Johnson — Portfolio

A single-page portfolio site built with React, Vite, and Tailwind CSS.

**Live:** https://tommy-johnson-portfolio.vercel.app

## Local development

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Contact form setup (Formspree)

The contact form needs a Formspree endpoint to actually deliver messages:

1. Sign up free at [formspree.io](https://formspree.io) and create a new form.
2. Copy the form ID from the endpoint they give you (the part after `/f/`,
   e.g. `https://formspree.io/f/abcd1234` → ID is `abcd1234`).
3. Copy `.env.example` to `.env` and set:
   ```
   VITE_FORMSPREE_ID=abcd1234
   ```
4. Restart the dev server if it's running.

Without this set, the form will show an error message instead of submitting.

## Building for production

```bash
npm run build
```

Outputs a static site to `dist/`.

## Deployment

This repo is connected to Vercel (project `tommy-johnson-portfolio`, owner
`tommyiversonj`). Every push to `main` auto-deploys to production at
https://tommy-johnson-portfolio.vercel.app — no manual steps needed.

`VITE_FORMSPREE_ID` is already set as a production environment variable in
the Vercel project settings.

To deploy manually if needed (e.g. testing before a push):

```bash
npx vercel deploy --prod
```

No custom domain is attached yet — the site runs on the free `.vercel.app`
subdomain. To add one later, buy/point a domain and connect it under the
Vercel project's **Settings → Domains**.

## Before going live

- Swap `public/favicon.svg` / `public/og-image.svg` for custom artwork if
  you'd like something beyond the generated placeholders — see below for
  `public/og-image.png`.

## Ad-ready: social previews & analytics

**OG/Twitter image.** `public/og-image.png` (1200×630) is a static raster
export of `public/og-image.svg`. `index.html` points `og:image`/`twitter:image`
at the absolute URL of that PNG — LinkedIn and Meta's crawlers render SVG
previews unreliably, so the raster file is what ships in link previews. If
you edit the SVG, re-export a matching 1200×630 PNG or JPG (any design tool,
or a browser screenshot of the SVG) and overwrite `public/og-image.png`.

Test previews with:
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
- [X Card Validator](https://cards-dev.twitter.com/validator)

Use **Scrape Again** in each tool after deploying — they cache previews per URL.

**GA4 & Meta Pixel.** Both are wired up in `src/lib/analytics.js` but stay
fully inert (no script tags, no network requests) until you set real IDs.
Copy `.env.example` to `.env` and set:

```
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX   # GA4 Admin → Data Streams
VITE_META_PIXEL_ID=1234567890123456   # Meta Events Manager → Data Sources
```

Restart the dev server (or redeploy) after setting these. Both scripts load
lazily once the page is idle, so they don't compete with initial page-load
performance.

**Conversion tracking.** Clicking the email, LinkedIn, or GitHub links in the
Contact section fires `trackConversion(channel)` (`src/lib/analytics.js`),
which sends a GA4 `conversion` event and a Meta Pixel `Conversion` custom
event — visible in GA4's Realtime view and Meta Events Manager's Test Events
tool once the IDs above are set.

## Editing content

All resume content (skills, experience, projects, education, personal
info) lives in `src/data/content.js`. Update that file to change copy —
components are presentational and read from it directly.

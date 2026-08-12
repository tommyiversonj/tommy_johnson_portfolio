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
  you'd like something beyond the generated placeholders.

## Editing content

All resume content (skills, experience, projects, education, personal
info) lives in `src/data/content.js`. Update that file to change copy —
components are presentational and read from it directly.

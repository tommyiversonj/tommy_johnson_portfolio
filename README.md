# Tommy Iverson Johnson — Portfolio

A single-page portfolio site built with React, Vite, and Tailwind CSS.

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

## Deploying to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the
   GitHub repo.
3. Vercel auto-detects Vite; no build config changes needed.
4. Under **Environment Variables**, add `VITE_FORMSPREE_ID` with your
   Formspree form ID.
5. Deploy. Future pushes to `main` auto-deploy.

## Before going live

- Update `public/robots.txt` and `public/sitemap.xml` — replace
  `YOUR-DOMAIN` with your actual deployed domain.
- Swap `public/favicon.svg` / `public/og-image.svg` for custom artwork if
  you'd like something beyond the generated placeholders.

## Editing content

All resume content (skills, experience, projects, education, personal
info) lives in `src/data/content.js`. Update that file to change copy —
components are presentational and read from it directly.

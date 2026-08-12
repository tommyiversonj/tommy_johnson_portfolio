# Portfolio Website — Design Spec

Date: 2026-08-12

## Purpose

A professional, single-page portfolio website for Tommy Iverson Johnson, a
Backend Software Engineer and Medical Informatics Officer, to showcase his
background, skills, work experience, and projects to potential
employers/clients.

## Personal Info

- Name: Tommy Iverson Johnson
- Location: Harper City, Maryland County, Republic of Liberia
- Email: johnsoniverson@gmail.com
- Phone: +231 886 137 029 / +231 778 892 288
- LinkedIn: https://www.linkedin.com/in/tommyiversonjohnson/
- GitHub: https://github.com/tommyiversonj

## Data note

The CV includes aggregate/summary statistics from Tommy's own professional
work (e.g. "patients served," "staff trained"). These are resume-style
achievement metrics, not individual patient or employee records. Confirmed
with the user (2026-08-12) as acceptable to publish publicly on this
portfolio.

## Tech Stack

- **Build tool**: Vite
- **Framework**: React
- **Styling**: Tailwind CSS (`darkMode: 'class'`)
- **Form backend**: Formspree (no custom server)
- **Hosting**: Vercel, auto-deploy from GitHub `main`

Chosen over Next.js (unnecessary routing/build complexity for a one-page
site) and multi-page React Router (heavier than needed, works against the
smooth-scroll single-page feel requested).

## Project Structure

```
tommy_johnson_portfolio/
├── index.html                # meta tags, favicon, title, OG tags
├── vite.config.js
├── tailwind.config.js
├── package.json
├── .env.example              # VITE_FORMSPREE_ID placeholder
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css              # Tailwind directives + base styles
    ├── data/
    │   └── content.js         # all resume content as plain JS data
    ├── hooks/
    │   └── useDarkMode.js      # dark mode state + localStorage persistence
    └── components/
        ├── Navbar.jsx          # sticky nav, anchor links, dark mode toggle, mobile menu
        ├── Hero.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Experience.jsx
        ├── Projects.jsx
        ├── ProjectCard.jsx
        ├── Education.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

Content lives in `data/content.js`, separate from components. Components
are presentational — they map over data and render it. This keeps future
edits (a new job, a new project) to one data file.

## Section Content

### Hero
- "Tommy Iverson Johnson — Backend Software Engineer & Medical Informatics
  Officer"
- One-line hook: "Building reliable backend systems and health information
  platforms across Liberia"
- CTA buttons: "View Projects", "Get In Touch"
- Location badge: Harper City, Liberia

### About (~80 words)
Condensed from the CV's professional summary: OpenMRS-based health
information systems, API design, workflow/data-quality improvements,
digital health deployments serving 150,000+ patients, ALX-trained backend
engineer (Python/PostgreSQL/SQL/REST). Ends with a personal touch:
mentoring aspiring health technologists and cooking.

### Skills (grouped cards)
- **Languages & Data**: Python, JavaScript, SQL, PostgreSQL
- **Backend & APIs**: REST API development, Django REST Framework, system/
  workflow configuration
- **Health Informatics**: OpenMRS, DHIS2, eLMIS
- **Tools & Platforms**: Git/GitHub, Linux, JIRA
- **AI & Analytics**: AI-assisted solutions, data analysis, visualization,
  reporting
- Soft skills as a small tag row underneath: collaboration, problem-
  solving, capacity building, technical training

### Experience (reverse-chronological, 3 entries)
1. **Medical Informatics Officer** — Partners In Health, Harper (Sep 2023–
   Present)
2. **Medical Informatics Technical Analyst** — Partners In Health Family
   Medicine, Harper (Sep 2020–Sep 2023)
3. **Data Manager** — Ministry of Health, Liberia, Harper (Sep 2018–Aug
   2020)

Each entry: dates + 3-4 bullet highlights from the CV's accomplishments.

### Projects (4 cards)
1. **OpenMRS Config – PIH Liberia** — GitHub:
   https://github.com/tommyiversonj/openmrs-config-pihliberia — Maven-based
   OpenMRS configuration package for PIH Liberia; custom EMR forms/
   workflows deployed via the OpenMRS SDK. Tech: Java/Maven, OpenMRS SDK,
   Shell, CSS, JavaScript.
2. **Inventory & Sales Management API** — GitHub:
   https://github.com/tommyiversonj/alx_be_captsone_project — ALX backend
   capstone: Django REST Framework API with token auth, PostgreSQL,
   role-based permissions, atomic stock transactions, filtering/search/
   ordering. Tech: Python, Django REST Framework, PostgreSQL.
3. **Mental Health EMR Rollout** — case study (no repo link) — Implemented
   Mental Health EMR at J.J. Dossen Hospital and Pleebo Health Center,
   achieving 100% digital mental health data capture.
4. **eLMIS & DHIS2 Data Systems** — case study (no repo link) — Managed
   national eLMIS and DHIS2 systems, improving reporting accuracy and
   supply chain visibility.

### Education (4 entries)
1. B.Sc. in Computer Science Engineering — William V.S. Tubman University,
   Liberia (Nov 2020)
2. Diploma in Leadership & Management in Health — University of Washington
   (Online, Apr–Jun 2019)
3. Certificate in Backend Web Development — ALX Software Engineering
   Program (Online, Sep 2025)
4. Data Engineering Program (In Progress) — ALX Africa (Online)

### Contact
Email/phone/LinkedIn/GitHub as icon links, plus a Formspree-backed form
(name, email, message).

## Theming

- Tailwind `darkMode: 'class'`; toggle in navbar flips `dark` class on
  `<html>`, persisted to `localStorage`, defaults to
  `prefers-color-scheme` on first visit.
- Palette: neutral slate/zinc backgrounds, single accent color (blue or
  teal) for links/buttons/highlights.

## Contact Form

Plain HTML `<form>` posting to `https://formspree.io/f/{FORM_ID}`. No JS
form library. `FORM_ID` read from `VITE_FORMSPREE_ID` env var (not
hardcoded) — set in `.env` locally and in Vercel project settings.
Requires the user to sign up free at formspree.io before first deploy.

## SEO & Accessibility

- Single static page: `<title>`, meta description, Open Graph tags
  (title/description/image), semantic HTML (`<section>`, `<nav>`, proper
  heading hierarchy) set directly in `index.html`.
- `sitemap.xml` and `robots.txt` for crawlability.
- Accessibility: semantic landmarks, `alt` text, visible focus states,
  sufficient color contrast in both themes, keyboard-navigable nav/mobile
  menu.

## Deployment

- Vite build (`npm run build` → static `dist/`).
- Vercel, connected to GitHub repo, auto-deploy on push to `main`.
- `VITE_FORMSPREE_ID` set in both `.env` (local) and Vercel project
  settings (production).
- README covers: local setup (`npm install && npm run dev`), obtaining a
  Formspree ID, and step-by-step Vercel deploy (import repo → set env var
  → deploy).

## Out of scope

- Blog/CMS functionality
- Multi-page routing (single-page scroll only)
- Backend/custom server (Formspree handles the only form)
- Analytics (can be added later if desired)

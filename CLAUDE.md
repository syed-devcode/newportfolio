# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A static single-page portfolio site (Syed Faisal Naseem — Web Developer & AI Integrator) built with plain HTML/CSS/JS — no framework, no build step, no package manager. Deployed on Cloudflare Pages.

## Development

There is no build/lint/test tooling in this repo (no `package.json`). To work on the site locally, just open `index.html` in a browser or serve the directory with any static file server, e.g.:

```
npx serve .
```

Changes to `css/styles.css` and `js/script.js` are picked up on refresh — no compilation step.

## Deployment

Deployed via Cloudflare Pages directly from this repo (origin: `github.com/syed-devcode/newportfolio`). Pushing to `main` deploys.

`_headers` disables caching (`Cache-Control: no-cache`) for `/css/*` and `/js/*` so CSS/JS changes show up immediately after a deploy instead of being served stale from cache.

## Architecture

Everything lives in three files:

- **`index.html`** — static markup/shell for all sections (nav, hero, about, resume, services, portfolio, contact, footer). Most section *bodies* are empty containers (e.g. `#skillsGrid`, `#timeline`, `#servicesGrid`, `#portfolioList`, `#contactLinks`) that get populated by JS at runtime.
- **`js/script.js`** — single file, two parts:
  1. **Content data** at the top (`TICKER_ITEMS`, `SKILLS`, `EXPERIENCE`, `EDUCATION`, `CERTS`, `SERVICES`, `PROJECTS`, `CONTACT_LINKS`) — this is where all site copy (skills, resume timeline, project descriptions, contact links) lives. To update site content, edit these arrays, not the HTML.
  2. **IIFEs below the data** that render each section's HTML from the data arrays into the container elements from `index.html`, plus behavior: custom cursor/spotlight, nav scroll shrink, mobile hamburger menu, scroll-reveal via `IntersectionObserver`, hero badge 3D tilt, ticker, animated skill bars, expandable portfolio project cards (with hover-preview and expanded video), and the contact form.
- **`css/styles.css`** — one file, sectioned with `/* ==== Section ==== */` comments matching the page sections (Tokens, Nav, Hero, Ticker, About, Shiny border cards, Resume, Services, Portfolio, Contact, Footer). Design tokens (colors, fonts) are CSS custom properties in `:root` at the top — `--background`, `--surface`, `--accent` (#ff6b35 orange), `--text-main`, plus `--font-heading` (Playfair Display), `--font-body` (DM Sans), `--font-mono` (DM Mono).

### Contact form

The contact form submits via **EmailJS** (loaded from CDN in `index.html`, configured in `js/script.js` with `EMAILJS_PUBLIC_KEY` / `EMAILJS_SERVICE_ID` / `EMAILJS_TEMPLATE_ID`) — there is no backend. See [[emailjs_gmail_selfloop_fix]] in memory for a known EmailJS/Gmail gotcha: the form fails silently if EmailJS's connected Gmail account is the same as the forward-to destination address.

### Portfolio project cards

Each entry in `PROJECTS` has a `video` path (from `Videos/`) used both as a muted hover-preview inside the collapsed row and as a larger looping video when the card is expanded. Only one project can be expanded at a time (`toggle()` collapses all others first).

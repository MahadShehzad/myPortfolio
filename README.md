# Mahad Shehzad — Portfolio

[![Deploy to GitHub Pages](https://github.com/MahadShehzad/myPortfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/MahadShehzad/myPortfolio/actions/workflows/deploy.yml)

My personal developer portfolio, built with **Angular** as a responsive bento-grid ("mosaic") layout.

**Live site:** https://mahadshehzad.github.io/myPortfolio/

## Highlights

- **Bento-mosaic layout:** about, skills, services, projects and contact appear as tiles that reflow from a multi-column grid on desktop to a single column on phones.
- **Five colour themes:** Cobalt Blaze, Citrus Punch, Plum Rose, Forest Signal and Ink Mono+. Switch with one click; the choice is remembered in `localStorage`.
- **Working contact form:** messages are delivered by email through [Web3Forms](https://web3forms.com), with no backend to host.
- **Scroll-reveal animations** via a lightweight directive, plus a custom inline SVG icon set (no icon-font download).
- **Modern Angular:** standalone components, signals and `OnPush` change detection throughout.
- **Automatic deployment:** every push to `master` builds the site and publishes it to GitHub Pages.

## Tech stack

| Area      | Tools                                         |
| --------- | --------------------------------------------- |
| Framework | Angular (standalone components, signals)      |
| Language  | TypeScript, SCSS                              |
| Forms     | Angular Forms + Web3Forms API                 |
| Hosting   | GitHub Pages via GitHub Actions               |
| Tests     | Vitest                                        |

## Getting started

Requires Node.js 22.22+ or 24.15+.

```bash
npm install
npm start          # http://localhost:4200
npm run build      # production build → dist/myPortfolio/browser
npm test           # unit tests
```

## Making it yours

All content lives in one file: [`src/app/core/portfolio-data.ts`](src/app/core/portfolio-data.ts).
Edit your name, bio, skills, services, projects and links there; no component changes are needed.

The contact form needs a free Web3Forms access key: create one at [web3forms.com](https://web3forms.com)
and set `WEB3FORMS_ACCESS_KEY` in the same file. Web3Forms keys are designed to be public in client-side code.

## Project structure

```
src/app/
├── components/      One folder per tile: hero, about, skills, services, projects, contact,
│                    navbar, footer, theme-switcher …
├── core/            portfolio-data.ts (all content) and theme.service.ts
└── shared/          icon set and the scroll-reveal directive
```

## Deployment

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds with `--base-href /myPortfolio/` and publishes
`dist/myPortfolio/browser` to GitHub Pages on every push to `master` (or manually from the Actions tab).

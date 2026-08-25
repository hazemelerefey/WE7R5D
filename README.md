# DAFE Steel — Website

Marketing and technical site for **DAFE Steel** (DigiSteel Team), a defect-aware
surface inspection system for flat steel production, built on the
[DAFEGate-YOLO](https://github.com/hazemelerefey/DigiSteel-YOLO) detection engine.

## Tech stack

Mirrors the front-end architecture of the HYDAC reference site, without its
TYPO3 CMS layer (the content here is static, so a CMS adds no value):

| Layer | Choice |
|---|---|
| UI framework | Vue 3 (Composition API, SFCs) |
| Routing | Vue Router 4 (history mode) |
| CSS | Bootstrap 5 grid/utilities + `--dafe-*` design tokens |
| Build | Vite 6 |
| i18n | Purpose-built composable, EN + AR with full RTL |

## Run

```sh
docker compose -f docker-compose.alloy.yaml up -d
```

The dev server listens on port **5173**. In Alloy, open the preview at
`http://localhost:8080`.

```sh
docker compose -f docker-compose.alloy.yaml logs -f site   # follow logs
docker compose -f docker-compose.alloy.yaml exec site npm run build
```

## Structure

```
src/
├── assets/styles/
│   ├── tokens.css      Brand palette, readiness scale, typography, geometry
│   └── main.css        Base + components (CSS logical properties for RTL)
├── components/         Header/mega-menu, footer, hero, jump menu, status chip
├── data/
│   ├── system.js       13 system modules, 4 stages, readiness status
│   └── results.js      Benchmark figures (language-neutral)
├── i18n/               en.js, ar.js, and the locale composable
├── router/
└── views/              HomeView, SystemView, TechnologyView
public/brand/           Web-optimised logo derivatives
DAFE STEEL/             Original brand package (master artwork)
```

## Design system notes

**Colour.** The five brand colours are contrast-audited. Only charcoal
(`#2B2F36`, 13:1) and deep red (`#C81D20`, 5.8:1) pass WCAG AA for body text on
white, so deep red carries all interactive meaning on light surfaces. Amber and
yellow fail on white but reach 6.3:1 and 8.3:1 on charcoal — hence the
alternating light/dark section rhythm.

**Readiness scale.** The brand gradient doubles as a maturity axis:
`Concept → Partner required → In development → Operational`. Status is never
communicated by colour alone; every chip also carries a glyph. The gradient is
direction-aware and flips under `dir="rtl"` so it always reads low → high.

**Localisation.** All copy lives in `src/i18n/`. Numeric results live in
`src/data/` so the two locales can never disagree about a figure. Arabic uses
Cairo and proper dual-form pluralisation.

## Content status

The site deliberately states what is and is not built. Two of thirteen system
modules are operational, five are in development, five require partners, and one
is a concept. Performance figures refer to the NEU-DET public benchmark and are
not a warranty of results on any specific production line.

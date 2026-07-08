# Kevin Bui — Cinematic Scroll Portfolio

Ink-black, emerald-lit, scroll-driven single page. The central 3D element is you:
a Seedance 2.0 orbit clip scrubbed frame-by-frame on a canvas as the visitor scrolls.

## Run it

```bash
cd kevin-portfolio
python3 -m http.server 8080
# open http://localhost:8080
```

Any static server works. Don't open index.html via file:// — the video pipeline
needs HTTP.

## What's inside

| File | Purpose |
|---|---|
| `index.html` | Page structure — hero, stats, pillars, work, finale, footer |
| `css/style.css` | Full design system (palette, Anton display type, grain, cards) |
| `js/main.js` | Lenis + GSAP choreography and the orbit scrub engine |
| `config.js` | **Edit here**: video URLs, social links, scrub tuning |
| `vendor/` | Lenis + GSAP vendored locally (no CDN dependency) |
| `assets/` | Local placeholder clips used if the CDN is unreachable |

## The orbit scrub engine (three-stage)

1. **Frame cache (best)** — loads the orbit clip with CORS, pre-extracts ~110
   frames into GPU ImageBitmaps during the preloader ("CALIBRATING ORBIT"),
   then scrubs with zero seek latency. Butter.
2. **Live scrub (automatic fallback)** — if the CDN doesn't allow CORS, the same
   clip is reloaded plainly and scrubbed by lerped `currentTime` seeks. Slightly
   softer, still smooth on a fully buffered 8s clip.
3. **Local placeholder** — if the CDN is unreachable entirely, a bundled test
   clip keeps the page alive.

The console logs which mode engaged (`[orbit] ...`).

## Things you'll want to edit (config.js)

- `links.linkedin`, `links.facebook`, `links.email` — currently placeholders.
- `links.github` — prefilled with github.com/Kevinbui16.
- `scrub.lerp` — lower = floatier scrub, higher = tighter tracking.

## Video assets

The three clips are self-hosted in `assets/` as Full HD (1920x1080) H.264 —
Topaz-upscaled from the Seedance 2.0 originals and transcoded for universal
browser playback (the raw upscales were 2K HEVC, which Chrome/Firefox won't
decode). Same-origin hosting guarantees the frame-cache (stage 1) scrub path
always runs. No external CDN dependency remains.

## Accessibility

`prefers-reduced-motion` collapses the scroll cinema into a static, fully
readable page. Keyboard focus is visible throughout; cards are tabbable.

## Company logos (experience section)

Each experience row shows a monogram chip by default. To show real logos, drop
PNG files (transparent background, roughly square) into `assets/logos/` named:
`h1.png`, `vcaa.png`, `chameleon.png`, `sas.png`, `dksh.png`, `deakin.png`.
They're picked up automatically — no code changes needed.

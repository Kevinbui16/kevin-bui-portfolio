/* ─────────────────────────────────────────────────────────────
   KEVIN BUI — PORTFOLIO CONFIG
   Everything you might want to edit lives here.
   ───────────────────────────────────────────────────────────── */
window.PORTFOLIO_CONFIG = {
  videos: {
    // Full HD (1080p H.264) self-hosted clips — Topaz-upscaled Seedance 2.0
    // originals, transcoded for universal browser playback. Same-origin, so
    // the buttery frame-cache scrub path is guaranteed.
    hero:    "assets/hero-orbit.mp4",
    builder: "assets/builder.mp4",
    closer:  "assets/closer.mp4",
  },
  localFallbacks: {
    hero:    "assets/placeholder-orbit.mp4",
    builder: "assets/placeholder-glow.mp4",
    closer:  "assets/placeholder-glow.mp4",
  },
  links: {
    linkedin: "https://www.linkedin.com/in/khoi-nguyen-bui/",
    github:   "https://github.com/Kevinbui16",
    facebook: "https://www.facebook.com/bui.nguyen.58118774",
    email:    "mailto:khoinguyenbui2004@gmail.com",
  },
  // Orbit scrub tuning
  scrub: {
    framesDesktop: 110,   // frames pre-cached from the 8s orbit on desktop
    framesMobile:  64,
    lerp:          0.12,  // playhead smoothing (lower = floatier)
  },
};

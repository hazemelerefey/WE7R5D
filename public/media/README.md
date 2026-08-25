# Hero media

The landing stage (`src/components/StageHero.vue`) accepts either a still or a
video. Drop the clip here and pass it to the component:

```vue
<StageHero
  full
  :video="'/media/hero.mp4'"
  :image="FIGURES.hero"   <!-- becomes the poster frame -->
  ...
/>
```

## Video specification

| Property | Value | Why |
|---|---|---|
| Container / codec | MP4 / H.264 (High, yuv420p) | Only combination that autoplays everywhere |
| Resolution | 1920×1080 | Stage is cropped with `object-fit: cover` |
| Duration | 8–20 s, **seamless loop** | Loops forever; a visible cut is obvious |
| Frame rate | 25 or 30 fps | Higher is wasted under a scrim |
| Audio | **None** — strip the track | Muted autoplay; an audio track is dead weight |
| File size | Target < 8 MB, hard ceiling 12 MB | It blocks first paint of the landing page |
| Bitrate | ~2–3 Mbps, or CRF 26–28 | Detail is lost under grayscale + scrim anyway |
| `faststart` | Required | Lets playback begin before full download |

Encode example:

```sh
ffmpeg -i source.mov -an \
  -vf "scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,fps=30" \
  -c:v libx264 -profile:v high -pix_fmt yuv420p -crf 27 \
  -movflags +faststart hero.mp4
```

## Composition constraints

The stage applies `grayscale(1)`, a 4% scale-up, and a directional dark scrim
(~90% opacity on the text side, ~66% on the far side). Consequences:

- **Do not colour-grade.** Colour is discarded. Compose for *tonal* contrast.
- **Keep the text side quiet.** Headline and buttons sit bottom-left in LTR and
  bottom-right in RTL, so avoid busy detail in the lower corners on both sides.
- **Slow motion only.** A locked-off or very slow move reads as confident; fast
  pans fight the text and expose compression.
- **No on-screen text, signage or logos.** They will be unreadable and dated.
- **No visible faces**, and any worker must be in correct PPE — a mill audience
  notices missing helmets and glasses immediately.

## Fallback

If no video is supplied the component renders `FIGURES.hero`, currently a real
hot-rolled surface cropped from the NEU-DET benchmark. Nothing breaks.

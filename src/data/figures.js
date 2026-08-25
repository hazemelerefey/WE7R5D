/**
 * Publication figures from the DigiSteel-YOLO research repository, plus the
 * defect panels cropped out of the NEU-DET class figure.
 *
 * These are the team's own artefacts, so the site is illustrated with real
 * measured output rather than decorative stock imagery.
 * Captions live in the i18n dictionaries under `figures.*`.
 */

export const FIGURES = {
  hero: '/figures/hero-steel.webp',
  duality: '/figures/duality.webp',
  macro: '/figures/architecture-macro.webp',
  micro: '/figures/architecture-micro.webp',
  featureMaps: '/figures/feature-maps.webp',
  efficiency: '/figures/efficiency.webp'
}

/** Per-class crops, keyed to match PER_CLASS ids in results.js. */
export const DEFECT_IMAGES = {
  crazing: '/figures/defect-crazing.webp',
  inclusion: '/figures/defect-inclusion.webp',
  patches: '/figures/defect-patches.webp',
  pitted: '/figures/defect-pitted.webp',
  scale: '/figures/defect-scale.webp',
  scratches: '/figures/defect-scratches.webp'
}

/** Side-by-side baseline vs DAFEGate detections. `id` keys the caption. */
export const COMPARISONS = [
  { id: 'crazing', src: '/figures/compare-crazing.webp' },
  { id: 'pitted', src: '/figures/compare-pitted.webp' },
  { id: 'scratches', src: '/figures/compare-scratches.webp' }
]

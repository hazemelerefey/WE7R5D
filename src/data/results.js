/**
 * Benchmark figures for DAFEGate-YOLO (DigiSteel / DAFE Steel).
 * Source: DigiSteel_Master_Document.md — NEU-DET, clean 70/20/10 split, 640px.
 * Numeric only, so both locales render identical values.
 */

export const HEADLINE_METRICS = [
  { id: 'map', value: '81.98%' },
  { id: 'recall', value: '79.79%' },
  { id: 'fps', value: '145' },
  { id: 'params', value: '2.69M' }
]

/** Metric labels and notes are short enough to keep bilingual inline. */
export const METRIC_LABELS = {
  en: {
    map: 'mAP@0.5',
    recall: 'Recall',
    fps: 'FPS',
    params: 'Parameters'
  },
  ar: {
    map: 'mAP@0.5',
    recall: 'الاستدعاء',
    fps: 'إطار/ث',
    params: 'المعاملات'
  }
}

export const METRIC_NOTES = {
  en: {
    map: 'Six defect classes, +2.63pp over baseline',
    recall: '+3.55pp — fewer escaped defects',
    fps: 'Real-time on a single GPU',
    params: 'Only +3.7% over YOLOv11n'
  },
  ar: {
    map: 'ستة أصناف عيوب، +٢٫٦٣ نقطة عن خط الأساس',
    recall: '+٣٫٥٥ نقطة — عيوب فائتة أقل',
    fps: 'زمن حقيقي على وحدة معالجة رسومية واحدة',
    params: 'بزيادة ٣٫٧٪ فقط عن YOLOv11n'
  }
}

export const BASELINE_COMPARISON = [
  { metric: 'mAP@0.5', baseline: '79.35%', ours: '81.98%', delta: '+2.63pp', dir: 'pos' },
  { metric: 'mAP@0.5:0.95', baseline: '45.83%', ours: '46.80%', delta: '+0.97pp', dir: 'pos' },
  { metric: 'Recall', baseline: '76.24%', ours: '79.79%', delta: '+3.55pp', dir: 'pos' },
  { metric: 'Precision', baseline: '74.15%', ours: '72.55%', delta: '−1.60pp', dir: 'neg' },
  { metric: 'Parameters', baseline: '2.59M', ours: '2.69M', delta: '+3.7%', dir: 'neutral' }
]

/** Per-class AP@0.5. `family` drives the linear/texture tag. */
export const PER_CLASS = [
  { id: 'crazing', family: 'linear', baseline: 43.6, ours: 49.1 },
  { id: 'inclusion', family: 'texture', baseline: 85.2, ours: 88.3 },
  { id: 'patches', family: 'texture', baseline: 91.0, ours: 91.7 },
  { id: 'pitted', family: 'texture', baseline: 79.3, ours: 85.0 },
  { id: 'scale', family: 'texture', baseline: 77.9, ours: 78.8 },
  { id: 'scratches', family: 'linear', baseline: 99.0, ours: 98.9 }
]

export const CLASS_NAMES = {
  en: {
    crazing: 'Crazing',
    inclusion: 'Inclusion',
    patches: 'Patches',
    pitted: 'Pitted surface',
    scale: 'Rolled-in scale',
    scratches: 'Scratches'
  },
  ar: {
    crazing: 'التشقق الشعري',
    inclusion: 'الشوائب',
    patches: 'الرقع',
    pitted: 'السطح المنقّر',
    scale: 'القشور المدرفلة',
    scratches: 'الخدوش'
  }
}

/** Fair-protocol competitors only. `ours` flags our row. */
export const LITERATURE = [
  { model: 'ASFRW-YOLO', base: 'YOLOv5s', map: '83.2%', map95: '46.4%', params: '6.20M', fps: '~125' },
  { model: 'YOLO-LSDI', base: 'YOLOv11n', map: '83.0%', map95: '—', params: '2.70M', fps: '162.1' },
  { model: 'DAFEGate-YOLO', base: 'YOLOv11n', map: '81.98%', map95: '46.80%', params: '2.69M', fps: '145.0', ours: true },
  { model: 'EFEN-YOLOv8', base: 'YOLOv8n', map: '80.4%', map95: '—', params: '—', fps: '—' },
  { model: 'MSFE-YOLO', base: 'YOLOv11s', map: '79.8%', map95: '—', params: '11.69M', fps: '89.3' },
  { model: 'ELS-YOLO', base: 'YOLOv11n', map: '79.5%', map95: '43.2%', params: '2.36M', fps: '—' },
  { model: 'Lightweight-YOLOv8', base: 'YOLOv8n', map: '78.6%', map95: '44.5%', params: '2.04M', fps: '171.5' },
  { model: 'SCCI-YOLO', base: 'YOLOv8n', map: '78.6%', map95: '—', params: '1.68M', fps: '270.2' }
]

export const LINKS = {
  demo: 'https://huggingface.co/spaces/hazemelerefy/DigiSteel-YOLO',
  repo: 'https://github.com/hazemelerefey/DigiSteel-YOLO',
  docker: 'https://hub.docker.com/r/hazemelerefey/digisteel-api'
}

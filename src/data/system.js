/**
 * System architecture data.
 * Names and notes live in the i18n dictionaries under `system.modules.<id>`;
 * only structure, numbering and readiness status live here so the two
 * languages can never disagree about the state of the system.
 */

export const STATUS = {
  OPERATIONAL: 'operational',
  DEVELOPMENT: 'development',
  PARTNER: 'partner',
  CONCEPT: 'concept'
}

/** Ordered worst → best, matching the brand gradient red → yellow. */
export const READINESS_SCALE = [
  { status: STATUS.CONCEPT, token: 'var(--dafe-status-concept)', glyph: '○' },
  { status: STATUS.PARTNER, token: 'var(--dafe-status-partner)', glyph: '◔' },
  { status: STATUS.DEVELOPMENT, token: 'var(--dafe-status-development)', glyph: '◕' },
  { status: STATUS.OPERATIONAL, token: 'var(--dafe-status-operational)', glyph: '●' }
]

export const GLYPH = READINESS_SCALE.reduce((acc, s) => {
  acc[s.status] = s.glyph
  return acc
}, {})

export const SYSTEM_STAGES = [
  {
    id: 'acquisition',
    modules: [
      { id: 'cameras', n: 1, status: STATUS.PARTNER },
      { id: 'lighting', n: 2, status: STATUS.PARTNER },
      { id: 'enclosure', n: 3, status: STATUS.PARTNER }
    ]
  },
  {
    id: 'compute',
    modules: [
      { id: 'edge', n: 4, status: STATUS.DEVELOPMENT },
      { id: 'engine', n: 5, status: STATUS.OPERATIONAL },
      { id: 'guard', n: 6, status: STATUS.OPERATIONAL }
    ]
  },
  {
    id: 'intelligence',
    modules: [
      { id: 'grading', n: 7, status: STATUS.DEVELOPMENT },
      { id: 'coilmap', n: 8, status: STATUS.DEVELOPMENT },
      { id: 'hmi', n: 9, status: STATUS.DEVELOPMENT },
      { id: 'dataplatform', n: 10, status: STATUS.CONCEPT }
    ]
  },
  {
    id: 'integration',
    modules: [
      { id: 'plc', n: 11, status: STATUS.PARTNER },
      { id: 'mlops', n: 12, status: STATUS.DEVELOPMENT },
      { id: 'service', n: 13, status: STATUS.PARTNER }
    ]
  }
]

export const ALL_MODULES = SYSTEM_STAGES.flatMap((s) => s.modules)

export const STATUS_COUNTS = READINESS_SCALE.map((s) => ({
  ...s,
  count: ALL_MODULES.filter((m) => m.status === s.status).length
}))

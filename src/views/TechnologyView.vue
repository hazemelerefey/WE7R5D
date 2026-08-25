<script setup>
import { computed } from 'vue'
import StageHero from '@/components/StageHero.vue'
import JumpMenu from '@/components/JumpMenu.vue'
import { t, locale } from '@/i18n/index.js'
import {
  BASELINE_COMPARISON,
  PER_CLASS,
  CLASS_NAMES,
  LITERATURE,
  LINKS
} from '@/data/results.js'

const sections = computed(() => [
  { id: 'duality', label: t('common.nav.items.duality') },
  { id: 'module', label: t('common.nav.items.module') },
  { id: 'gradient', label: t('common.nav.items.gradient') },
  { id: 'results', label: t('common.nav.items.results') },
  { id: 'per-class', label: t('common.nav.items.perClass') },
  { id: 'limits', label: t('common.nav.items.limits') }
])

const classNames = computed(() => CLASS_NAMES[locale.value] ?? CLASS_NAMES.en)
const moduleSteps = computed(() => t('technology.module.steps'))

function familyLabel(family) {
  return family === 'linear'
    ? t('technology.perClass.familyLinear')
    : t('technology.perClass.familyTexture')
}
</script>

<template>
  <StageHero
    :eyebrow="t('technology.stage.eyebrow')"
    :title="t('technology.stage.title')"
    :lead="t('technology.stage.lead')"
    :crumb="t('common.nav.technology')"
  >
    <template #actions>
      <a :href="LINKS.demo" target="_blank" rel="noopener" class="btn-dafe-light">
        {{ t('common.cta.tryDemo') }}
        <span class="btn-arrow" aria-hidden="true">→</span>
      </a>
      <a :href="LINKS.repo" target="_blank" rel="noopener" class="btn-dafe-ghost">
        {{ t('common.cta.readPaper') }}
      </a>
    </template>
  </StageHero>

  <JumpMenu :sections="sections" />

  <!-- Morphological duality -->
  <section id="duality" class="section">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">{{ t('technology.duality.eyebrow') }}</p>
        <h2 class="headline--underlined">{{ t('technology.duality.title') }}</h2>
        <p class="lead mt-3">{{ t('technology.duality.lead') }}</p>
      </div>

      <div class="row g-3">
        <div v-for="(item, i) in t('technology.duality.items')" :key="i" class="col-lg-6">
          <article class="tile h-100">
            <p class="tile__index">{{ String(i + 1).padStart(2, '0') }}</p>
            <h3>{{ item.title }}</h3>
            <p class="tile__body mb-3">{{ item.pattern }}</p>
            <dl class="row mb-0" style="font-size: 0.875rem">
              <dt class="col-4 text-muted-dafe">{{ t('technology.duality.classesLabel') }}</dt>
              <dd class="col-8 fw-bold">{{ item.classes }}</dd>
              <dt class="col-4 text-muted-dafe">{{ t('technology.duality.cueLabel') }}</dt>
              <dd class="col-8 fw-bold mb-0">{{ item.cue }}</dd>
            </dl>
          </article>
        </div>
      </div>

      <div class="callout mt-4">{{ t('technology.duality.gap') }}</div>
    </div>
  </section>

  <!-- DAFEGate module -->
  <section id="module" class="section section--dark">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">{{ t('technology.module.eyebrow') }}</p>
        <h2 class="headline--underlined">{{ t('technology.module.title') }}</h2>
        <p class="lead mt-3">{{ t('technology.module.lead') }}</p>
      </div>

      <div class="row g-5">
        <div class="col-lg-6">
          <!-- Branch A and B run in parallel, so they are laid out side by side
               rather than in the vertical chain. -->
          <div class="flow">
            <div class="flow__node">
              <p class="flow__tag mb-0">{{ moduleSteps[0].tag }}</p>
              <p class="flow__title">{{ moduleSteps[0].title }}</p>
              <p class="flow__math mb-0">{{ moduleSteps[0].math }}</p>
            </div>

            <p class="flow__arrow mb-0" aria-hidden="true">↓</p>

            <div class="row g-2 flow__parallel">
              <div v-for="i in [1, 2]" :key="i" class="col-sm-6">
                <div class="flow__node flow__node--branch h-100">
                  <p class="flow__tag mb-0">{{ moduleSteps[i].tag }}</p>
                  <p class="flow__title">{{ moduleSteps[i].title }}</p>
                  <p class="flow__math mb-0">{{ moduleSteps[i].math }}</p>
                </div>
              </div>
            </div>

            <p class="flow__arrow mb-0" aria-hidden="true">↓</p>

            <div class="flow__node">
              <p class="flow__tag mb-0">{{ moduleSteps[3].tag }}</p>
              <p class="flow__title">{{ moduleSteps[3].title }}</p>
              <p class="flow__math mb-0">{{ moduleSteps[3].math }}</p>
            </div>

            <p class="flow__arrow mb-0" aria-hidden="true">↓</p>

            <div class="flow__node flow__node--out">
              <p class="flow__tag mb-0">{{ moduleSteps[4].tag }}</p>
              <p class="flow__title">{{ moduleSteps[4].title }}</p>
              <p class="flow__math mb-0">{{ moduleSteps[4].math }}</p>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <h3 class="mb-3">{{ t('technology.module.notesTitle') }}</h3>
          <div class="stack">
            <div v-for="(n, i) in t('technology.module.notes')" :key="i">
              <p class="metric__label mb-1">{{ n.k }}</p>
              <p class="lead mb-0" style="font-size: 0.9375rem">{{ n.v }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Additive vs multiplicative -->
  <section id="gradient" class="section">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">{{ t('technology.gradient.eyebrow') }}</p>
        <h2 class="headline--underlined">{{ t('technology.gradient.title') }}</h2>
        <p class="lead mt-3">{{ t('technology.gradient.lead') }}</p>
      </div>

      <div class="table-wrap">
        <table class="table-dafe">
          <caption class="visually-hidden">{{ t('technology.gradient.tableCaption') }}</caption>
          <thead>
            <tr>
              <th scope="col">{{ t('technology.gradient.cols.property') }}</th>
              <th scope="col">{{ t('technology.gradient.cols.mult') }}</th>
              <th scope="col">{{ t('technology.gradient.cols.add') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(r, i) in t('technology.gradient.rows')" :key="i">
              <th scope="row" class="fw-bold">{{ r.p }}</th>
              <td class="table-num">{{ r.m }}</td>
              <td class="table-num fw-bold">{{ r.a }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="callout mt-4">{{ t('technology.gradient.conclusion') }}</div>
    </div>
  </section>

  <!-- Results -->
  <section id="results" class="section section--muted">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">{{ t('technology.results.eyebrow') }}</p>
        <h2 class="headline--underlined">{{ t('technology.results.title') }}</h2>
        <p class="lead mt-3">{{ t('technology.results.lead') }}</p>
      </div>

      <div class="table-wrap">
        <table class="table-dafe">
          <thead>
            <tr>
              <th scope="col">{{ t('technology.results.cols.metric') }}</th>
              <th scope="col">{{ t('technology.results.cols.baseline') }}</th>
              <th scope="col">{{ t('technology.results.cols.ours') }}</th>
              <th scope="col">{{ t('technology.results.cols.delta') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="r in BASELINE_COMPARISON" :key="r.metric">
              <th scope="row" class="fw-bold">{{ r.metric }}</th>
              <td class="table-num">{{ r.baseline }}</td>
              <td class="table-num fw-bold">{{ r.ours }}</td>
              <td
                class="table-num"
                :class="{ 'delta-pos': r.dir === 'pos', 'delta-neg': r.dir === 'neg' }"
              >
                {{ r.delta }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="row g-4 mt-4">
        <div class="col-lg-6">
          <h3 class="mb-2">{{ t('technology.results.protocolTitle') }}</h3>
          <p class="lead mb-0" style="font-size: 0.9375rem">
            {{ t('technology.results.protocolBody') }}
          </p>
        </div>
        <div class="col-lg-6">
          <h3 class="mb-3">{{ t('technology.literature.title') }}</h3>
          <p class="lead mb-3" style="font-size: 0.9375rem">
            {{ t('technology.literature.lead') }}
          </p>
        </div>
      </div>

      <div class="table-wrap mt-2">
        <table class="table-dafe">
          <thead>
            <tr>
              <th scope="col">{{ t('technology.literature.cols.model') }}</th>
              <th scope="col">{{ t('technology.literature.cols.base') }}</th>
              <th scope="col">{{ t('technology.literature.cols.map') }}</th>
              <th scope="col">{{ t('technology.literature.cols.map95') }}</th>
              <th scope="col">{{ t('technology.literature.cols.params') }}</th>
              <th scope="col">{{ t('technology.literature.cols.fps') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="r in LITERATURE" :key="r.model" :class="{ 'is-ours': r.ours }">
              <th scope="row">
                {{ r.ours ? t('technology.literature.ours') : r.model }}
              </th>
              <td>{{ r.base }}</td>
              <td class="table-num">{{ r.map }}</td>
              <td class="table-num">{{ r.map95 }}</td>
              <td class="table-num">{{ r.params }}</td>
              <td class="table-num">{{ r.fps }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- Per-class -->
  <section id="per-class" class="section">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">{{ t('technology.perClass.eyebrow') }}</p>
        <h2 class="headline--underlined">{{ t('technology.perClass.title') }}</h2>
        <p class="lead mt-3">{{ t('technology.perClass.lead') }}</p>
      </div>

      <div class="bar__legend">
        <span class="bar__key">
          <i style="background: var(--dafe-ink-3); opacity: 0.55" aria-hidden="true"></i>
          {{ t('technology.perClass.legendBaseline') }}
        </span>
        <span class="bar__key">
          <i style="background: var(--dafe-gradient)" aria-hidden="true"></i>
          {{ t('technology.perClass.legendOurs') }}
        </span>
      </div>

      <div class="bars">
        <div v-for="c in PER_CLASS" :key="c.id">
          <div class="bar__head">
            <span class="bar__name">
              {{ classNames[c.id] }}
              <span class="text-muted-dafe fw-normal">· {{ familyLabel(c.family) }}</span>
            </span>
            <span class="table-num">
              <span class="text-muted-dafe">{{ c.baseline.toFixed(1) }}%</span>
              →
              <strong>{{ c.ours.toFixed(1) }}%</strong>
              <span
                :class="c.ours >= c.baseline ? 'delta-pos' : 'delta-neg'"
                style="margin-inline-start: 0.5rem"
              >
                {{ c.ours >= c.baseline ? '+' : '−'
                }}{{ Math.abs(c.ours - c.baseline).toFixed(1) }}pp
              </span>
            </span>
          </div>
          <div
            class="bar__track"
            role="img"
            :aria-label="`${classNames[c.id]}: ${c.baseline}% → ${c.ours}%`"
          >
            <div class="bar__fill bar__fill--base" :style="{ width: `${c.baseline}%` }"></div>
            <div class="bar__fill bar__fill--ours" :style="{ width: `${c.ours}%` }"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Limitations -->
  <section id="limits" class="section section--dark">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">{{ t('technology.limits.eyebrow') }}</p>
        <h2 class="headline--underlined">{{ t('technology.limits.title') }}</h2>
        <p class="lead mt-3">{{ t('technology.limits.lead') }}</p>
      </div>

      <div class="row g-3">
        <div v-for="(item, i) in t('technology.limits.items')" :key="i" class="col-md-6">
          <div class="metric h-100">
            <p class="metric__label" style="font-size: 1rem">{{ item.title }}</p>
            <p class="metric__note mb-0">{{ item.body }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

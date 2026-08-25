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
import { FIGURES, DEFECT_IMAGES, COMPARISONS } from '@/data/figures.js'

const sections = computed(() => [
  { id: 'duality', label: t('common.nav.items.duality') },
  { id: 'defects', label: t('technology.defects.navLabel') },
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

function defectAlt(id) {
  return t('figures.defectAlt').replace('{name}', classNames.value[id])
}
</script>

<template>
  <StageHero
    :eyebrow="t('technology.stage.eyebrow')"
    :title="t('technology.stage.title')"
    :lead="t('technology.stage.lead')"
    :crumb="t('common.nav.technology')"
    :image="FIGURES.hero"
    :image-alt="t('figures.hero')"
  >
    <template #actions>
      <a :href="LINKS.demo" target="_blank" rel="noopener" class="btn-dafe">
        {{ t('common.cta.tryDemo') }}
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

      <div class="row g-4">
        <div class="col-lg-7">
          <figure class="figure-plate mb-0">
            <img :src="FIGURES.duality" :alt="t('figures.duality')" loading="lazy" />
            <figcaption>{{ t('figures.duality') }}</figcaption>
          </figure>
        </div>
        <div class="col-lg-5">
          <div class="stack">
            <article
              v-for="(item, i) in t('technology.duality.items')"
              :key="i"
              class="tile tile--text"
            >
              <div class="tile__body">
                <h3>{{ item.title }}</h3>
                <p class="tile__text">{{ item.pattern }}</p>
                <dl class="dl-rows mt-3">
                  <div>
                    <dt>{{ t('technology.duality.classesLabel') }}</dt>
                    <dd>{{ item.classes }}</dd>
                  </div>
                  <div>
                    <dt>{{ t('technology.duality.cueLabel') }}</dt>
                    <dd>{{ item.cue }}</dd>
                  </div>
                </dl>
              </div>
            </article>
          </div>
        </div>
      </div>

      <div class="callout mt-4">{{ t('technology.duality.gap') }}</div>
    </div>
  </section>

  <!-- Defect library: real annotated samples -->
  <section id="defects" class="section section--muted">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">{{ t('technology.defects.eyebrow') }}</p>
        <h2 class="headline--underlined">{{ t('technology.defects.title') }}</h2>
        <p class="lead mt-3">{{ t('technology.defects.lead') }}</p>
      </div>

      <div class="row g-3">
        <div v-for="c in PER_CLASS" :key="c.id" class="col-6 col-lg-4">
          <article class="tile">
            <div class="tile__media ratio-box ratio-square">
              <img :src="DEFECT_IMAGES[c.id]" :alt="defectAlt(c.id)" loading="lazy" />
            </div>
            <div class="tile__body">
              <h3>{{ classNames[c.id] }}</h3>
              <p class="tile__text mb-0" style="font-size: 0.8125rem">
                {{ familyLabel(c.family) }}
              </p>
              <p class="tile__meta mb-0">
                AP {{ c.ours.toFixed(1) }}%
                <span :class="c.ours >= c.baseline ? 'delta-pos' : 'delta-neg'">
                  {{ c.ours >= c.baseline ? '+' : '−'
                  }}{{ Math.abs(c.ours - c.baseline).toFixed(1) }}pp
                </span>
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>

  <!-- DAFEGate module -->
  <section id="module" class="section">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">{{ t('technology.module.eyebrow') }}</p>
        <h2 class="headline--underlined">{{ t('technology.module.title') }}</h2>
        <p class="lead mt-3">{{ t('technology.module.lead') }}</p>
      </div>

      <figure class="figure-plate mb-4">
        <img :src="FIGURES.macro" :alt="t('figures.macro')" loading="lazy" />
        <figcaption>{{ t('figures.macro') }}</figcaption>
      </figure>

      <div class="row g-4">
        <div class="col-lg-6">
          <figure class="figure-plate mb-0">
            <img :src="FIGURES.micro" :alt="t('figures.micro')" loading="lazy" />
            <figcaption>{{ t('figures.micro') }}</figcaption>
          </figure>
        </div>

        <div class="col-lg-6">
          <!-- Branches A and B run concurrently, so they sit side by side. -->
          <div class="flow">
            <div class="flow__node">
              <p class="flow__tag mb-0">{{ moduleSteps[0].tag }}</p>
              <p class="flow__title">{{ moduleSteps[0].title }}</p>
              <p class="mono mb-0">{{ moduleSteps[0].math }}</p>
            </div>
            <p class="flow__arrow mb-0" aria-hidden="true">↓</p>
            <div class="row g-2 flow__parallel">
              <div v-for="i in [1, 2]" :key="i" class="col-sm-6">
                <div class="flow__node flow__node--branch h-100">
                  <p class="flow__tag mb-0">{{ moduleSteps[i].tag }}</p>
                  <p class="flow__title">{{ moduleSteps[i].title }}</p>
                  <p class="mono mb-0">{{ moduleSteps[i].math }}</p>
                </div>
              </div>
            </div>
            <p class="flow__arrow mb-0" aria-hidden="true">↓</p>
            <div class="flow__node">
              <p class="flow__tag mb-0">{{ moduleSteps[3].tag }}</p>
              <p class="flow__title">{{ moduleSteps[3].title }}</p>
              <p class="mono mb-0">{{ moduleSteps[3].math }}</p>
            </div>
            <p class="flow__arrow mb-0" aria-hidden="true">↓</p>
            <div class="flow__node flow__node--out">
              <p class="flow__tag mb-0">{{ moduleSteps[4].tag }}</p>
              <p class="flow__title">{{ moduleSteps[4].title }}</p>
              <p class="mono mb-0">{{ moduleSteps[4].math }}</p>
            </div>
          </div>
        </div>
      </div>

      <h3 class="mt-5 mb-3">{{ t('technology.module.notesTitle') }}</h3>
      <div class="row g-3">
        <div v-for="(n, i) in t('technology.module.notes')" :key="i" class="col-md-6 col-lg-3">
          <article class="tile tile--text">
            <div class="tile__body">
              <h3 style="font-size: 1rem">{{ n.k }}</h3>
              <p class="tile__text mb-0">{{ n.v }}</p>
            </div>
          </article>
        </div>
      </div>

      <figure class="figure-plate mt-4 mb-0">
        <img :src="FIGURES.featureMaps" :alt="t('figures.featureMaps')" loading="lazy" />
        <figcaption>{{ t('figures.featureMaps') }}</figcaption>
      </figure>
    </div>
  </section>

  <!-- Additive vs multiplicative -->
  <section id="gradient" class="section section--muted">
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
              <th scope="row">{{ r.p }}</th>
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
  <section id="results" class="section">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">{{ t('technology.results.eyebrow') }}</p>
        <h2 class="headline--underlined">{{ t('technology.results.title') }}</h2>
        <p class="lead mt-3">{{ t('technology.results.lead') }}</p>
      </div>

      <div class="row g-4">
        <div class="col-lg-7">
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
                  <th scope="row">{{ r.metric }}</th>
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
        </div>
        <div class="col-lg-5">
          <figure class="figure-plate mb-0">
            <img :src="FIGURES.efficiency" :alt="t('figures.efficiency')" loading="lazy" />
            <figcaption>{{ t('figures.efficiency') }}</figcaption>
          </figure>
        </div>
      </div>

      <div class="callout mt-4">
        <strong class="d-block mb-2">{{ t('technology.results.protocolTitle') }}</strong>
        {{ t('technology.results.protocolBody') }}
      </div>

      <h3 class="mt-5 mb-2">{{ t('technology.literature.title') }}</h3>
      <p class="subline mb-3">{{ t('technology.literature.lead') }}</p>
      <div class="table-wrap">
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
              <th scope="row">{{ r.ours ? t('technology.literature.ours') : r.model }}</th>
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

  <!-- Per-class + qualitative -->
  <section id="per-class" class="section section--muted">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">{{ t('technology.perClass.eyebrow') }}</p>
        <h2 class="headline--underlined">{{ t('technology.perClass.title') }}</h2>
        <p class="lead mt-3">{{ t('technology.perClass.lead') }}</p>
      </div>

      <div class="bar__legend">
        <span class="bar__key">
          <i style="background: var(--dafe-grey-light)" aria-hidden="true"></i>
          {{ t('technology.perClass.legendBaseline') }}
        </span>
        <span class="bar__key">
          <i style="background: var(--dafe-primary)" aria-hidden="true"></i>
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

      <h3 class="mt-5 mb-2">{{ t('figures.compare.title') }}</h3>
      <p class="subline mb-3">{{ t('figures.compare.lead') }}</p>
      <!-- Each plate is a wide two-panel comparison, so it needs the full
           column width to stay legible. -->
      <div class="stack">
        <figure v-for="c in COMPARISONS" :key="c.id" class="figure-plate mb-0">
          <img :src="c.src" :alt="t(`figures.compare.${c.id}`)" loading="lazy" />
          <figcaption>{{ t(`figures.compare.${c.id}`) }}</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <!-- Limitations -->
  <section id="limits" class="section">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">{{ t('technology.limits.eyebrow') }}</p>
        <h2 class="headline--underlined">{{ t('technology.limits.title') }}</h2>
        <p class="lead mt-3">{{ t('technology.limits.lead') }}</p>
      </div>

      <div class="row g-3">
        <div v-for="(item, i) in t('technology.limits.items')" :key="i" class="col-md-6">
          <article class="tile tile--text">
            <div class="tile__body">
              <h3>{{ item.title }}</h3>
              <p class="tile__text mb-0">{{ item.body }}</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

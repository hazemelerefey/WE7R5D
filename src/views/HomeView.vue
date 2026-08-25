<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import StageHero from '@/components/StageHero.vue'
import StatusChip from '@/components/StatusChip.vue'
import { t, locale, countPhrase } from '@/i18n/index.js'
import { HEADLINE_METRICS, METRIC_LABELS, METRIC_NOTES, LINKS } from '@/data/results.js'
import { SYSTEM_STAGES, STATUS_COUNTS } from '@/data/system.js'
import { FIGURES } from '@/data/figures.js'

const notes = computed(() => METRIC_NOTES[locale.value] ?? METRIC_NOTES.en)
const labels = computed(() => METRIC_LABELS[locale.value] ?? METRIC_LABELS.en)
</script>

<template>
  <StageHero
    full
    :eyebrow="t('home.stage.eyebrow')"
    :title="t('home.stage.title')"
    :lead="t('home.stage.lead')"
    :image="FIGURES.hero"
    :image-alt="t('figures.hero')"
  >
    <template #actions>
      <RouterLink to="/system" class="btn-dafe">
        {{ t('common.cta.exploreSystem') }}
      </RouterLink>
      <RouterLink to="/technology" class="btn-dafe-ghost">
        {{ t('common.cta.seeTechnology') }}
      </RouterLink>
    </template>
  </StageHero>

  <!-- Key figures -->
  <section class="section section--tight">
    <div class="container">
      <p class="eyebrow">{{ t('home.metricsTitle') }}</p>
      <div class="figures">
        <div v-for="m in HEADLINE_METRICS" :key="m.id" class="figure-cell">
          <p class="figure-cell__value">{{ m.value }}</p>
          <p class="figure-cell__label">{{ labels[m.id] }}</p>
          <p class="figure-cell__note">{{ notes[m.id] }}</p>
        </div>
      </div>
      <p class="subline mt-3 mb-0">{{ t('home.metricsNote') }}</p>
    </div>
  </section>

  <!-- Problem -->
  <section class="section section--muted">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">{{ t('home.problem.eyebrow') }}</p>
        <h2 class="headline--underlined">{{ t('home.problem.title') }}</h2>
        <p class="lead mt-3">{{ t('home.problem.lead') }}</p>
      </div>
      <div class="row g-3">
        <div v-for="(item, i) in t('home.problem.items')" :key="i" class="col-md-6 col-lg-3">
          <article class="tile tile--text">
            <div class="tile__body">
              <h3>{{ item.title }}</h3>
              <p class="tile__text">{{ item.body }}</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>

  <!-- The product is the system -->
  <section class="section">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">{{ t('home.systemTeaser.eyebrow') }}</p>
        <h2 class="headline--underlined">{{ t('home.systemTeaser.title') }}</h2>
        <p class="lead mt-3">{{ t('home.systemTeaser.lead') }}</p>
      </div>

      <p class="eyebrow">{{ t('home.systemTeaser.stagesTitle') }}</p>
      <div class="row g-3">
        <div v-for="s in SYSTEM_STAGES" :key="s.id" class="col-md-6 col-xl-3">
          <div class="stage-block">
            <div class="stage-block__head">
              <p class="stage-block__step mb-0">{{ t(`system.stages.${s.id}.step`) }}</p>
              <p class="stage-block__title mb-0">{{ t(`system.stages.${s.id}.title`) }}</p>
            </div>
            <div class="stage-block__body">
              <div v-for="mod in s.modules" :key="mod.id" class="module">
                <p class="module__name mb-1">
                  <span class="module__num">{{ String(mod.n).padStart(2, '0') }}</span>
                  {{ t(`system.modules.${mod.id}.name`) }}
                </p>
                <StatusChip :status="mod.status" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Readiness summary -->
      <div class="readiness mt-4">
        <div class="readiness__row">
          <div
            v-for="s in STATUS_COUNTS"
            :key="s.status"
            class="readiness__cell"
            :style="{ '--swatch': s.token }"
          >
            <p class="readiness__count mb-0">{{ s.count }}</p>
            <p class="readiness__name mb-0">
              <span aria-hidden="true">{{ s.glyph }}</span>
              {{ t(`common.status.${s.status}`) }}
            </p>
            <p class="readiness__hint mb-0">{{ countPhrase(s.count, 'system.readiness.unit') }}</p>
          </div>
        </div>
      </div>

      <div class="callout mt-4">
        <strong class="d-block mb-2">{{ t('home.systemTeaser.honestTitle') }}</strong>
        {{ t('home.systemTeaser.honestBody') }}
      </div>

      <div class="btn-row mt-4">
        <RouterLink to="/system" class="btn-dafe">{{ t('common.cta.exploreSystem') }}</RouterLink>
      </div>
    </div>
  </section>

  <!-- Technology teaser: real figure, not decoration -->
  <section class="section section--muted">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">{{ t('home.techTeaser.eyebrow') }}</p>
        <h2 class="headline--underlined">{{ t('home.techTeaser.title') }}</h2>
      </div>

      <div class="promo">
        <div class="ratio-box ratio-normal ratio-box--contain">
          <img :src="FIGURES.duality" :alt="t('figures.duality')" loading="lazy" />
        </div>
        <div class="promo__text">
          <p class="lead">{{ t('home.techTeaser.lead') }}</p>
          <dl class="dl-rows mt-4">
            <div>
              <dt>{{ t('home.techTeaser.resultLabel') }}</dt>
              <dd>{{ t('home.techTeaser.resultValue') }}</dd>
            </div>
          </dl>
          <p class="subline mt-2">
            {{ t('home.techTeaser.resultNote') }}
          </p>
          <div class="btn-row mt-4">
            <RouterLink to="/technology" class="btn-dafe">
              {{ t('common.cta.seeTechnology') }}
            </RouterLink>
            <a :href="LINKS.demo" target="_blank" rel="noopener" class="btn-dafe-ghost">
              {{ t('common.cta.tryDemo') }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Industries -->
  <section class="section">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">{{ t('home.industries.eyebrow') }}</p>
        <h2 class="headline--underlined">{{ t('home.industries.title') }}</h2>
        <p class="lead mt-3">{{ t('home.industries.lead') }}</p>
      </div>
      <div class="row g-3">
        <div v-for="(item, i) in t('home.industries.items')" :key="i" class="col-md-6 col-lg-4">
          <article class="tile tile--text">
            <div class="tile__body">
              <h3>{{ item.title }}</h3>
              <p class="tile__text">{{ item.body }}</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>

  <!-- Partner CTA -->
  <section class="section section--muted">
    <div class="container">
      <div class="row g-4 align-items-end">
        <div class="col-lg-8">
          <p class="eyebrow">{{ t('home.partner.eyebrow') }}</p>
          <h2 class="headline--underlined">{{ t('home.partner.title') }}</h2>
          <p class="lead mt-3 mb-0">{{ t('home.partner.lead') }}</p>
        </div>
        <div class="col-lg-4">
          <RouterLink to="/system#partners" class="btn-dafe">
            {{ t('common.cta.becomePartner') }}
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

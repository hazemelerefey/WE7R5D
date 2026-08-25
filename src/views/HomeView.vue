<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import StageHero from '@/components/StageHero.vue'
import StatusChip from '@/components/StatusChip.vue'
import { t, locale, countPhrase } from '@/i18n/index.js'
import { HEADLINE_METRICS, METRIC_LABELS, METRIC_NOTES, LINKS } from '@/data/results.js'
import { SYSTEM_STAGES, STATUS_COUNTS } from '@/data/system.js'

const notes = computed(() => METRIC_NOTES[locale.value] ?? METRIC_NOTES.en)
const labels = computed(() => METRIC_LABELS[locale.value] ?? METRIC_LABELS.en)
</script>

<template>
  <StageHero
    :eyebrow="t('home.stage.eyebrow')"
    :title="t('home.stage.title')"
    :lead="t('home.stage.lead')"
  >
    <template #actions>
      <RouterLink to="/system" class="btn-dafe-light">
        {{ t('common.cta.exploreSystem') }}
        <span class="btn-arrow" aria-hidden="true">→</span>
      </RouterLink>
      <RouterLink to="/technology" class="btn-dafe-ghost">
        {{ t('common.cta.seeTechnology') }}
      </RouterLink>
    </template>
  </StageHero>

  <!-- Metrics -->
  <section class="section section--dark">
    <div class="container">
      <div class="section-head">
        <h2 class="headline--underlined">{{ t('home.metricsTitle') }}</h2>
      </div>
      <div class="row g-3">
        <div v-for="m in HEADLINE_METRICS" :key="m.id" class="col-6 col-lg-3">
          <div class="metric">
            <p class="metric__value">{{ m.value }}</p>
            <p class="metric__label">{{ labels[m.id] }}</p>
            <p class="metric__note">{{ notes[m.id] }}</p>
          </div>
        </div>
      </div>
      <p class="lead mt-4 mb-0" style="font-size: 0.875rem">{{ t('home.metricsNote') }}</p>
    </div>
  </section>

  <!-- Problem -->
  <section class="section">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">{{ t('home.problem.eyebrow') }}</p>
        <h2 class="headline--underlined">{{ t('home.problem.title') }}</h2>
        <p class="lead mt-3">{{ t('home.problem.lead') }}</p>
      </div>
      <div class="row g-3">
        <div v-for="(item, i) in t('home.problem.items')" :key="i" class="col-md-6 col-lg-3">
          <article class="tile">
            <p class="tile__index">{{ String(i + 1).padStart(2, '0') }}</p>
            <h3>{{ item.title }}</h3>
            <p class="tile__body">{{ item.body }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>

  <!-- The system is the product -->
  <section class="section section--dark">
    <div class="container">
      <div class="row g-5 align-items-start">
        <div class="col-lg-5">
          <p class="eyebrow">{{ t('home.systemTeaser.eyebrow') }}</p>
          <h2 class="headline--underlined">{{ t('home.systemTeaser.title') }}</h2>
          <p class="lead mt-3">{{ t('home.systemTeaser.lead') }}</p>
          <div class="btn-row mt-4">
            <RouterLink to="/system" class="btn-dafe-light">
              {{ t('common.cta.exploreSystem') }}
              <span class="btn-arrow" aria-hidden="true">→</span>
            </RouterLink>
          </div>
        </div>

        <div class="col-lg-7">
          <p class="eyebrow">{{ t('home.systemTeaser.stagesTitle') }}</p>
          <div class="row g-3">
            <div v-for="s in SYSTEM_STAGES" :key="s.id" class="col-sm-6">
              <div class="metric h-100">
                <p class="metric__note mb-1">{{ t(`system.stages.${s.id}.step`) }}</p>
                <p class="metric__label mb-2" style="font-size: 1rem">
                  {{ t(`system.stages.${s.id}.title`) }}
                </p>
                <div class="d-flex flex-wrap gap-2 on-dark">
                  <StatusChip
                    v-for="mod in s.modules"
                    :key="mod.id"
                    :status="mod.status"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="readiness mt-4">
            <h3 style="font-size: 1rem">{{ t('home.systemTeaser.honestTitle') }}</h3>
            <p class="readiness__item mt-2 mb-0">{{ t('home.systemTeaser.honestBody') }}</p>
            <div class="readiness__scale" aria-hidden="true"></div>
            <div class="d-flex flex-wrap gap-3">
              <p v-for="s in STATUS_COUNTS" :key="s.status" class="readiness__item mb-0">
                <strong>{{ countPhrase(s.count, 'system.readiness.unit') }}</strong>
                {{ t(`common.status.${s.status}`) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Technology teaser -->
  <section class="section section--muted">
    <div class="container">
      <div class="row g-5 align-items-center">
        <div class="col-lg-7">
          <p class="eyebrow">{{ t('home.techTeaser.eyebrow') }}</p>
          <h2 class="headline--underlined">{{ t('home.techTeaser.title') }}</h2>
          <p class="lead mt-3">{{ t('home.techTeaser.lead') }}</p>
          <div class="btn-row mt-4">
            <RouterLink to="/technology" class="btn-dafe">
              {{ t('common.cta.seeTechnology') }}
              <span class="btn-arrow" aria-hidden="true">→</span>
            </RouterLink>
            <a :href="LINKS.demo" target="_blank" rel="noopener" class="btn-dafe-ghost">
              {{ t('common.cta.tryDemo') }}
            </a>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="promo">
            <p class="eyebrow mb-2">{{ t('home.techTeaser.resultLabel') }}</p>
            <p class="metric__value" style="font-size: clamp(3rem, 8vw, 4.5rem)">
              {{ t('home.techTeaser.resultValue') }}
            </p>
            <p class="metric__note mt-2 mb-0">{{ t('home.techTeaser.resultNote') }}</p>
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
          <article class="tile">
            <p class="tile__index">{{ String(i + 1).padStart(2, '0') }}</p>
            <h3>{{ item.title }}</h3>
            <p class="tile__body">{{ item.body }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>

  <!-- Partner CTA -->
  <section class="section section--dark">
    <div class="container">
      <div class="row g-4 align-items-center">
        <div class="col-lg-8">
          <p class="eyebrow">{{ t('home.partner.eyebrow') }}</p>
          <h2 class="headline--underlined">{{ t('home.partner.title') }}</h2>
          <p class="lead mt-3 mb-0">{{ t('home.partner.lead') }}</p>
        </div>
        <div class="col-lg-4">
          <div class="btn-row">
            <RouterLink to="/system#partners" class="btn-dafe-light">
              {{ t('common.cta.becomePartner') }}
              <span class="btn-arrow" aria-hidden="true">→</span>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

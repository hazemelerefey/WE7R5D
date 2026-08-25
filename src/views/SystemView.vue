<script setup>
import { computed } from 'vue'
import StageHero from '@/components/StageHero.vue'
import JumpMenu from '@/components/JumpMenu.vue'
import StatusChip from '@/components/StatusChip.vue'
import { t, countPhrase } from '@/i18n/index.js'
import { SYSTEM_STAGES, STATUS_COUNTS } from '@/data/system.js'
import { LINKS } from '@/data/results.js'

const sections = computed(() => [
  { id: 'readiness', label: t('common.nav.items.readiness') },
  { id: 'architecture', label: t('common.nav.items.architecture') },
  { id: 'partners', label: t('common.nav.items.partnering') },
  { id: 'contact', label: t('common.meta.contact') }
])
</script>

<template>
  <StageHero
    :eyebrow="t('system.stage.eyebrow')"
    :title="t('system.stage.title')"
    :lead="t('system.stage.lead')"
    :crumb="t('common.nav.system')"
  />

  <JumpMenu :sections="sections" />

  <!-- Honesty statement first -->
  <section class="section section--muted" style="padding-block: 2.5rem">
    <div class="container">
      <div class="callout">
        <strong class="d-block mb-2">{{ t('system.today.title') }}</strong>
        {{ t('system.today.body') }}
      </div>
    </div>
  </section>

  <!-- Readiness model -->
  <section id="readiness" class="section section--dark">
    <div class="container">
      <div class="section-head">
        <h2 class="headline--underlined">{{ t('system.readiness.title') }}</h2>
        <p class="lead mt-3">{{ t('system.readiness.lead') }}</p>
      </div>

      <div class="readiness">
        <div class="d-flex justify-content-between align-items-baseline">
          <span class="readiness__item">{{ t('system.readiness.scaleStart') }}</span>
          <span class="readiness__item">{{ t('system.readiness.scaleEnd') }}</span>
        </div>
        <div class="readiness__scale" aria-hidden="true"></div>

        <div class="readiness__items">
          <div v-for="s in STATUS_COUNTS" :key="s.status" class="readiness__item">
            <div class="readiness__swatch" :style="{ background: s.token }" aria-hidden="true"></div>
            <strong>
              <span aria-hidden="true">{{ s.glyph }}</span>
              {{ t(`common.status.${s.status}`) }}
            </strong>
            {{ countPhrase(s.count, 'system.readiness.unit') }}
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Architecture -->
  <section id="architecture" class="section">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">{{ t('system.stage.eyebrow') }}</p>
        <h2 class="headline--underlined">{{ t('system.architecture.title') }}</h2>
        <p class="lead mt-3">{{ t('system.architecture.lead') }}</p>
      </div>

      <div class="row g-3">
        <div v-for="stage in SYSTEM_STAGES" :key="stage.id" class="col-md-6 col-xl-3">
          <div class="stage-block">
            <div class="stage-block__head">
              <p class="stage-block__step mb-0">{{ t(`system.stages.${stage.id}.step`) }}</p>
              <p class="stage-block__title mb-0">{{ t(`system.stages.${stage.id}.title`) }}</p>
            </div>
            <div class="stage-block__body">
              <div v-for="mod in stage.modules" :key="mod.id" class="module">
                <div class="module__top">
                  <span class="module__name">
                    {{ mod.n }}. {{ t(`system.modules.${mod.id}.name`) }}
                  </span>
                </div>
                <StatusChip :status="mod.status" />
                <p class="module__note mt-2 mb-0">{{ t(`system.modules.${mod.id}.note`) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Partner profiles -->
  <section id="partners" class="section section--muted">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">{{ t('system.partners.eyebrow') }}</p>
        <h2 class="headline--underlined">{{ t('system.partners.title') }}</h2>
        <p class="lead mt-3">{{ t('system.partners.lead') }}</p>
      </div>

      <div class="row g-3">
        <div v-for="(p, i) in t('system.partners.items')" :key="i" class="col-md-6">
          <article class="tile">
            <p class="tile__index">{{ String(i + 1).padStart(2, '0') }}</p>
            <h3>{{ p.title }}</h3>
            <p class="tile__body">{{ p.body }}</p>
            <p class="tile__foot mb-0">{{ p.modules }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact -->
  <section id="contact" class="section">
    <div class="container">
      <div class="row g-4 align-items-start">
        <div class="col-lg-6">
          <h2 class="headline--underlined">{{ t('system.contact.title') }}</h2>
          <p class="lead mt-3 mb-0">{{ t('system.contact.lead') }}</p>
        </div>
        <div class="col-lg-6">
          <div class="contact-card">
            <dl class="row mb-0">
              <dt class="col-5 text-muted-dafe" style="font-size: 0.8125rem">
                {{ t('system.contact.teamLabel') }}
              </dt>
              <dd class="col-7 fw-bold">{{ t('system.contact.teamValue') }}</dd>

              <dt class="col-5 text-muted-dafe" style="font-size: 0.8125rem">
                {{ t('system.contact.focusLabel') }}
              </dt>
              <dd class="col-7 fw-bold">{{ t('system.contact.focusValue') }}</dd>

              <dt class="col-5 text-muted-dafe" style="font-size: 0.8125rem">
                {{ t('system.contact.langsLabel') }}
              </dt>
              <dd class="col-7 fw-bold">{{ t('system.contact.langsValue') }}</dd>

              <dt class="col-5 text-muted-dafe" style="font-size: 0.8125rem">
                {{ t('system.contact.demoLabel') }}
              </dt>
              <dd class="col-7 mb-0">
                <a :href="LINKS.demo" target="_blank" rel="noopener" class="fw-bold">
                  Hugging Face Space
                </a>
              </dd>
            </dl>

            <div class="btn-row mt-4">
              <a :href="LINKS.repo" target="_blank" rel="noopener" class="btn-dafe">
                {{ t('common.cta.readPaper') }}
              </a>
              <a :href="LINKS.demo" target="_blank" rel="noopener" class="btn-dafe-ghost">
                {{ t('common.cta.tryDemo') }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

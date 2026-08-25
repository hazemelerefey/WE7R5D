<script setup>
import { computed } from 'vue'
import StageHero from '@/components/StageHero.vue'
import JumpMenu from '@/components/JumpMenu.vue'
import StatusChip from '@/components/StatusChip.vue'
import { t, countPhrase } from '@/i18n/index.js'
import { SYSTEM_STAGES, STATUS_COUNTS } from '@/data/system.js'
import { LINKS } from '@/data/results.js'
import { FIGURES } from '@/data/figures.js'

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
    :image="FIGURES.hero"
    :image-alt="t('figures.hero')"
  />

  <JumpMenu :sections="sections" />

  <!-- Honesty statement -->
  <section class="section section--tight">
    <div class="container">
      <div class="callout">
        <strong class="d-block mb-2">{{ t('system.today.title') }}</strong>
        {{ t('system.today.body') }}
      </div>
    </div>
  </section>

  <!-- Readiness -->
  <section id="readiness" class="section section--muted">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">{{ t('system.stage.eyebrow') }}</p>
        <h2 class="headline--underlined">{{ t('system.readiness.title') }}</h2>
        <p class="lead mt-3">{{ t('system.readiness.lead') }}</p>
      </div>

      <div class="readiness">
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
    </div>
  </section>

  <!-- Architecture -->
  <section id="architecture" class="section">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">{{ t('common.nav.items.architecture') }}</p>
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
                <p class="module__name mb-1">
                  <span class="module__num">{{ String(mod.n).padStart(2, '0') }}</span>
                  {{ t(`system.modules.${mod.id}.name`) }}
                </p>
                <StatusChip :status="mod.status" />
                <p class="module__note mb-0">{{ t(`system.modules.${mod.id}.note`) }}</p>
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
          <article class="tile tile--text">
            <div class="tile__body">
              <h3>{{ p.title }}</h3>
              <p class="tile__text">{{ p.body }}</p>
              <p class="tile__meta mb-0">{{ p.modules }}</p>
            </div>
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
            <dl class="dl-rows">
              <div>
                <dt>{{ t('system.contact.teamLabel') }}</dt>
                <dd>{{ t('system.contact.teamValue') }}</dd>
              </div>
              <div>
                <dt>{{ t('system.contact.focusLabel') }}</dt>
                <dd>{{ t('system.contact.focusValue') }}</dd>
              </div>
              <div>
                <dt>{{ t('system.contact.langsLabel') }}</dt>
                <dd>{{ t('system.contact.langsValue') }}</dd>
              </div>
              <div>
                <dt>{{ t('system.contact.demoLabel') }}</dt>
                <dd>
                  <a :href="LINKS.demo" target="_blank" rel="noopener">Hugging Face Space</a>
                </dd>
              </div>
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

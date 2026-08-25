<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { t, locale, setLocale, LOCALES } from '@/i18n/index.js'
import { LINKS } from '@/data/results.js'

const route = useRoute()
const openMenu = ref(null)
const mobileOpen = ref(false)
const scrolled = ref(false)
const headerEl = ref(null)

const menus = computed(() => [
  {
    id: 'technology',
    label: t('common.nav.technology'),
    to: '/technology',
    railText: t('common.nav.railTechnology'),
    groups: [
      {
        label: t('common.nav.technologyGroups.research'),
        links: [
          { to: '/technology#duality', label: t('common.nav.items.duality'), desc: t('common.nav.items.dualityDesc') },
          { to: '/technology#defects', label: t('common.nav.items.defects'), desc: t('common.nav.items.defectsDesc') },
          { to: '/technology#module', label: t('common.nav.items.module'), desc: t('common.nav.items.moduleDesc') },
          { to: '/technology#gradient', label: t('common.nav.items.gradient'), desc: t('common.nav.items.gradientDesc') }
        ]
      },
      {
        label: t('common.nav.technologyGroups.results'),
        links: [
          { to: '/technology#results', label: t('common.nav.items.results'), desc: t('common.nav.items.resultsDesc') },
          { to: '/technology#per-class', label: t('common.nav.items.perClass'), desc: t('common.nav.items.perClassDesc') },
          { to: '/technology#limits', label: t('common.nav.items.limits'), desc: t('common.nav.items.limitsDesc') }
        ]
      }
    ]
  },
  {
    id: 'system',
    label: t('common.nav.system'),
    to: '/system',
    railText: t('common.nav.railSystem'),
    groups: [
      {
        label: t('common.nav.overview'),
        links: [
          { to: '/system#architecture', label: t('common.nav.items.architecture'), desc: t('common.nav.items.architectureDesc') },
          { to: '/system#readiness', label: t('common.nav.items.readiness'), desc: t('common.nav.items.readinessDesc') },
          { to: '/system#partners', label: t('common.nav.items.partnering'), desc: t('common.nav.items.partneringDesc') }
        ]
      }
    ]
  }
])

function toggle(id) {
  openMenu.value = openMenu.value === id ? null : id
}
function close() {
  openMenu.value = null
  mobileOpen.value = false
}
function onKeydown(e) {
  if (e.key === 'Escape') close()
}
function onDocClick(e) {
  if (headerEl.value && !headerEl.value.contains(e.target)) close()
}
function onScroll() {
  scrolled.value = window.scrollY > 24
}

watch(() => route.fullPath, close)

onMounted(() => {
  document.addEventListener('keydown', onKeydown)
  document.addEventListener('click', onDocClick)
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onUnmounted(() => {
  document.removeEventListener('keydown', onKeydown)
  document.removeEventListener('click', onDocClick)
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header ref="headerEl" class="site-header" :class="{ 'is-scrolled': scrolled }">
    <!-- Utility bar -->
    <div class="header-meta-wrap">
      <div class="container">
        <div class="header-meta">
          <ul class="header-meta__list">
            <li>
              <a :href="LINKS.repo" target="_blank" rel="noopener">{{ t('common.meta.research') }}</a>
            </li>
            <li>
              <a :href="LINKS.demo" target="_blank" rel="noopener">{{ t('common.meta.demo') }}</a>
            </li>
            <li>
              <RouterLink to="/system#partners">{{ t('common.nav.partners') }}</RouterLink>
            </li>
          </ul>

          <div class="header-meta__right">
            <RouterLink to="/system#contact" class="header-meta__contact">
              {{ t('common.meta.contact') }}
            </RouterLink>
            <div class="lang-switch" role="group" :aria-label="t('common.langLabel')">
              <button
                v-for="l in LOCALES"
                :key="l.code"
                type="button"
                :class="{ 'is-active': locale === l.code }"
                :aria-pressed="locale === l.code"
                :lang="l.code"
                @click="setLocale(l.code)"
              >
                {{ l.label }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main bar -->
    <div class="container">
      <div class="header-bar">
        <RouterLink to="/" class="brand-link" @click="close">
          <img src="/brand/dafe-logo.webp" :alt="`${t('common.brandName')} — ${t('common.tagline')}`" />
        </RouterLink>

        <nav class="header-nav d-none d-lg-block" :aria-label="t('common.mainNav')">
          <ul class="nav-main">
            <li v-for="m in menus" :key="m.id" class="nav-main__item">
              <button
                type="button"
                class="nav-main__link"
                :class="{ 'is-open': openMenu === m.id, 'is-active': route.path === m.to }"
                :aria-expanded="openMenu === m.id"
                @click="toggle(m.id)"
              >
                {{ m.label }}
                <span class="nav-caret" aria-hidden="true"></span>
              </button>
            </li>
            <li class="nav-main__item">
              <RouterLink to="/system#partners" class="nav-main__link">
                {{ t('common.nav.partners') }}
              </RouterLink>
            </li>
          </ul>
        </nav>

        <div class="header-actions">
          <div class="lang-switch d-lg-none" role="group" :aria-label="t('common.langLabel')">
            <button
              v-for="l in LOCALES"
              :key="l.code"
              type="button"
              :class="{ 'is-active': locale === l.code }"
              :aria-pressed="locale === l.code"
              :lang="l.code"
              @click="setLocale(l.code)"
            >
              {{ l.label }}
            </button>
          </div>

          <a :href="LINKS.demo" target="_blank" rel="noopener" class="btn-dafe d-none d-lg-inline-flex">
            {{ t('common.cta.tryDemo') }}
          </a>

          <button
            class="nav-toggle"
            type="button"
            :aria-expanded="mobileOpen"
            :aria-label="t('common.menu')"
            @click="mobileOpen = !mobileOpen"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </div>

    <!-- Mega menu -->
    <div v-if="openMenu" class="mega">
      <div class="container">
        <template v-for="m in menus" :key="m.id">
          <div v-if="openMenu === m.id" class="mega__inner">
            <div class="mega__rail d-none d-lg-block">
              <p class="mega__rail-title">{{ m.label }}</p>
              <p class="mega__rail-text">{{ m.railText }}</p>
              <RouterLink :to="m.to" class="link-arrow">{{ t('common.nav.overview') }}</RouterLink>
            </div>

            <div class="mega__body">
              <div class="mega__grid">
                <div v-for="g in m.groups" :key="g.label">
                  <p class="mega__label">{{ g.label }}</p>
                  <RouterLink v-for="l in g.links" :key="l.to" :to="l.to" class="mega__link">
                    {{ l.label }}
                    <span class="mega__desc">{{ l.desc }}</span>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>

    <!-- Mobile navigation -->
    <div v-if="mobileOpen" class="mobile-nav d-lg-none">
      <div class="container">
        <div v-for="m in menus" :key="m.id" class="mobile-nav__group">
          <RouterLink :to="m.to" class="mega__link fw-bold">{{ m.label }}</RouterLink>
          <template v-for="g in m.groups" :key="g.label">
            <RouterLink v-for="l in g.links" :key="l.to" :to="l.to" class="mega__link">
              {{ l.label }}
            </RouterLink>
          </template>
        </div>
        <div class="mobile-nav__group">
          <RouterLink to="/system#partners" class="mega__link fw-bold">
            {{ t('common.nav.partners') }}
          </RouterLink>
          <RouterLink to="/system#contact" class="mega__link">
            {{ t('common.meta.contact') }}
          </RouterLink>
          <a :href="LINKS.demo" target="_blank" rel="noopener" class="mega__link">
            {{ t('common.meta.demo') }}
          </a>
          <a :href="LINKS.repo" target="_blank" rel="noopener" class="mega__link">
            {{ t('common.meta.research') }}
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

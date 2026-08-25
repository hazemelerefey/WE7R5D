<script setup>
import { RouterView } from 'vue-router'
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import BackToTop from '@/components/BackToTop.vue'
import { t } from '@/i18n/index.js'
</script>

<template>
  <a class="skip-link" href="#main">{{ t('common.skip') }}</a>
  <SiteHeader />
  <main id="main">
    <RouterView />
  </main>
  <SiteFooter />
  <BackToTop />
</template>

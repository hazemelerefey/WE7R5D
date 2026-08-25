<script setup>
import { RouterLink } from 'vue-router'
import { t } from '@/i18n/index.js'
import { LINKS } from '@/data/results.js'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-4">
          <div class="footer-brand">
            <img src="/brand/dafe-logo.webp" :alt="t('common.brandName')" />
            <p class="mb-0">{{ t('common.footer.builtBy') }}</p>
            <p class="mb-0 mt-2" style="font-size: 0.8125rem">{{ t('common.footer.program') }}</p>
          </div>
        </div>

        <div class="col-sm-6 col-lg-3">
          <h4>{{ t('common.footer.product') }}</h4>
          <ul class="footer-list">
            <li><RouterLink to="/system">{{ t('common.nav.system') }}</RouterLink></li>
            <li><RouterLink to="/system#architecture">{{ t('common.nav.items.architecture') }}</RouterLink></li>
            <li><RouterLink to="/system#partners">{{ t('common.nav.partners') }}</RouterLink></li>
          </ul>
        </div>

        <div class="col-sm-6 col-lg-3">
          <h4>{{ t('common.footer.research') }}</h4>
          <ul class="footer-list">
            <li><RouterLink to="/technology">{{ t('common.nav.technology') }}</RouterLink></li>
            <li><RouterLink to="/technology#results">{{ t('common.nav.items.results') }}</RouterLink></li>
            <li><RouterLink to="/technology#limits">{{ t('common.nav.items.limits') }}</RouterLink></li>
          </ul>
        </div>

        <div class="col-lg-2">
          <h4>{{ t('common.footer.company') }}</h4>
          <ul class="footer-list">
            <li>
              <a :href="LINKS.demo" target="_blank" rel="noopener">{{ t('common.meta.demo') }}</a>
            </li>
            <li>
              <a :href="LINKS.repo" target="_blank" rel="noopener">GitHub</a>
            </li>
            <li><RouterLink to="/system#contact">{{ t('common.meta.contact') }}</RouterLink></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="mb-0">© {{ year }} {{ t('common.footer.rights') }}</p>
        <p class="mb-0" style="max-width: 52ch">{{ t('common.footer.disclaimer') }}</p>
      </div>
    </div>
  </footer>
</template>

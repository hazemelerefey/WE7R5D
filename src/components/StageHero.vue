<script setup>
import { RouterLink } from 'vue-router'
import { t } from '@/i18n/index.js'

defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  lead: { type: String, default: '' },
  crumb: { type: String, default: '' },
  image: { type: String, default: '' },
  imageAlt: { type: String, default: '' }
})
</script>

<template>
  <section class="stage">
    <img v-if="image" class="stage__img" :src="image" :alt="imageAlt" aria-hidden="true" />
    <div class="stage__scrim" aria-hidden="true"></div>

    <div class="stage__inner container">
      <nav v-if="crumb" :aria-label="t('common.mainNav')">
        <ol class="crumbs">
          <li>
            <RouterLink to="/">{{ t('common.home') }}</RouterLink>
          </li>
          <li class="crumbs__sep" aria-hidden="true">›</li>
          <li class="crumbs__current" aria-current="page">{{ crumb }}</li>
        </ol>
      </nav>

      <div class="stage__text">
        <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
        <h1 class="headline--underlined">{{ title }}</h1>
        <p v-if="lead" class="lead mt-3">{{ lead }}</p>
        <div v-if="$slots.actions" class="btn-row mt-4">
          <slot name="actions" />
        </div>
      </div>
    </div>
  </section>
</template>

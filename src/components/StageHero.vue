<script setup>
import { RouterLink } from 'vue-router'
import { t } from '@/i18n/index.js'

/**
 * `video` takes precedence over `image` when both are set, so a background
 * clip can be dropped in later without touching any page.
 */
defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  lead: { type: String, default: '' },
  crumb: { type: String, default: '' },
  image: { type: String, default: '' },
  imageAlt: { type: String, default: '' },
  video: { type: String, default: '' },
  full: { type: Boolean, default: false }
})
</script>

<template>
  <section class="stage" :class="{ 'stage--full': full }">
    <div class="stage__media" aria-hidden="true">
      <video
        v-if="video"
        :src="video"
        :poster="image || undefined"
        autoplay
        muted
        loop
        playsinline
      ></video>
      <img v-else-if="image" :src="image" :alt="imageAlt" />
    </div>
    <div class="stage__scrim" aria-hidden="true"></div>

    <!-- On a full stage the breadcrumb pins to the top, away from the text. -->
    <div v-if="crumb && full" class="stage__top">
      <div class="container">
        <nav :aria-label="t('common.mainNav')">
          <ol class="crumbs mb-0">
            <li>
              <RouterLink to="/">{{ t('common.home') }}</RouterLink>
            </li>
            <li class="crumbs__sep" aria-hidden="true">›</li>
            <li class="crumbs__current" aria-current="page">{{ crumb }}</li>
          </ol>
        </nav>
      </div>
    </div>

    <div class="stage__inner container">
      <nav v-if="crumb && !full" :aria-label="t('common.mainNav')">
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

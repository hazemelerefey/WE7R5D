<script setup>
import { t } from '@/i18n/index.js'

defineProps({
  // [{ id, label }]
  sections: { type: Array, required: true }
})
</script>

<template>
  <nav class="jump-menu" :aria-label="t('common.onThisPage')">
    <div class="container">
      <ul class="jump-menu__list">
        <li v-for="s in sections" :key="s.id">
          <a :href="`#${s.id}`">{{ s.label }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

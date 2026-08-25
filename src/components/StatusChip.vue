<script setup>
import { computed } from 'vue'
import { GLYPH } from '@/data/system.js'
import { t } from '@/i18n/index.js'

const props = defineProps({
  status: { type: String, required: true }
})

const glyph = computed(() => GLYPH[props.status] ?? '○')
const label = computed(() => t(`common.status.${props.status}`))
</script>

<template>
  <span class="status-chip" :class="`status--${status}`">
    <span class="status-chip__glyph" aria-hidden="true">{{ glyph }}</span>
    <span>{{ label }}</span>
  </span>
</template>

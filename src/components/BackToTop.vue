<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { t } from '@/i18n/index.js'

const visible = ref(false)

function onScroll() {
  visible.value = window.scrollY > 600
}

function toTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <button
    v-show="visible"
    class="back-to-top"
    type="button"
    :aria-label="t('common.backToTop')"
    @click="toTop"
  >
    <span aria-hidden="true">↑</span>
  </button>
</template>

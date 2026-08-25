import { computed, ref, watch } from 'vue'
import en from './en.js'
import ar from './ar.js'

const messages = { en, ar }

export const LOCALES = [
  { code: 'en', label: 'EN', name: 'English', dir: 'ltr' },
  { code: 'ar', label: 'AR', name: 'العربية', dir: 'rtl' }
]

const STORAGE_KEY = 'dafe-locale'

function initialLocale() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && messages[saved]) return saved
  } catch {
    /* storage unavailable — fall through to default */
  }
  return 'en'
}

export const locale = ref(initialLocale())

export const direction = computed(
  () => LOCALES.find((l) => l.code === locale.value)?.dir ?? 'ltr'
)

/**
 * Resolve a dot path against the active locale, falling back to English.
 * Returns strings, arrays or objects unchanged so structured content
 * (lists, tables, diagrams) can live in the dictionary.
 */
function resolve(dict, path) {
  return path.split('.').reduce((node, key) => {
    if (node && typeof node === 'object' && key in node) return node[key]
    return undefined
  }, dict)
}

export function t(path) {
  const value = resolve(messages[locale.value], path)
  if (value !== undefined) return value
  const fallback = resolve(messages.en, path)
  if (fallback !== undefined) return fallback
  if (import.meta.env.DEV) console.warn(`[i18n] missing key: ${path}`)
  return path
}

export function setLocale(code) {
  if (!messages[code]) return
  locale.value = code
}

/**
 * Count-aware phrase. Arabic encodes one/two inside the noun itself, so the
 * dictionary returns the whole phrase and `{n}` is interpolated only where
 * the numeral is actually wanted.
 */
export function countPhrase(count, path) {
  const forms = resolve(messages[locale.value], path) ?? resolve(messages.en, path)
  if (!forms || typeof forms !== 'object') return String(count)
  let form
  if (count === 1 && forms.one) form = forms.one
  else if (count === 2 && forms.two) form = forms.two
  else form = forms.other ?? forms.one ?? '{n}'
  return form.replace('{n}', String(count))
}

function applyToDocument(code) {
  const dir = LOCALES.find((l) => l.code === code)?.dir ?? 'ltr'
  const html = document.documentElement
  html.setAttribute('lang', code)
  html.setAttribute('dir', dir)
  try {
    localStorage.setItem(STORAGE_KEY, code)
  } catch {
    /* non-fatal */
  }
}

export function installI18n() {
  applyToDocument(locale.value)
  watch(locale, applyToDocument)
}

export function useI18n() {
  return { t, locale, direction, setLocale, countPhrase, LOCALES }
}

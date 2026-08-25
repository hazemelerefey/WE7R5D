import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    // The Alloy/Modal preview proxies this dev server through a generated
    // wildcard hostname that changes every session, so Vite's host check
    // cannot be satisfied with a static list. This is a dev-only server
    // bound inside the sandbox, never a production build.
    allowedHosts: true
  }
})

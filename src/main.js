import { createApp } from 'vue'

// Bootstrap 5 provides the grid and a small set of utilities. All component
// styling is our own, written with logical properties so RTL mirrors cleanly.
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/styles/tokens.css'
import '@/assets/styles/main.css'

import App from '@/App.vue'
import router from '@/router/index.js'
import { installI18n } from '@/i18n/index.js'

installI18n()

createApp(App).use(router).mount('#app')

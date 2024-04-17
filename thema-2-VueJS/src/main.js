/*!

=========================================================
* Vue Design System - v1.1.0
=========================================================


* Copyright 2023 GEDE Juniada
* Licensed under MIT (https://github.com/parta99/pawiwahan/blob/main/thema-1/LICENSE)

* Coded by @djna911

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.mount('#app')

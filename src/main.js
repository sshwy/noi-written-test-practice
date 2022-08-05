import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './registerServiceWorker'
import { createRouter, createWebHashHistory } from 'vue-router'

import HomePage from './components/HomePage.vue'
import RetestPage from './components/RetestPage.vue'
import TestPage from './components/TestPage.vue'
import ProbsetPage from './components/ProbsetPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/retest', component: RetestPage },
  { path: '/test', component: TestPage },
  { path: '/probset', component: ProbsetPage },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')

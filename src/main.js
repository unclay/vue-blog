import Vue from 'vue'
import Router from 'vue-router'

import App from './App'
import Index from './Index'

Vue.use(Router)

const router = new Router()
router.map({
  '/': {
    component: Index
  }
})
router.start(App, '#app')


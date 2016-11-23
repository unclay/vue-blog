// base list
import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import Index from './Index'

// blog page
import Blog from './page/blog/index'

Vue.use(Router)

const routes = [{
  path: '/',
  component: Index
}, {
  path: '/blog',
  component: Blog
}]
const router = new Router({
  routes
})

const app = new Vue({
  // el: '#app',
  router,
  render: (h) => h(App)
  // template: '<router-view></router-view>'
  // render: h => h({
  //   template: '<router-view></router-view>asdf'
  // })
})
app.$mount('#app')

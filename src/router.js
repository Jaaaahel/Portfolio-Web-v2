import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('./views/Projects.vue')
    },
    {
      path: '/experience',
      name: 'experience',
      component: () => import('./views/Experience.vue')
    },
    {
      path: '/websites',
      name: 'websites',
      component: () => import('./views/Websites.vue')
    },
    {
      path: '/apps',
      name: 'apps',
      component: () => import('./views/Apps.vue')
    }
  ]
})

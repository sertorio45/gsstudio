import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2256a641 = () => interopDefault(import('../pages/contato.vue' /* webpackChunkName: "pages/contato" */))
const _fa0f0192 = () => interopDefault(import('../pages/artigos/_slug.vue' /* webpackChunkName: "pages/artigos/_slug" */))
const _5211a8a9 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/gsstudio/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contato",
    component: _2256a641,
    name: "contato"
  }, {
    path: "/artigos/:slug?",
    component: _fa0f0192,
    name: "artigos-slug"
  }, {
    path: "/",
    component: _5211a8a9,
    name: "index"
  }, {
    path: "/contato"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

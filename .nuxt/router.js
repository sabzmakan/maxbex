import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ace4f910 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _40f42308 = () => interopDefault(import('../pages/api/index.vue' /* webpackChunkName: "pages/api/index" */))
const _4504a44a = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _7eb759cb = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _d1cf0e7c = () => interopDefault(import('../pages/dashboard/index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _760094ae = () => interopDefault(import('../pages/forget-password/index.vue' /* webpackChunkName: "pages/forget-password/index" */))
const _088a19b8 = () => interopDefault(import('../pages/news.vue' /* webpackChunkName: "pages/news" */))
const _70520b8c = () => interopDefault(import('../pages/api/binance.vue' /* webpackChunkName: "pages/api/binance" */))
const _78de9995 = () => interopDefault(import('../pages/api/key.vue' /* webpackChunkName: "pages/api/key" */))
const _681c8d00 = () => interopDefault(import('../pages/blog/single.vue' /* webpackChunkName: "pages/blog/single" */))
const _6d14bc92 = () => interopDefault(import('../pages/dashboard/account-details.vue' /* webpackChunkName: "pages/dashboard/account-details" */))
const _0ad95a76 = () => interopDefault(import('../pages/dashboard/apikey.vue' /* webpackChunkName: "pages/dashboard/apikey" */))
const _257ac1ce = () => interopDefault(import('../pages/dashboard/chart.vue' /* webpackChunkName: "pages/dashboard/chart" */))
const _64a63d7c = () => interopDefault(import('../pages/dashboard/market.vue' /* webpackChunkName: "pages/dashboard/market" */))
const _4e9e08ae = () => interopDefault(import('../pages/dashboard/selectTst.vue' /* webpackChunkName: "pages/dashboard/selectTst" */))
const _1a753940 = () => interopDefault(import('../pages/dashboard/setting.vue' /* webpackChunkName: "pages/dashboard/setting" */))
const _2bc21528 = () => interopDefault(import('../pages/dashboard/your-coins.vue' /* webpackChunkName: "pages/dashboard/your-coins" */))
const _6cd6e337 = () => interopDefault(import('../pages/forget-password/new.vue' /* webpackChunkName: "pages/forget-password/new" */))
const _737c2b32 = () => interopDefault(import('../pages/forget-password/verify.vue' /* webpackChunkName: "pages/forget-password/verify" */))
const _6d754386 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _ace4f910,
    name: "about"
  }, {
    path: "/api",
    component: _40f42308,
    name: "api"
  }, {
    path: "/blog",
    component: _4504a44a,
    name: "blog"
  }, {
    path: "/contact",
    component: _7eb759cb,
    name: "contact"
  }, {
    path: "/dashboard",
    component: _d1cf0e7c,
    name: "dashboard"
  }, {
    path: "/forget-password",
    component: _760094ae,
    name: "forget-password"
  }, {
    path: "/news",
    component: _088a19b8,
    name: "news"
  }, {
    path: "/api/binance",
    component: _70520b8c,
    name: "api-binance"
  }, {
    path: "/api/key",
    component: _78de9995,
    name: "api-key"
  }, {
    path: "/blog/single",
    component: _681c8d00,
    name: "blog-single"
  }, {
    path: "/dashboard/account-details",
    component: _6d14bc92,
    name: "dashboard-account-details"
  }, {
    path: "/dashboard/apikey",
    component: _0ad95a76,
    name: "dashboard-apikey"
  }, {
    path: "/dashboard/chart",
    component: _257ac1ce,
    name: "dashboard-chart"
  }, {
    path: "/dashboard/market",
    component: _64a63d7c,
    name: "dashboard-market"
  }, {
    path: "/dashboard/selectTst",
    component: _4e9e08ae,
    name: "dashboard-selectTst"
  }, {
    path: "/dashboard/setting",
    component: _1a753940,
    name: "dashboard-setting"
  }, {
    path: "/dashboard/your-coins",
    component: _2bc21528,
    name: "dashboard-your-coins"
  }, {
    path: "/forget-password/new",
    component: _6cd6e337,
    name: "forget-password-new"
  }, {
    path: "/forget-password/verify",
    component: _737c2b32,
    name: "forget-password-verify"
  }, {
    path: "/",
    component: _6d754386,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}

import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'


// import FreteCreateView from '../views/Frete/FreteCreateView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/frete',
    name: 'frete-List',
    component: () => import(/* webpackChunkName: "frete-list" */ '../views/frete/FreteListView.vue')
  },
  {
    path: '/frete/Create',
    name: 'frete-Create',
    component: () => import(/* webpackChunkName: "frete-create" */ '../views/frete/FreteCreateView.vue')
  },
  {
    path: '/frete/Interrompido',
    name: 'frete-Edit',
    component: () => import(/* webpackChunkName: "frete-create" */ '../views/frete/modals/Interrompido.vue')
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

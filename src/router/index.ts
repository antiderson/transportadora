import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'



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

  //Frete Routes
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
    path: '/frete/Interrompido/:id',
    name: 'frete-Edit',
    component: () => import(/* webpackChunkName: "frete-create" */ '../views/frete/Interrompido.vue')
  }, {
    path: '/frete/Cancelado/:id',
    name: 'frete-Edit1',
    component: () => import(/* webpackChunkName: "frete-create" */ '../views/frete/Cancelado.vue')
  }, 
  {
    path: '/statusEmTransporte/:id',
    name: 'Frete-Transporte',
    component: () => import(/* webpackChunkName: "frete-create" */ '../views/frete/FreteStatusEm_TransporteView.vue')
  },

  // Despesa Routes
  {
    path: '/despesa',
    name: 'despesa-List',
    component: () => import(/* webpackChunkName: "frete-list" */ '../views/despesa/DespesaListView.vue')
  },
  {
    path: '/despesa/Create',
    name: 'despesa-Create',
    component: () => import(/* webpackChunkName: "frete-list" */ '../views/despesa/DespesaCreateView.vue')
  },
  {
    path: '/despesa/Edit/:id',
    name: 'despesa-Edit',
    component: () => import(/* webpackChunkName: "frete-create" */ '../views/despesa/modals/Edit.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

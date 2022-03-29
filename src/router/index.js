import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import LeadsPanelView from '../views/LeadsPanelView.vue'
import AddLeadView from '../views/AddLeadView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/leads-panel',
    name: 'leadsPanel',
    //component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
    component: LeadsPanelView,
    meta: {
      title: 'Painel de Leads'
    },
    beforeEnter(to, from, next) {
      if (!Object.prototype.hasOwnProperty.call(localStorage, 'loggedUser')) {
        next('/')
      } else {
        next()
      }
    }
  },
  {
    path: '/add-lead',
    name: 'addLead',
    component: AddLeadView,
    meta: {
      title: 'Novo Lead'
    },
    beforeEnter(to, from, next) {
      if (!Object.prototype.hasOwnProperty.call(localStorage, 'loggedUser')) {
        next('/')
      } else {
        next()
      }
    }
    
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (!to.matched.length) next('/')
  else next()
})

export default router

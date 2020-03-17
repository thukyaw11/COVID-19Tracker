import Vue from 'vue'
import VueRouter from 'vue-router'
import AffectedCountry from '../views/AffectedCountry';
import Global from '../views/Global';
import ComingSoon from "../views/ComingSoon";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'AffectedCountry',
    component: AffectedCountry
  },
  {
    path: '/global',
    name: "Global",
    component : Global
  },
  {
    path: '/comingsoon',
    name: "ComingSoon",
    component : ComingSoon
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

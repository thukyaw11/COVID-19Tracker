import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardGlobal from '../views/DashboardGlobal';
import DashboardLocal from '../views/DashboardLocal';
import CountryCases from '../views/CountryCases';
import Map from "../views/Map";
import Myanmar from "../views/Myanmar"
import Contants from "../views/Emergencycontants"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'DashboardGlobal',
    component: DashboardGlobal
  },
  {
    path: '/local',
    name : 'DashboardLocal',
    component: DashboardLocal
  },
  {
    path: '/countrycases',
    name: "CountryCases",
    component : CountryCases
  },
  {
    path: '/map',
    name: "Map",
    component : Map
  },
  {
    path: '/myanmar',
    name: "Myanmar",
    component : Myanmar
  },
  {
    path : '/contants',
    name : "Contants",
    component : Contants
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

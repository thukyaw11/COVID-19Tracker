import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardGlobal from '../views/DashboardGlobal';
import DashboardLocal from '../views/DashboardLocal';
import CountryCases from '../views/CountryCases';
import News from '../views/News';
import Map from "../views/Map";
import Contants from "../views/Emergencycontants"
import AboutUs from "../views/AboutUs"

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
    path : '/contants',
    name : "Contants",
    component : Contants
  },
  {
    path : '/news',
    name : "News",
    component : News
  },
  {
    path : '/aboutus',
    name : "AboutUs",
    component : AboutUs
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

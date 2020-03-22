import Vue from 'vue'
import VueRouter from 'vue-router'
import WorldTotal from '../views/WorldTotal';
import Global from '../views/Global';
import Map from "../views/Map";
import Myanmar from "../views/Myanmar"
import Wiki from "../views/Wiki"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'WorldTotal',
    component: WorldTotal
  },
  {
    path: '/global',
    name: "Global",
    component : Global
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
    path : '/wiki',
    name : "Wiki",
    component : Wiki
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

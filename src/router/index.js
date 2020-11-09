import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "views/home/Home";

import StaffProfile from "../views/staffProfile/mainContent/StaffProfile";
import BasicProfile from "../views/staffProfile/items/BasicProfile";
import salaryManage from "./salaryManage";
import staffManage from "./staffManage";
import statisticManage from "./statisticManage";
import systemManage from "./systemManage";

Vue.use(VueRouter)
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/profile',
    component: StaffProfile,
    children:[
      {
        path: '',
        redirect: 'base'
      },
      {
        path: 'base',
        component: BasicProfile,
        meta: '基本资料'
      }
    ]
  },
  staffManage,
  salaryManage,
  statisticManage,
  systemManage
]
const router = new VueRouter({
  routes,
  model: 'history'
})

export default router

import SystemManage from "../views/systemManage/mainContent/SystemManage";
import Basic from "../views/systemManage/items/Basic";
import Cfg from "../views/systemManage/items/Cfg";
import Log from "../views/systemManage/items/Log";
import Hr from "../views/systemManage/items/Hr";
import Data from "../views/systemManage/items/Data";
import Init from "../views/systemManage/items/Init";
import Api from "../views/systemManage/items/Api";
import Druid from "../views/systemManage/items/Druid";

export default {
  path: '/system',
  component: SystemManage,
  children: [
    {
      path: '',
      redirect: 'basic'
    },
    {
      path: 'basic',
      component: Basic,
      meta: "基础信息设置"
    },
    {
      path: 'cfg',
      component:Cfg ,
      meta: "系统管理"
    },
    {
      path: 'log',
      component: Log,
      meta: "操作日志管理"
    },
    {
      path: 'hr',
      component: Hr,
      meta: "操作员管理"
    },
    {
      path: 'data',
      component: Data,
      meta: "备份恢复数据库"
    },
    {
      path: 'init',
      component: Init,
      meta: "初始化数据库"
    },
    {
      path: 'api',
      component: Api,
      meta: "系统开发文档"
    },
    {
      path: 'druid',
      component: Druid,
      meta: "数据库监控"
    }]
}


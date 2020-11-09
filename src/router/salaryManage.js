import SalaryManage from "../views/salaryManage/mainContent/SalaryManage";
import Sob from "../views/salaryManage/items/Sob";
import Sobcfg from "../views/salaryManage/items/Sobcfg";
import Tab from "../views/salaryManage/items/Tab";
import Month from "../views/salaryManage/items/Month";
import Search from "../views/salaryManage/items/Search";

export default {
  path: '/sal',
  component: SalaryManage,
  children: [
    {
      path: '',
      redirect: 'sob'
    },
    {
      path: 'sob',
      component:Sob,
      meta: "工资账套管理"
    },
    {
      path: 'sobcfg',
      component:Sobcfg,
      meta: "员工账套管理"
    },
    {
      path: 'table',
      component:Tab,
      meta: "工资表管理"
    },
    {
      path: 'month',
      component:Month,
      meta: "月末处理"
    },
    {
      path: 'search',
      component:Search,
      meta: "共资表查询"
    }
  ]
}


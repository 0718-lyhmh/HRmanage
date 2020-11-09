import StaffManage from "../views/staffManage/mainContent/StaffManage";
import Pro from "../views/staffManage/items/Pro";
import Reward from "../views/staffManage/items/Reward";
import Train from "../views/staffManage/items/Train";
import Salary from "../views/staffManage/items/Salary";
import Move from "../views/staffManage/items/Move";

export default {
  path: '/staff',
  component: StaffManage,
  children: [
    {
      path: '',
      redirect: 'pro'
    },
    {
      path: 'pro',
      component: Pro,
      meta: '员工资料'
    },
    {
      path: 'ec',
      component: Reward,
      meta: '员工奖惩'
    },
    {
      path: 'train',
      component: Train,
      meta: '员工训练'
    },
    {
      path: 'salary',
      component: Salary,
      meta: '员工调薪'
    },
    {
      path: 'mv',
      component: Move,
      meta: '员工调动'
    },
  ]
}

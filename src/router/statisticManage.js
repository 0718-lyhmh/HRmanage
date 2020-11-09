import StatisticManage from "../views/statisticManage/mainContent/StatisticManage";
import All from "../views/statisticManage/items/All";
import Score from "../views/statisticManage/items/Score";
import Pers from "../views/statisticManage/items/Pers";
import Record from "../views/statisticManage/items/Record";

export default {
  path: '/statistic',
  component: StatisticManage,
  children: [
    {
      path: '',
      redirect: 'all'
    },
    {
      path: 'all',
      component: All,
      meta: "综合信息统计"
    },
    {
      path: 'score',
      component: Score,
      meta: "员工积分统计"
    },
    {
      path: 'pers',
      component: Pers,
      meta: "人事信息统计"
    },
    {
      path: 'record',
      component: Record,
      meta: "人事记录统计"
    }
  ]
}

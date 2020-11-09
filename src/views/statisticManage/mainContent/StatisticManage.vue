<template>
  <div class="statistic">
    <my-container>

      <my-header slot="header" >
        <div slot="item">统计管理</div>
        <div slot="nav">首页</div>
        <div slot="info">头像</div>
      </my-header>

      <my-aside slot="aside" path="/statistic/all">
        <div slot="nav-item">综合信息统计</div>
      </my-aside>
      <my-aside slot="aside" path="/statistic/score">
        <div slot="nav-item">员工积分统计</div>
      </my-aside>
      <my-aside slot="aside" path="/statistic/pers">
        <div slot="nav-item">人事信息统计</div>
      </my-aside>
      <my-aside slot="aside" path="/statistic/record">
        <div slot="nav-item">人事记录统计</div>
      </my-aside>

      <my-main slot="main">
        <router-view></router-view>
      </my-main>
    </my-container>
  </div>
</template>

<script>
  import MyHeader from "components/commom/container/MyHeader";
  import MyContainer from "components/commom/container/MyContainer";
  import MyAside from "components/commom/container/MyAside";
  import MyMain from "components/commom/container/MyMain";

  export default {
    name: "StatisticManage",
    components: { MyMain, MyAside, MyContainer, MyHeader,}
  }
</script>

<style scoped>
  .statistic{
    width: 100%;
  }
  .header{
    height: 60px;
  }
</style>

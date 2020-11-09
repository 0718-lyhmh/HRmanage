<template>
  <div id="main-tar-bar">
    <tab-bar>

      <tab-bar-mark path="/home">
        <img slot="img" src="~assets/img/tabbar/网络空间安全学院.6a47d8ec.png">
        <span slot="text">莞工-i人事</span>
      </tab-bar-mark>

      <tab-bar-item path="/profile">
          <i slot="icon" class="fas fa-user-circle"></i>
          <span slot="text">员工资料</span>
        </tab-bar-item>

      <tab-bar-item path="/staff">
          <i slot="icon" class="fas fa-address-card"></i>
          <span slot="text">人事管理</span>
      </tab-bar-item>

      <tab-bar-item path="/sal">
          <i slot="icon" class="fas fa-money-bill-alt"></i>
          <span slot="text">薪资管理</span>
      </tab-bar-item>

      <tab-bar-item path="/statistic">
          <i slot="icon" class="fas fa-chart-bar"></i>
          <span slot="text">统计管理</span>
      </tab-bar-item>

     <tab-bar-item path="/system">
          <i slot="icon" class="fab fa-windows"></i>
          <span slot="text">系统管理</span>
      </tab-bar-item>

    </tab-bar>

  </div>
</template>

<script>
  import TabBar from "components/commom/tabbar/TabBar";
  import TabBarMark from "components/commom/tabbar/TabBarMark";
  import TabBarItem from "components/commom/tabbar/TabBarItem";
  export default {
    name: "MainTabBar",
    components: {TabBarItem, TabBarMark, TabBar}
  }
</script>

<style scoped>

</style>

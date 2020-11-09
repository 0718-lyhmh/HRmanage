<template>
  <div class="salary">
    <my-container>

      <my-header slot="header">
        <div slot="item">薪资管理</div>
        <div slot="nav">首页</div>
        <div slot="info">头像</div>
      </my-header>

      <my-aside slot="aside" path="/sal/sob">
        <div slot="nav-item">工资账套管理</div>
      </my-aside>
      <my-aside slot="aside" path="/sal/sobcfg">
        <div slot="nav-item">员工账套管理</div>
      </my-aside>
      <my-aside slot="aside" path="/sal/table">
        <div slot="nav-item">工资表管理</div>
      </my-aside>
      <my-aside slot="aside" path="/sal/month">
        <div slot="nav-item">月末处理</div>
      </my-aside>
      <my-aside slot="aside" path="/sal/search">
        <div slot="nav-item">工资表查询</div>
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
    name: "SalaryManage",
    components: {MyMain, MyAside, MyContainer, MyHeader,}
  }
</script>

<style scoped>
  .salary{
    width: 100%;
  }
  .header{
    height: 60px;
  }
</style>

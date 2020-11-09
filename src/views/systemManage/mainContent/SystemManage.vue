<template>
  <div class="system">
    <my-container>

      <my-header slot="header" >
        <div slot="item">系统管理</div>
        <div slot="nav">首页</div>
        <div slot="info">头像</div>
      </my-header>

      <my-aside slot="aside" path="/system/basic">
        <div slot="nav-item">基础信息设置</div>
      </my-aside>
      <my-aside slot="aside" path="/system/cfg">
        <div slot="nav-item">系统管理</div>
      </my-aside>
      <my-aside slot="aside" path="/system/log">
        <div slot="nav-item">操作日志管理</div>
      </my-aside>
      <my-aside slot="aside" path="/system/hr">
        <div slot="nav-item">操作员管理</div>
      </my-aside>
      <my-aside slot="aside" path="/system/data">
        <div slot="nav-item">备份恢复数据库</div>
      </my-aside>
      <my-aside slot="aside" path="/system/init">
        <div slot="nav-item">初始化数据库</div>
      </my-aside>
      <my-aside slot="aside" path="/system/api">
        <div slot="nav-item">系统开发文档</div>
      </my-aside>
      <my-aside slot="aside" path="/system/druid">
        <div slot="nav-item">数据库监控</div>
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
    name: "SystemManage",
    components: {MyMain, MyAside, MyContainer, MyHeader,}
  }
</script>

<style scoped>
  .system{
    width: 100%;
  }
  .header{
    height: 60px;
  }
</style>

<template>
  <div class="staff">
    <my-container>

      <my-header slot="header" >
        <div slot="item">人事管理</div>
        <div slot="nav">首页</div>
        <div slot="info">头像</div>
      </my-header>

      <my-aside slot="aside" path="/staff/pro">
        <div slot="nav-item">员工资料</div>
      </my-aside>
      <my-aside slot="aside" path="/staff/ec">
        <div slot="nav-item">员工奖惩</div>
      </my-aside>
      <my-aside slot="aside" path="/staff/train">
        <div slot="nav-item">员工培训</div>
      </my-aside>
      <my-aside slot="aside" path="/staff/salary">
        <div slot="nav-item">员工调薪</div>
      </my-aside>
      <my-aside slot="aside" path="/staff/mv">
        <div slot="nav-item">员工调动</div>
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
    name: "StaffManage",
    components: {MyMain, MyAside, MyContainer, MyHeader,}
  }
</script>

<style scoped>
  .staff{
    width: 100%;
  }
  .header{
    height: 60px;
  }
</style>

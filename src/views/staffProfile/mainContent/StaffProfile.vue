<template>
  <div class="profile">
    <my-container>

        <my-header slot="header" >
          <div slot="item">员工资料</div>
          <div slot="nav">

          </div>
          <div slot="info">头像</div>
        </my-header>

      <my-aside slot="aside" path="/profile/base">
        <div slot="nav-item">基本资料</div>
      </my-aside>

      <my-main slot="main">
        <el-table>
          <el-table-column></el-table-column>
          <el-table-column></el-table-column>
          <el-table-column></el-table-column>
          <el-table-column></el-table-column>
        </el-table>
      </my-main>
    </my-container>
  </div>
</template>

<script>
  import MyHeader from "components/commom/container/MyHeader";
  import MyContainer from "components/commom/container/MyContainer";
  import MyAside from "components//commom/container/MyAside";
  import MyMain from "components/commom/container/MyMain";

  export default {
    name: "StaffProfile",
    components: { MyMain, MyAside, MyContainer, MyHeader,}
  }
</script>

<style scoped>
.profile{
  width: 100%;
}
  .header{
    height: 60px;
  }
</style>

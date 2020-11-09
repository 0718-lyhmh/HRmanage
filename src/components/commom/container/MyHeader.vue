<template>
  <div class="header">
    <div class="item-wrapper">
      <div class="item"><slot name="item"></slot>
      </div>
    </div>
    <div class="nav">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{path:''}">{{$route.meta}}</el-breadcrumb-item>
      </el-breadcrumb>
      </div>
    <div class="info"><slot name="info"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "MyHeader",
    props: {

    }
  }
</script>

<style scoped>
  .header{
  }
  .item-wrapper{
    float: left;
    width: 130px;
    font-size: 18px;
    font-weight: 700;
    background-color: #F9F9F9;

  }
  .item{
    width: 110px;
    height: 59px;
    border-bottom: 1px solid #E5E5E5;
    margin: 0 auto;
  }
  .nav{
    float: left;
  }
  .info{
    float: right;
    background-color: #7f7e7c;
  }
  .el-breadcrumb{
    line-height: 60px;
    /*font-size: 14px;*/
    margin-left: 10px;
  }
</style>

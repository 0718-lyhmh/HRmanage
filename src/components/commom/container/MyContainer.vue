<template>
  <div id="container">
    <el-container>
      <el-header>
        <div><slot name="header"></slot></div>
      </el-header>
      <el-container>
        <el-aside width="130px">
          <div><slot name="aside"></slot></div>
        </el-aside>

          <el-main>
           <div><slot name="main"></slot></div>
          </el-main>

      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "MyContainer"
  }
</script>

<style scoped>
  .el-aside{
    background-color: #F9F9F9;
    text-align: center;
  }
  .el-header{
    background-color: #fff;
    text-align: center;
    line-height: 60px;
    padding: 0;
  }

  .el-main {
    color: #333;
    text-align: center;
    padding: 10px;
  }

  .el-container{
    height: 100%;
  }
  #container{
    display: inline-block;
    width: 100%;
    height: 100%;
  }
</style>

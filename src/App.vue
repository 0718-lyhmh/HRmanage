<template>
  <div id="app">
    <main-tab-bar/>
    <router-view></router-view>
  </div>
</template>

<script>
  import MainTabBar from "./components/content/mainTabbBar/MainTabBar";

  export default {
    name: 'app',
    components: {
      MainTabBar
    }
  }
</script>

<style>
@import "assets/css/base.css";
@import "assets/fa/css/all.css";
  html,body,#app{
    height: 100%;
  }
  #app{
    display: flex;
  }
</style>

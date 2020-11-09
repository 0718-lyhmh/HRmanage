<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  #tab-bar:hover{
    cursor:pointer;
  }
  #tab-bar {
    background-color: #112D4E;
    color: #B8C0CA;
    width: 100px;
    text-align: center;
    font-weight: bold;
    font-size: 15px;
    height: 100%;
    /*position: absolute;*/
    /*top: 0;*/
  }
</style>

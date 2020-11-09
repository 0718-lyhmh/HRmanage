<template>
  <div class="main">
    <div class="tab"><slot></slot></div>
  </div>
</template>

<script>
  export default {
    name: "MyMain"
  }
</script>

<style scoped>
.main{
  background-color: #fff;
}
</style>

<template>
  <div id="tab-bar-mark" @click="markClick" class="active">
    <div><slot name="img"></slot></div>
    <div><slot name="text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarMark",
    props: {
      path: String,
    },
    computed:{
      // isActive(){
      //   return this.$route.path.indexOf(this.path) !== -1
      // }
    },
    methods: {
      markClick(){
        this.$router.push(this.path)
      }
    }
  }
</script>

<style scoped>
  #tab-bar-mark{
  height: 120px;
  /*line-height: 120px;*/
  border-bottom: 1px solid #333333;
  text-decoration: none;
  list-style: none;
  position: relative;
  }
  #tab-bar-mark img{
    position: absolute;
    left: 15px;
    right: 15px;
    top: 10px;
    width: 70px;
  }
  #tab-bar-mark span{
    position: absolute;
    left: 10px;
    right: 10px;
    bottom: 10px;
  }
  .active{
    color: #fff;
  }
</style>

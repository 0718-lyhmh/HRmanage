<template>
  <div id="tar-bar-item"  @click="itemClick" :class="{active:isActive}">
    <div><slot name="icon"></slot></div>
    <div><slot name="text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String
    },
    computed:{
      isActive(){
        let arr = this.$route.path.split('/')
        // console.log(arr)
        // console.log(this.path)
        if(this.path === "/"+arr[1]) return true
        else return false
        // return this.$route.path.indexOf(this.path) !== -1
      }
    },
    methods: {
      itemClick(){
        this.$router.push(this.path)
      }
    }
  }
</script>

<style scoped>
  #tar-bar-item{
    height: 100px;
    /*line-height: 100px;*/
    border-bottom: 1px solid #333333;
    text-decoration: none;
    list-style: none;
    position: relative;
  }
  #tar-bar-item i{
    position: absolute;
    left: 20px;
    right: 20px;
    top: 20px;
    font-size: 40px;
  }
  #tar-bar-item span{
    position: absolute;
    left: 10px;
    right: 10px;
    bottom: 10px;

  }
  .active{
    color: #fff;
    border-left: 4px solid #0099CC;
  }
</style>

<template>
  <div class="aside" @click="asideClick" :class="{active: isActive}">
    <slot name="nav-item"></slot>
  </div>
</template>

<script>
  export default {
    name: "MyAside",
    props:{
      path:String
    },
    computed:{
      isActive(){
        return this.$route.path === this.path
      }
    },
    methods:{
      asideClick(){
        this.$router.push(this.path)
      }
    }
  }
</script>

<style scoped>
  .aside{
    margin: 0 10px;
    padding: 8px 5px;
    font-size: 14px;
    text-align: left;
  }
  .aside:first-child{
    margin-top: 20px;
  }
  .aside:hover{
    cursor:pointer;
  }
  .active{
    background-color: #DCEBFB;
    color: #0099CC;
  }
</style>

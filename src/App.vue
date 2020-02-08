<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
    *{
      margin:0;
      padding:0;
      border:0;
    }
    html,body,#app  {
      width: 100%;
      height: 100%;
    
    }
    #app {
      /* position: relative; */
      background-image: url(./assets/1-1.jpg);
      background-repeat:no-repeat;
      background-size: 100% 100%;
      background-color: pink;
      z-index: -1
    }

</style>

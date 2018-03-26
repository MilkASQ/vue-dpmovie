<template>
  <div id="app">
    <!--
    <img src="./assets/logo.png">
    -->
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  /**{
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }*/
  ul, li ,p ,a{
    list-style: none; padding: 0; margin: 0; text-decoration: none;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*margin-top: 60px;*/
  }

  body {
    margin: 0 !important;
  }
</style>

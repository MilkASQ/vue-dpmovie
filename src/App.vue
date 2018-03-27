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
  body{
    min-width: 320px;
  }
  ul, li ,p ,a{
    list-style: none; padding: 0; margin: 0; text-decoration: none;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  body {
    margin: 0 !important;
  }
  .mint-header h1{font-size: 16px;}
  .mint-header.is-fixed{z-index: 10000 !important;}
</style>

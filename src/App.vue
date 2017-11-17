<template>
  <div id="app">
    <div class="container">
       <img src="static/images/logo.png" alt="">
      <br>
      <router-link :to="{path: '/blog'}" class="link">blog</router-link>
      <router-link :to="{path: '/courses'}" class="link">courses</router-link>
      <router-view/>
    </div>
   
   
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.link{
  display: inline-block;
  font-size: 20px;
  text-transform: uppercase;
  margin: 15px 0;
  padding: 0 10px;
}
h5{
  margin: 20px 0 40px 0;
}
</style>

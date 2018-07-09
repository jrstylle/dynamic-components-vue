<template>
  <div id="app">
    <img src="./assets/logo.png">
    <BaseTab :components="['HelloWorld','Home', 'Page1', 'Page2']"/>
  </div>
</template>

<script>
import BaseTab from '@/components/Tab'
export default {
  name: 'App',
  components: {
    BaseTab
  }
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
</style>

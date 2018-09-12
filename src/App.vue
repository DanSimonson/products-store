<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import Footer from '@/components/Navbar'
  import { dbProductsRef } from './firebaseConfig'
  export default {
    name: 'App',
    components: {
      Navbar,
      Footer
    },
    created() {
      this.$store.dispatch('setProductsRef', dbProductsRef)
    }
  }
</script>

<style>
  #app {
    /*
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    margin-bottom: 0px;*/
  }
</style>
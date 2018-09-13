<template>
  <div id="app">
    <transition name="router-anim" enter-active-class="animated fadeIn" leave-acitve-class="animated fadeOut">
      <router-view />
    </transition>
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
  .enter-active-class {
    animation-duration: 1s;
    animation-delay: .5s;
    /*
    animation-iteration-count: 6;    
    animation-delay: 1s;    
    */
  }

  .enter-active-class {
    animation-duration: 1s;

    /*
    animation-iteration-count: 6;    
    animation-delay: 1s;    
    */
  }

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
<template>
  <div id="home">
    <Navbar/>
    <h1>home page</h1>
    <Footer/>

  </div>


</template>


<script>
  import Footer from './Footer'
  import Navbar from './Navbar'
  export default {
    name: 'Home',
    components: {
      Footer,
      Navbar
    },
    data() {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
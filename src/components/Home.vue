<template>
  <div id="home">
    <Navbar />
    <header id="showcase">
      <h1>mariposaweb online store demonstration</h1>
      <p>Open An Online Store </p>
      <a href="/products" class="button">See More</a>
      <!--<router-link to="/products" style='cursor:pointer; text-decoration:none'><a class="button">See More</a></router-link>-->

    </header>
    <Footer />
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
  @import url('https://fonts.googleapis.com/css?family=Roboto+Slab');

  * {
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    font-family: 'Roboto Slab', serif;
    /*font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;*/
    font-size: 17px;
    color: #827717;
    line-height: 1.6;
  }

  #showcase {
    background-image: url('https://cdn.buttercms.com/OUEb12H8TT6nV2fOPPSE');

    /*background-color: grey;*/
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    /*background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 20px;
    margin-bottom: 20px;
    color: black;
    #8D6E63;*/
  }

  #showcase h1 {
    font-size: 50px;
    line-height: 1.2;
  }

  #showcase p {
    font-size: 30px;
  }

  #showcase .button {
    font-size: 18px;
    text-decoration: none;
    color: #827717;
    border: #827717 1px solid;
    padding: 10px 20px;
    border-radius: 10px;
    margin-top: 20px;
  }

  #showcase .button:hover {
    background: white;
    color: #BF360C;
  }

  #showcase a {
    text-decoration: none;
  }
</style>
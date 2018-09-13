<template>
    <div class="container-fluid">
        <Navbar />
        <div id='topRow' class="row">
            <div class='col m8'>
                <!--<h4>Online Store</h4>-->
                <v-chip label color="#546E7A" text-color="white">
                    <v-icon left>store</v-icon>ONLINE STORE
                </v-chip>
            </div>
            <div class='col m4'>
                <!--<a class="waves-effect blue-grey darken-1 black-text btn-large">Cart: {{shoppingCart.length}}</a>-->
                <Cart />
            </div>
        </div>
        <!--'item.invId'>-->
        <div class="row">
            <div class="col m3" v-for="(item,key) in forSale" :key='item.name'>
                <div class="card blue-grey darken-1">
                    <div class="card-image">
                        <img :src="item.image" alt="">
                        <a class="halfway-fab btn-floating pink pulse" @click="addToCart(item.name)">
                            <!--item.invId-->
                            <i class="material-icons">
                                add_shopping_cart
                            </i>
                        </a>
                    </div>
                    <div class="card-content">
                        <span class="card-title">{{item.name}}
                        </span>
                        <p> {{ item.price | dollars }}</p>
                    </div>
                </div>
            </div>
            <!--{{forSale}} used for testing-->

        </div>
        <div class='spacer'></div>
        <Footer />
    </div>


</template>

<script>

    import { dollars } from '../filter.js';
    import Navbar from './Navbar'
    import Footer from './Footer'
    import Cart from './Cart'

    export default {
        name: 'Products',
        filters: {
            dollars
        },
        components: {
            Navbar,
            Footer,
            Cart
        },
        data() {
            return {

            }
        },
        computed: {
            forSale() { return this.$store.getters.forSale; },
            shoppingCart() { return this.$store.getters.shoppingCart; }
        },
        methods: {
            addToCart(name) {
                this.$store.dispatch('addToCart', name);
            }
        }
    }
</script>

<!-- Add "scoped " attribute to limit CSS to this component only -->
<style scoped>
    #topRow {
        margin-top: 20px;
    }

    .container-fluid {
        text-align: center;
    }

    .card {
        height: 500px;
        overflow: hidden;

    }

    .spacer {
        height: 20px;
    }
</style>
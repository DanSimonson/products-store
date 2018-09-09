<template>

    <div class="container-fluid">
        <Navbar/>
        <div id='topRow' class="row">
            <div class='col m9'>
                <h4>Online Store</h4>
            </div>
            <div class='col m3'>
                <a class="waves-effect blue-grey darken-1 black-text btn-large">Cart: {{shoppingCart.length}}</a>
            </div>


        </div>

        <div class="row">
            <div class="col m3" v-for="item in forSale" :key='item.invId'>
                <div class="card blue-grey darken-1">
                    <div class="card-image">
                        <img :src="item.image" alt="">
                        <a class="halfway-fab btn-floating pink pulse" @click="addToCart(item.invId)">
                            <i class="material-icons">
                                add_shopping_cart
                            </i>
                        </a>
                    </div>
                    <div class="card-content">
                        <span class="card-title">{{item.name}}</span>
                        <p> {{item.price}}</p>
                    </div>
                </div>
            </div>
            {{ shoppingCart }}
        </div>
    </div>

</template>

<script>
    import Cart from './Cart'
    import { dollars } from '../filter.js';
    import Navbar from './Navbar'

    export default {
        name: 'Products',
        filters: {
            dollars
        },
        components: {
            Navbar
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
            addToCart(invId) {
                this.$store.dispatch('addToCart', invId);
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
</style>
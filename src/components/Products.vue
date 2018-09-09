<template>

    <div class="container-fluid">
        <Navbar/>
        <h4>Online Store</h4>
        <div class="row">
            <div class="col m3" v-for="item in forSale" :key='item.invId'>
                <div class="card blue-grey darken-1">
                    <div class="card-image">
                        <img :src="item.image" alt="">
                        <a href="" class="halfway-fab btn-floating pink pulse" @click="addToCart(item.invId)">
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
    .container-fluid {
        text-align: center;
    }

    .card {
        height: 500px;
        overflow: hidden;
    }
</style>
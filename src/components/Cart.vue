<template>
    <div>
        <!--<a class="waves-effect blue-grey darken-1 black-text btn" @click.native="dialog = true"><i class="material-icons right">shopping_cart</i>Items
            In Cart:({{ shoppingCart.length }})
        </a>-->
        <v-btn blue-grey darken-1 @click.native="dialog = true"><i class="material-icons right">shopping_cart</i>View Items
            in Cart: {{cartLength}}</v-btn>
        <div class="text-xs-center">
            <v-dialog v-model="dialog" persistent max-width="290">
                <!--<v-btn slot="activator" color="primary" dark>Open Dialog</v-btn>-->
                <v-card>
                    <v-card-title class="headline">Shopping Cart</v-card-title>
                    <v-card-text>
                        <table class="table">
                            <tbody>
                                <tr v-for="(item, index) in checkout">
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.price | dollars }}</td>
                                    <td>
                                        <v-btn icon @click="removeFromCart(index)" color="warning"><i class="material-icons">
                                                remove_shopping_cart
                                            </i></v-btn>
                                    </td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <th>{{ total | dollars }}</th>
                                    <th></th>
                                </tr>
                            </tbody>
                        </table>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green darken-1" flat @click.native="dialog=false">Keep Shopping</v-btn>
                        <v-btn color="green darken-1" flat @click.native="dialog=false">Checkout</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </div>
    </div>
</template>
<script>
    import { dollars } from '../filter.js';
    export default {
        name: 'Cart',
        filters: {
            dollars,
        },
        data() {
            return {
                dialog: false
            }
        },
        computed: {
            shoppingCart() { return this.$store.getters.shoppingCart; },
            cartLength() { return this.shoppingCart.length; },
            checkout() {
                return this.$store.getters.shoppingCart.map((cartItem) => {
                    return this.$store.getters.forSale.find((forSaleItem) => {
                        return cartItem === forSaleItem.invId;
                    });
                });
            },
            total() {
                return this.checkout.reduce((acc, cur) => acc + cur.price, 0);
            },
        },
        methods: {
            removeFromCart(index) {
                this.$store.dispatch('removeFromCart', index);
            }
        }
    };
</script>

<!--<template>
    <a class="waves-effect waves-light btn"><i class="material-icons right">shopping_cart</i>Cart:({{ shoppingCart.length
        }})
    </a>

</template>
<script>
    export default {
        name: 'Cart',
        computed: {
            shoppingCart() { return this.$store.getters.shoppingCart; },
        },
    };
</script>
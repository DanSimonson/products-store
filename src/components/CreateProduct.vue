<template>
    <div id="createproduct">
        <Navbar />
        <v-container>
            <v-layout row class="black--text">
                <v-flex xs12 sm6 offset-sm3>
                    <h4 class='blackText'>Create a new Product</h4>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex xs12>
                    <form @submit.prevent="onCreateProduct">
                        <v-layout row>
                            <v-flex xs12 sm6 offset-sm3>
                                <v-text-field name="name" label="Name" id="Name" v-model="name" required></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs12 sm6 offset-sm3>
                                <v-text-field type='number' name="price" label="Price" id="Price" v-model="price"
                                    required></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs12 sm6 offset-sm3>
                                <v-text-field name="image" label="Image URL" id="image-url" v-model="image" required></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs12 sm6 offset-sm3>
                                <img :src="image" height="150">
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs12 sm6 offset-sm3>
                                <v-btn class="blue-grey darken-1 white-text" :disabled="!formIsValid" type="submit">Create
                                    Product</v-btn>
                            </v-flex>
                        </v-layout>
                    </form>
                </v-flex>
            </v-layout>
        </v-container>
        <!--{{forSale}} used for testing-->
    </div>
</template>
<script>

    import { dbProductsRef } from '../firebaseConfig.js'
    import Navbar from './Navbar'
    export default {
        name: 'CreateProduct',
        components: {
            Navbar
        },
        data: () => ({
            name: '',
            price: '',
            image: '',
        }),
        computed: {
            formIsValid() {
                return this.name !== ''
                    && this.price !== ''
                    && this.image !== ''
            },
            forSale() { return this.$store.getters.forSale; },
        },
        methods: {
            onCreateProduct() {
                const product = {
                    name: this.name,
                    price: this.price,
                    image: this.image,
                    invId: ''
                }
                this.$store.dispatch('createProduct', product)
                this.$router.push('/products')
            }
        }
    }
</script>
<style scoped>
    .blackText {
        color: black;
    }
</style>
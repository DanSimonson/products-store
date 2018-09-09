<template>
    <Navbar/>

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
                card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.',
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
    v-layout {
        padding: 0;
    }
</style>
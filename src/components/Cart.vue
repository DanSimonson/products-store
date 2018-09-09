<template>
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
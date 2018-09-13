<template>
    <div class='checkout'>
        <Navbar />
        <!--<div class='container'>-->
        <transition appear appear-name="custom-classes-transition" appear-active-class="animated flipInX">
            <div v-if="showBox" id='box'>This is where the address and other information would be to
                send theitems you ordered if this was a production application</div>
        </transition>
        <!--</div>-->
        <Footer />
    </div>


</template>
<script>
    import Navbar from './Navbar'
    import Footer from './Footer'
    export default {
        name: 'Checkout',
        components: {
            Footer,
            Navbar
        },
        data() {
            return {
                showBox: true
            }

        }

    }

</script>
<style scoped>
    #box {
        animation-delay: .2s;
        animation-duration: 10s;
        /*animation-iteration-count: infinite;*/
    }

    .checkout {
        text-align: center;
    }



    #box {
        background-color: white;
        width: 300px;
        border: 25px solid #78909C;
        padding: 25px;
        width: 300px;
        height: 200px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;

    }
</style>
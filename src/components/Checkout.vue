<template>
    <div class='checkout'>
        <Navbar />
        <div class='container'>
            <transition appear appear-name="custom-classes-transition" appear-active-class="animated flipInX">
                <div v-if="showBox" id='box'>
                    <p>This is where the address and other information would be to
                        send the items you ordered if this was a production application</p>
                </div>
            </transition>
        </div>
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
    .checkout {
        text-align: center;
    }

    #box {
        /*background-color: white;*/
        border: 25px solid #78909C;
        padding: 25px;
        width: 300px;
        height: 300px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        animation-delay: .2s;
        animation-duration: 10s;
        /*animation-iteration-count: infinite;*/
        color: black;
        text-align: center;
        vertical-align: middle;


    }
</style>
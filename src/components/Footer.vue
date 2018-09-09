<template>
    <v-footer color="blue-grey darken-1" app>
        <span class="white--text">mariposaweb &copy; 2018</span>
    </v-footer>
    <!-- footer 
    <footer class="page-footer grey darken-3">
        <div class="container">
            <div class="row">
                <div class="col s12">
                    <span>&copy; 2018</span>
                </div>
            </div>
        </div>
    </footer>-->
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>
<style scoped>
    v-footer {
        margin-top: 20px;
    }

    body {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
    }

    main {
        flex: 1 0 auto;
    }
</style>
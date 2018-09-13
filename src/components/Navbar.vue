<template>
    <div class='navbar'>
        <div class="navbar">
            <nav class="nav-wrapper blue-grey darken-1">
                <a id='specialA' class="brand-logo center">Geek Stuff</a>
                <a href="#" class="sidenav-trigger" data-target="mobile-links">
                    <i class="material-icons">menu</i>
                </a>
                <ul class="right hide-on-med-and-down">
                    <router-link to='/' tag='li' style='cursor:pointer'>Home</router-link>
                    <router-link to='/products' tag='li' style='cursor:pointer'>Products</router-link>
                    <router-link to='/createproduct' tag='li' style='cursor:pointer'>Create Product</router-link>
                    <li>
                        <a @click="userLogin" class="btn blue-grey white-text">Login</a>
                    </li>
                    <li>
                        <a @click="userLogout" class="btn blue-grey white-text">Logout</a>
                    </li>

                </ul>
            </nav>
        </div>
        <!--using a href links so page reloads here-->
        <ul class="sidenav" id="mobile-links">
            <li>
                <a href="/">Home</a>
                <!--<router-link to='/' style='cursor:pointer; text-decoration:none'>Home</router-link>-->
            </li>
            <li>
                <a href="/products">Products</a>
                <!--<router-link :to="/products" style='cursor:pointer; text-decoration:none'>View Products</router-link>-->
            </li>
            <li>
                <a href="/createproduct">Create Product</a>
                <!--<router-link to='/createproduct' style='cursor:pointer; text-decoration:none'>Create Product</router-link>-->
            </li>
            <li>
                <a href="/login">login</a>
                <!--<router-link to='/createproduct' style='cursor:pointer; text-decoration:none'>Create Product</router-link>-->
            </li>
        </ul>
        <!--<ul class="sidenav" id="mobile-links">
            <router-link to='/' tag='li' style='cursor:pointer'>Home</router-link>
            <router-link to='/products' tag='li' style='cursor:pointer'>View Products</router-link>
            <router-link to='/createProduct' tag='li' style='cursor:pointer'>Create Product</router-link>
        </ul>-->
    </div>
</template>

<script>
    import Firebase from 'firebase'

    $(document).ready(function () {
        $('.sidenav').sidenav();
    });

    export default {
        name: 'Navbar',
        components: {

        },
        data: () => ({
            items: [
                { title: 'Home', icon: 'home', link: '/' },
                { title: 'View Products', icon: 'message ', link: '/products' },
                { title: 'Create Product', icon: 'build', link: '/create-products' }
            ],
            dialog: false

        }),
        methods: {
            userLogin() {
                //alert('Login authentication has not been implemented yet. You are free to roam around with signing in')
                this.$router.push('/login')
            },
            userLogout() {
                Firebase.auth().signOut().then(() => {
                    this.$router.push({ name: 'Login' })
                })
            }

        }

    }

</script>
<style scoped>
    li {
        padding-left: 10px;
    }

    specialA {
        margin-bottom: 50px;
    }
</style>
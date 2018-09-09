<template>
    <div class='navbar'>
        <div class="navbar-fixed">
            <nav class="nav-wrapper indigo">
                <a id='specialA' class="brand-logo center">Geek Stuff</a>
                <a href="#" class="sidenav-trigger" data-target="mobile-links">
                    <i class="material-icons">menu</i>
                </a>
                <ul class="right hide-on-med-and-down">
                    <router-link to='/' tag='li' style='cursor:pointer'>Home</router-link>
                    <router-link to='/products' tag='li' style='cursor:pointer'>View Products</router-link>
                    <router-link to='/createproduct' tag='li' style='cursor:pointer'>Create Product</router-link>
                    <li><a href="" class="btn white indigo-text">Login</a></li>
                </ul>
            </nav>
        </div>
        <ul class="sidenav" id="mobile-links">
            <li>
                <router-link to='/' style='cursor:pointer; text-decoration:none'>Home</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'Products'}" style='cursor:pointer; text-decoration:none'>View Products</router-link>
            </li>
            <li>
                <router-link to='/createproduct' style='cursor:pointer; text-decoration:none'>Create Product</router-link>
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
            ]

        }),
        methods: {
            open: function () {
                console.log('slideoutOpen')
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
<template>
    <div class='login-page'>
        <Navbar />
        <div class="login container">
            <form class="card-panel black-text" @submit.prevent="login">
                <h2 class="center black-text">Login</h2>
                <div class="field">
                    <label for="email">Email</label>
                    <input id="email" type="email" v-model="email">
                </div>
                <div class="field">
                    <label for="password">Password</label>
                    <input id="password" type="password" v-model="password">
                </div>
                <p v-if="feedback" class="red-text center">{{ feedback }}</p>
                <div class="field center">
                    <button type='submit' class="btn blue-grey darken-2">Login</button>
                </div>
            </form>
            <div class="row">
                <div class="col s12 m6">
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                            <span class="card-title">Temporary Login Information</span>
                            <p>Username: test@gmail.com </p>
                            <p>Password: test1234</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <Footer />
    </div>
</template>

<script>
    import Firebase from 'firebase'
    import Navbar from './Navbar'
    import Footer from './Footer'
    export default {
        name: 'Login',
        components: {
            Footer,
            Navbar
        },
        data() {
            return {
                email: null,
                password: null,
                feedback: null
            }
        },
        methods: {
            login() {
                if (this.email && this.password) {
                    this.feedback = null
                    Firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                        .then(user => {
                            //console.log(user)
                            this.$router.push({ name: 'Products' })
                        }).catch(err => {
                            this.feedback = err.message
                        })
                } else {
                    this.feedback = 'Please fill in both fields'
                }
            }
        }
    }
</script>

<style>
    .login {
        max-width: 400px;
        margin-top: 60px;
    }

    .login h2 {
        font-size: 2.4em;
    }

    .login .field {
        margin-bottom: 16px;
    }

    .container {
        max-width: 500px;
    }

    .container .row {
        margin: 0 auto;
    }

    .card {
        width: 300px;
    }
</style>
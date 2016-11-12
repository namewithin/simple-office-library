<template>
    <div class="container">
        <div class="ui secondary  menu">
            <a class="item">
                Home
            </a>
            <a class="item active">
                Messages
            </a>
            <a class="item">
                Friends
            </a>
            <div class="right menu">
                <div class="item">
                    <div class="ui icon input">
                        <input type="text" placeholder="Search...">
                        <i class="search link icon"></i>
                    </div>
                </div>
                <a class="ui item">
                    <button class="ui primary button" @click="login()" v-show="!authenticated">Login</button>
                    <button class="ui secondary button" @click="logout()" v-show="authenticated">Logout</button>
                </a>
            </div>
        </div>
        <router-view v-if="authenticated"></router-view>
    </div>
</template>
<style>
</style>
<script>

    function checkAuth() {
        return !!localStorage.getItem('id_token');
    }
    export default{
        data() {
            return {
                authenticated: false,
                user: {
                    authenticated: false,
                    profile: null
                },
                secretThing: '',
                lock: new Auth0Lock('rsTDgvPPlN3VFKU1Zo5DeFvn5EPQN4Cs', 'pdffiller-library.eu.auth0.com')
            }
        },
        created() {
            var self = this;

            self.authenticated = checkAuth();
            this.lock.on('authenticated', (authResult) => {
                localStorage.setItem('id_token', authResult.idToken);
                this.lock.getProfile(authResult.idToken, (error, profile) => {
                    if (error) {
                        alert("sorry, can't authenticate ya");
                        return;
                    }
//                    localStorage.setItem('profile', JSON.stringify(profile));
                    this.user.profile = JSON.stringify(profile);

                    self.authenticated = true;
                    console.log(self.authenticated);

                });
            });

            this.lock.on('authorizaton_error', (error) => {
                // handle error when authorizaton fails
            });
        },
        methods: {
            login() {
                this.lock.show();
            },
            logout() {
                localStorage.removeItem('id_token');
                localStorage.removeItem('profile');
                this.authenticated = false;
                this.$router.push('books');
            },
        },
        computed: {}
    }
</script>

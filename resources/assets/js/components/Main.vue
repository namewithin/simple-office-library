<template>
    <div class="container" style="padding-left:30px; padding-right:20px; padding-top:6px">
        <div class="ui secondary  menu">
            <a class="item active">
                books
            </a>
            <a class="disabled item">
                request
            </a>
            <a class="disabled item">
                folks reading
            </a>
            <a class="item">
                create new (admin)
            </a>
            <div class="right menu">
                <div class="disabled item">
                    <div class="ui icon input">
                        <input type="text" placeholder="Search...">
                        <i class="search link icon"></i>
                    </div>
                </div>
                <a class="ui item">
                    <button class="ui secondary button">Logout</button>
                </a>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<style>
</style>
<script>
    import auth from '../auth'

    export default{
        data() {
            return {}
        },
        created() {
            var self = this;
        },
        methods: {
            logout() {
                this.$store.dispatch('logout');
                localStorage.removeItem('id_token');
                this.$router.push('books');
            },
        },
        computed: {
            authenticated(){
                return this.$store.state.user.authenticated
            }
        }
    }
</script>

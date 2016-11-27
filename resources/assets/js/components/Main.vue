<template>
    <div class="container" style="padding-left:30px; padding-right:20px; padding-top:6px">
        <div class="ui secondary  menu">
            <a class="item active">
                <router-link :to="{ name: 'shelve' }">books
                </router-link>
            </a>
            <a class="item">
                request
            </a>
            <a class="disabled item">
                folks reading
            </a>
            <a class="item">
                <router-link :to="{ name: 'create-book'}">create new
                </router-link>
            </a>
            <div class="right menu">
                <div class="disabled item">
                    <div class="ui icon input">
                        <input type="text" placeholder="Search...">
                        <i class="search link icon"></i>
                    </div>
                </div>
                <a class="ui item">
                    <button class="ui secondary button"><a href="/logout">Logout</a></button>
                </a>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<style>
</style>
<script>

    export default{
        data() {
            return {}
        },
        created() {
        },
        methods: {},
        computed: {
            authenticated(){
                return this.$store.state.user.authenticated
            }
        }
    }
</script>

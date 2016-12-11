<template>
    <div class="container" style="padding-left:30px; padding-right:20px; padding-top:6px">
        <div class="ui secondary  menu">
            <router-link class="item" :to="{ name: 'shelve' }" exact>books
            </router-link>
            <router-link class="item" :to="{ name: 'request'}" exact>request
            </router-link>
            <router-link class="item" :to="{ name: 'requestsList'}" exact>current requests
            </router-link>

            <a class="disabled item">
                folks reading
            </a>

            <router-link class="item" :to="{ name: 'create-book'}" exact>create new
            </router-link>

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
        <transition>
            <router-view></router-view>
        </transition>
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

<template>
    <div>
        <div class="ui eight cards" v-if="books">

            <div class="card" v-for="book in books">
                <div class="image">
                    <img v-bind:src="book.avatar" @click=go(book.id) style="cursor:pointer">
                </div>
                <div class="extra">
                    <router-link :to="{ name: 'single-book', params: { id: book.id }}">{{book.title}}
                    </router-link>
                    <div data-rating="4" class="ui star rating"></div>
                </div>
                <div class="extra content">
                    reading now
                    <div class="right floated author">
                        <img class="ui avatar image" src="/default-avatar.png"> Matt
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
</style>
<script>
    export default{
        data(){
            return {}
        },
        created(){
            this.$store.dispatch('fetchBooks');
        },
        methods: {
            go(id){
                this.$router.push({ name: 'single-book', params: { id: id }})
            }
        },
        computed: {
            books() {
                return this.$store.state.books
            }
        }
    }


</script>

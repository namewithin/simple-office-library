<template>
    <div>
        <div class="ui eight cards" v-if="books">

            <div class="card" v-for="book in books">
                <div class="image">
                    <img v-bind:src="book.avatar">
                </div>
                <div class="extra">
                    <router-link :to="{ name: 'single-book', params: { id: book.id }}">{{book.title}}
                    </router-link>
                    <div data-rating="4" class="ui star rating"></div>
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
        computed: {
            books() {
                return this.$store.state.books
            }
        }
    }
</script>

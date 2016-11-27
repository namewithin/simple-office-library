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
        <!--<div class="ui four column doubling stackable grid container" v-if="books">-->
        <!--<div v-for="book in books" class="column">-->
        <!--<div class="ui card">-->
        <!--<div class="image">-->
        <!--<img v-bind:src="book.avatar">-->
        <!--</div>-->
        <!--<div class="content">-->
        <!--<a class="header">-->
        <!--<router-link :to="{ name: 'single-book', params: { id: book.id }}">{{book.title}}-->
        <!--</router-link>-->
        <!--</a>-->
        <!--<div class="meta">-->
        <!--<span class="date">added on {{book.created_at}}</span>-->
        <!--</div>-->
        <!--<div class="description">-->
        <!--{{book.description}}-->
        <!--</div>-->
        <!--</div>-->
        <!--<div class="extra content">-->
        <!--<a>-->
        <!--<i class="user icon"></i>-->
        <!--hot-->
        <!--</a>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
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

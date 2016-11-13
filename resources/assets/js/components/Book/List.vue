<template>
    <div>
        <div class="ui four column doubling stackable grid container" v-if="books">
            <div v-for="book in books" class="column">
                <div class="ui card">
                    <div class="image">
                        <img src="/images/kristy.png">
                    </div>
                    <div class="content">
                        <a class="header">{{book.name}}</a>
                        <div class="meta">
                            <span class="date">added on {{book.created_at}}</span>
                        </div>
                        <div class="description">
                            {{book.description}}
                        </div>
                    </div>
                    <div class="extra content">
                        <a>
                            <i class="user icon"></i>
                            hot
                        </a>
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
        computed: {
            books() {
                return this.$store.state.books
            }
        }
    }
</script>

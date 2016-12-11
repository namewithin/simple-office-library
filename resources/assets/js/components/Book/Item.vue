<template>
    <div v-if="book">
        <div class="ui items">
            <div class="item">
                <a class="ui small image">
                    <img v-bind:src="book.avatar">
                </a>
                <div class="content">
                    <a class="header">{{book.title}}</a>
                    <div class="description">
                        <p>{{book.description}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {}
        },
        created() {
            this.$store.dispatch('fetchBook', this.bookId);
        },
        computed: {
            bookId(){
                return this.$route.params.id;
            },
            book(){
                return this.$store.state.currentBook
            }
        }
    }

</script>

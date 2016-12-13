<template>
    <div v-if="book">
        <div class="ui grid">
            <div class="eight wide column">

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
                    <button class="ui primary button" @click="reserve">
                        reserve
                    </button>


                </div>
            </div>
            <div class="three wide column">
                <div class="ui horizontal statistics">
                    <div class="statistic">
                        <div class="value">
                            204
                        </div>
                        <div class="label">
                            viewes
                        </div>
                    </div>
                    <div class="statistic">
                        <div class="value">
                            322
                        </div>
                        <div class="label">
                            times read
                        </div>
                    </div>
                    <div class="statistic">
                        <div class="value">
                            <i class="thumbs outline up icon"></i> 30
                        </div>
                        <div class="label">
                            likes
                        </div>
                    </div>
                    <div class="statistic">
                        <div class="value">
                            <i class="plane icon"></i> 5
                        </div>
                        <div class="label">
                            Flights
                        </div>
                    </div>
                    <div class="statistic">
                        <div class="value">
                            <i class="thumbs outline up icon"></i>32
                        </div>
                        <div class="label">
                            likes
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

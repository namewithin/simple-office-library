<template>
    <div>
        <h2>I wanna request a book:</h2>
        <div class="ui form segment">
            <div class="field">
                <label>book title</label>
                <input placeholder="title" v-model="book.title" type="text">
            </div>
            <div class="field">
                <label>author</label>
                <input placeholder="author name" v-model="book.author" type="text">
            </div>
            <div class="field">
                <label>year</label>
                <input placeholder="year published" v-model="book.year" type="text">
            </div>
            <div class="ui submit button" @click.prevent="save" v-bind:class="{loading:isLoading}">submit</div>
        </div>
    </div>
</template>
<script>
    import api from '../../api'
    export default{
        data(){
            return {
                book: {
                    title: null,
                    author: null,
                    year: null
                },
                isLoading: false
            }
        },
        methods: {
            save(){
                api.createBookRequest(this.book).then(response=> {
                    this.$router.push({name: 'requestsList'});

                    noty({"text":"added. will let you know if something happens.",
                    "layout":"topRight",
                    "type":"success",
                    "textAlign":"center",
                    "easing":"swing",
                    "animateOpen":{"height":"toggle"},
                    "animateClose":{"height":"toggle"},
                    "speed":"500",
                    "timeout":"3000",
                    "closable":false,
                    "closeOnSelfClick":true
                    });
                });
            }
        }
    }





</script>

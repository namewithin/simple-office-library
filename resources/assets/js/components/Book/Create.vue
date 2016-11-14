<template>
    <div>
        <h1>create new book</h1>

        <form class="ui form">
            <h4 class="ui dividing header">basic information</h4>
            <div class="field">
                <label>title</label>
                <div class="field">
                    <input type="text" v-model="title" placeholder="book title">
                </div>
                <div class=" two wide field">
                    <input type="text" v-model="year" placeholder="year published">
                </div>
                <div class=" two wide field">
                    <input type="text" v-model="revision" placeholder="revision">
                </div>
            </div>
            <div class="field">

            </div>

            <h4 class="ui dividing header">Billing Information</h4>
            <div class="field">
                <label>Card Type</label>
                <div class="ui selection dropdown">
                    <input type="hidden" name="card[type]">
                    <div class="default text">Type</div>
                    <i class="dropdown icon"></i>
                    <div class="menu">
                        <div class="item" data-value="visa">
                            <i class="visa icon"></i>
                            Visa
                        </div>
                        <div class="item" data-value="amex">
                            <i class="amex icon"></i>
                            American Express
                        </div>
                        <div class="item" data-value="discover">
                            <i class="discover icon"></i>
                            Discover
                        </div>
                    </div>
                </div>
            </div>


            <div class="ui button" >Submit Order</div>
        </form>
    </div>

</template>
<style>
</style>
<script>
    export default{
        data(){
            return {
                book: {
                    title: ''
                }
            }
        },
    }
</script>

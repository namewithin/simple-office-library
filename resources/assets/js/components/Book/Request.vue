<template>
    <div>
        <h2>I wanna request a book:</h2>
        <div class="ui form segment">
            <div class="field">
                <label>book title</label>
                <input placeholder="title" type="text">
            </div>
            <div class="field">
                <label>author</label>
                <input placeholder="author name" type="text">
            </div>
            <div class="ui submit button">submit</div>
        </div>
    </div>
</template>
<style>
</style>
<script>
    export default{
        data(){
            return {
                book: {
                    name: null,
                    author: null,
                }
            }
        },
    }
</script>

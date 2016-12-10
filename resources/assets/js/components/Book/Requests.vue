<template>
    <div>
        <h2>List of requests</h2>
        {{this.requests}}

    </div>
</template>
<style>
</style>
<script>
    import api from '../../api'

    export default{
        data(){
            return {
                requests: null
            }
        },
        created(){
            this.fetch()
        },
        methods: {
            fetch(){
                api.getRequestedBooks().then(response=> {
                    this.requests = response.data;
                });
            }
        }
    }
</script>

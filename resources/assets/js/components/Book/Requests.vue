<template>
    <div>
        <h2>List of requests</h2>
        <div v-bind:class="{active: !loaded}" class="ui text loader">Loading</div>
        <table class="ui single line table">
            <thead>
            <tr>
                <th>boot title</th>
                <th>requested by</th>
                <th class="right aligned">actions</th>
            </tr>
            </thead>

            <tbody>

            <tr v-for="request in requests">
                <td>{{request.title}}</td>
                <td><strong>{{request.user.name}}</strong>
                    <span v-timeago:timeago=request.created_at></span></td>
                <td class="right aligned">
                    <button class="ui primary button">
                        okay
                    </button>
                    <button class="ui button" @click="remove(request.id)">
                        discard
                    </button>
                </td>
            </tr>

            </tbody>

        </table>

    </div>
</template>
<style>
</style>
<script>
    import api from '../../api'
    import timeago from '../../directives/timeago'

    export default{
        data(){
            return {
                requests: null
            }
        },
        computed:{
            loaded(){
                if (this.requests) return true;
                return false;
            }
        },
        created(){
            this.fetch()
        },
        methods: {
            remove(id){
                api.deleteRequestedBook(id).then(response=>{
                console.log(response);
                    this.requests = _.reject(this.requests, {id: id} ) //todo make remove
                });

            },
            fetch(){
                api.getRequestedBooks().then(response=> {
                    this.requests = response.data.data;
                });
            }
        }
    }


















</script>

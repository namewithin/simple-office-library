<template>
    <div>
        <h2>List of requests</h2>
        {{this.requests}}
        <table class="ui single line table">
            <thead>
            <tr>
                <th>Name</th>
                <th>Registration Date</th>
                <th>E-mail address</th>
                <th>Premium Plan</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="request in requests">
                <td>{{request.user_id}}</td>
                <td>{{request.title}}</td>
                <!--<td>{{request.</td>-->
                <td>jilsewris22@yahoo.com</td>
                <td>Yes</td>
            </tr>
            </tbody>
        </table>

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
                    this.requests = response.data.data;
                });
            }
        }
    }
</script>

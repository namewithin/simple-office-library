import Vue from 'vue';
import VueResource from 'vue-resource';
import {API_ROOT} from '../config';

Vue.use(VueResource);

Vue.http.options.credentials = true;

Vue.http.headers.common['X-CSRF-TOKEN'] = document.getElementsByName('csrf-token')[0].getAttribute('content');

// Vue.http.interceptors.push((request, next)=> {
//     request.headers = request.headers || {};
//     if (localStorage.getItem('token')) {
//         request.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
//     }
//     next((response) => {
//         if (response.status === 401) {
//             localStorage.clear();
//             Vue.router.push('login');
//         }
//     })
// });
Vue.http.interceptors.push({
    response: function (response) {
        if (response.status === 401) {
            this.$store.dispatch('logout');
            this.$router.go('/');
        }
        return response;
    }
});


export const BookResource = Vue.resource(API_ROOT + '/book{/id}');
export const RequestResource = Vue.resource(API_ROOT + '/book/request{/id}');

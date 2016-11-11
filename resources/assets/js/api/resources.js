import Vue from 'vue';
import VueResource from 'vue-resource';
import {API_ROOT} from '../config';

Vue.use(VueResource);

Vue.http.options.crossOrigin = true;
Vue.http.options.credentials = true;

Vue.http.interceptors.push((request, next)=> {
    request.headers = request.headers || {};
    if (localStorage.getItem('token')) {
        request.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
    }
    next((response) => {
        if (response.status === 401) {
            localStorage.clear();
            Vue.router.push('login');
        }
    })
});

export const UserResource = Vue.resource(API_ROOT + 'users{/id}');
export const AuthResource = Vue.resource(API_ROOT + 'auth{/id}');
export const BookResource = Vue.resource(API_ROOT + 'book{/id}');
export const TagResource = Vue.resource(API_ROOT + 'tag{/id}');

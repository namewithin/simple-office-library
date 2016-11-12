require('./bootstrap');

import store from './vuex';
import {API_ROOT} from './config';
const VueRouter = require('vue-router');
Vue.use(VueRouter);

import routes from './routes';

var router = new VueRouter({
    routes,
    history: true
});

Vue.http.headers.common['X-CSRF-TOKEN'] = document.getElementsByName('csrf-token')[0].getAttribute('content');
Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');
Vue.http.options.root = API_ROOT;
Vue.component('main-component', require('./components/Main.vue'));

Vue.http.interceptors.push({
    response: function (response) {
        if (response.status === 401) {
            this.logout();
            this.authenticated = false;
            router.go('/');
        }
        return response;
    }
});

const app = new Vue({
    el: '#app',
    router,
    store,
});
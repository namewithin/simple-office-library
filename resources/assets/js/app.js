require('./bootstrap');

import store from './vuex';
// import {API_ROOT} from './config';
const VueRouter = require('vue-router');
Vue.use(VueRouter);

import routes from './routes';

var router = new VueRouter({
    routes
});

Vue.http.headers.common['X-CSRF-TOKEN'] = document.getElementsByName('csrf-token')[0].getAttribute('content');
Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');
// Vue.http.options.root = API_ROOT;

const app = new Vue({
    el: '#app',
    router,
    store
});
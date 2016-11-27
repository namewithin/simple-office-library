require('./bootstrap');
import {API_ROOT} from './config'
import store from './vuex';
const VueRouter = require('vue-router');
Vue.use(VueRouter);

import routes from './routes';

var router = new VueRouter({
    routes,
    linkActiveClass: 'active'
});

Vue.component('main-component', require('./components/Main.vue'));

Vue.http.options.root = API_ROOT;

localStorage.clear();
Vue.http.get('signin').then(response => {
    console.log('SUCCESS', response);
    localStorage.setItem('id_token', response.data.meta.token);
    const app = new Vue({
        el: '#app',
        router,
        store
    });
}, response => {
    console.log('ERROR', response);
});
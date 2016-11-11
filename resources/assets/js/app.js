require('./bootstrap');

import store from './vuex';
import {API_ROOT} from './config';
const VueRouter = require('vue-router');
Vue.use(VueRouter);

import routes from './routes';
Vue.store = store;

Vue.router = new VueRouter({
    routes
});

Vue.http.headers.common['X-CSRF-TOKEN'] = document.getElementsByName('csrf-token')[0].getAttribute('content');
Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');
Vue.http.options.root = API_ROOT;

Vue.use(require('@websanova/vue-auth'), {
    rolesVar: 'type'
});

// Start
var component = require('./components/Main.vue');

component.router = Vue.router;
component.store = Vue.store;

new Vue(component).$mount('#app');
require('./bootstrap');

import store from './vuex';
const VueRouter = require('vue-router');
Vue.use(VueRouter);

import routes from './routes';

var router = new VueRouter({
    routes,
    history: true
});

Vue.component('main-component', require('./components/Main.vue'));

const app = new Vue({
    el: '#app',
    router,
    store,
});
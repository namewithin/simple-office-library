import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
    state: {
        count: 0,
        user: {
            authenticated: false,
            profile: null
        },
    },
    actions: {
        authenticate(){

        }
    },
    strict: debug
});

module.exports = store;
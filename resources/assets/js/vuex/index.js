import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
    state: {
        count: 0
    },
    modules: {},
    strict: debug

});

module.exports = store;
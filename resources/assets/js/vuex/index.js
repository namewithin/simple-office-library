/**
 * Created by namewithin on 11.11.16.
 */

import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

var debug = true;
const store = new Vuex.Store({
    modules: {},
    strict: debug

});

module.exports = store;
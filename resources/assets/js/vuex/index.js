import Vue from 'vue';
import Vuex from 'vuex';
import api from '../api';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
    state: {
        count: 0,
        user: {
            authenticated: false,
            profile: null
        },
        books: []
    },
    actions: {
        fetchBooks(store) {
            api.getBooksPage().then(response => {
                store.commit('ADD_BOOKS', response.data.data)
            });
        }
    },
    mutations: {
        AUTHENTICATE(state, bool) {
            state.user.authenticated = bool
        },
        ADD_BOOKS(state, books){
            _.forEach(books, function (book) {
                state.books.push(book)
            })
        },

    },
    strict: debug
});

module.exports = store;
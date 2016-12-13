import Vue from 'vue';
import Vuex from 'vuex';
import api from '../api';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
    state: {
        user: {
            profile: null
        },
        books: [],
        currentBook: null
    },
    actions: {
        fetchBooks(store) {
            api.getBooksPage().then(response => {
                store.commit('CLEAR_BOOKS');
                store.commit('ADD_BOOKS', response.data.data)
            });
        },
        fetchBook(store, id){
            api.getBook(id).then(response => {
                store.commit('ADD_BOOK', response.data)
            });
        },
        reserveBook(store, id){
            api.reserveBook(id).then(response => {
                store.commit('')
            });
        }
    },
    mutations: {
        CLEAR_BOOKS(state){
            state.books = [];
        },
        ADD_BOOKS(state, books){
            _.forEach(books, function (book) {
                state.books.push(book)
            })
        },
        ADD_BOOK(state, book){
            state.currentBook = book;
        },

    },
    strict: debug
});

module.exports = store;
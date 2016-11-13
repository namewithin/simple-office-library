import Vue from 'vue'

export default {

    user: {
        authenticated: false
    },

    logout() {
        localStorage.removeItem('id_token');
        this.user.authenticated = false
    },

    checkAuth() {
        return !!localStorage.getItem('id_token');
    },

    getAuthHeader() {
        return {
            'Authorization': 'Bearer ' + localStorage.getItem('id_token')
        }
    }
}
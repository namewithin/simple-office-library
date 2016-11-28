window._ = require('lodash');
window.moment = require('moment');

if (window.$ === undefined || window.jQuery === undefined) {
    window.$ = window.jQuery = require('jquery');
}

window.Vue = require('vue');
require('vue-resource');


Vue.http.interceptors.push((request, next) => {
    if (_.isEmpty(localStorage.getItem('id_token'))) {
        if (request.url === 'signin') {
            next();
        } else {
            location.reload();
        }
    } else {
        request.headers.set('X-CSRF-TOKEN', Laravel.csrfToken);
        request.headers.set('JWTAuthorization', 'Bearer ' + localStorage.getItem('id_token'));
        next(response=> {
            if (response.status == 401) {
                window.location.href = 'http://library.dev'
            }
        });
    }
});

import noty from 'noty'

// import Echo from "laravel-echo"

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });

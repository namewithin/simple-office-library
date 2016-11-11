window._ = require('lodash');
window.moment = require('moment');
/*
 * Load jQuery and Bootstrap jQuery, used for front-end interaction.
 */
if (window.$ === undefined || window.jQuery === undefined) {
    window.$ = window.jQuery = require('jquery');
}

window.Vue = require('vue');
require('vue-resource');
require('bootstrap-sass');


Vue.http.interceptors.push((request, next) => {
    request.headers.set('X-CSRF-TOKEN', Laravel.csrfToken);
    next();
});

import Echo from "laravel-echo"

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });

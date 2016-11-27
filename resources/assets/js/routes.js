const routes =
    [
        {
            name: 'login',
            path: '/login',
            component: require('./components/Login.vue'),
            meta: {auth: false}
        },
        {
            name: 'home',
            path: '/',
            component: require('./components/Book/List.vue'),
            meta: {auth: false}
        },
        {
            name: 'shelve',
            path: '/books',
            component: require('./components/Book/List.vue'),
            meta: {auth: true}
        },
        {
            name: 'request',
            path: '/books/request/new',
            component: require('./components/Book/NewRequest.vue'),
            meta: {auth: true}
        },
        {
            name: 'requestsList',
            path: '/books/request',
            component: require('./components/Book/Requests.vue'),
            meta: {auth: true}
        },
        {
            name: 'single-book',
            path: '/books/:id(\\d+)', //numbers only
            component: require('./components/Book/Item.vue'),
            meta: {auth: true}
        },
        {
            name: 'create-book',
            path: '/books/create',
            component: require('./components/Book/Create.vue'),
            meta: {auth: true}
        }

    ];

export default routes

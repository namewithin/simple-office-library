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
            exact: true,
            component: require('./components/Book/List.vue'),
            meta: {auth: false}
        },
        {
            name: 'shelve',
            path: '/books',
            component: require('./components/Book/List.vue'),
            meta: {auth: true}
        }

    ];

export default routes

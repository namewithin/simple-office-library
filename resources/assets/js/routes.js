const routes =
    [
        // {
        //     name: 'login',
        //     path: '/login',
        //     component: require('./components/pages/auth/Login.vue'),
        //     meta: {auth: false}
        // },
        {
            name: 'home',
            path: '/',
            component: require('./components/Example.vue'),
            meta: {auth: false}
        },

    ];

export default routes

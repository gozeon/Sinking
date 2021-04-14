export default {
    loading: {
        color: 'blue',
        height: '5px'
    },
    modules: [
        '@nuxtjs/axios'
    ],
    buildModules: ['@nuxtjs/tailwindcss'],
    serverMiddleware: [
        { path: '/api', handler: '~/api/index.js' },
    ],
    axios: {
        baseURL: 'http://localhost:3000/api/'
    }
}

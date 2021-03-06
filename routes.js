// server
const nextRoutes = require('next-routes')
const routes = nextRoutes()

routes.add({ name: null, pattern: '/post/:id', page: '/post' })
routes.add({ name: 'users', pattern: '/users/:id', page: '/users' })
routes.add({ name: 'albums', pattern: '/albums/:id', page: '/albums' })

module.exports = routes

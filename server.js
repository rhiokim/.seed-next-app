const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const next = require('next')
const helmet = require('helmet')
const compression = require('compression')
const { resolve } = require('path')
const admin = require('firebase-admin')

const { Cache } = require('./server/middlewares')
const routes = require('./routes')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const cache = Cache(app)
const handler = app.getRequestHandler()

const firebase = admin.initializeApp({
  credential: admin.credential.cert(require('./credentials/server')),
  databaseURL: 'https://gona-94092.firebaseio.com'
})

/* Route Handler with LRU Cache */
const routeHandler = routes.getRequestHandler(
  app,
  ({ req, res, route, query }) => {
    cache(req, res, route.page, query)
  }
)

app.prepare().then(() => {
  const server = express()

  /* secure */
  server.use(helmet())
  /* gzip */
  server.use(compression({ threshold: 0 }))

  /* */
  server.use(bodyParser.json())
  server.use(
    session({
      secret: 'planaria',
      saveUninitialized: true,
      store: new FileStore({ path: '/tmp/session', secret: 'planaria' }),
      resave: false,
      rolling: true,
      httpOnly: true,
      cookie: { maxAge: 604800000 }
    })
  )

  server.use((req, res, next) => {
    req.firebaseServer = firebase
    next()
  })

  /* Server API */
  // server.use('/api', someRoutes)

  server.post('/api/login', (req, res) => {
    if (!req.body) return res.sendStatus(400)

    const token = req.body.token
    firebase
      .auth()
      .verifyIdToken(token)
      .then(decodedToken => {
        req.session.decodedToken = decodedToken
        return decodedToken
      })
      .then(decodedToken => res.json({ status: true, decodedToken }))
      .catch(error => res.json({ error }))
  })

  server.post('/api/logout', (req, res) => {
    req.session.decodedToken = null
    res.json({ status: true })
  })

  /* Service Worker */
  server.get('/service-worker.js', (req, res) =>
    app.serveStatic(req, res, resolve('./.next/service-worker.js'))
  )

  server.get('*', (req, res) => handler(req, res))

  /* LRU Cache */
  /* Routes with LRU Cache */
  server.use(routeHandler)

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})

const withSass = require('@zeit/next-sass')
const withOffline = require('next-offline')
const Jarvis = require('webpack-jarvis')

module.exports = withSass(
  withOffline({
    webpack: config => {
      const { plugins } = config
      // Fixes npm packages that depend on `fs` module
      config.node = {
        fs: 'empty'
      }

      plugins.push(new Jarvis({ port: 1337 }))

      return config
    },
    exportPathMap: () => ({
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/elements': { page: '/elements' },
      '/example': { page: '/example' },
      '/posts': { page: '/posts' }
    })
  })
)

const withSass = require('@zeit/next-sass')
const withOffline = require('next-offline')
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')

module.exports = withSass(
  withBundleAnalyzer(
    withOffline({
      analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
      analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
      bundleAnalyzerConfig: {
        server: {
          analyzerMode: 'static',
          reportFilename: '../../.bundles/server.html'
        },
        browser: {
          analyzerMode: 'static',
          reportFilename: '../.bundles/client.html'
        }
      },
      webpack: config => {
        // Fixes npm packages that depend on `fs` module
        config.node = {
          fs: 'empty'
        }

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
)

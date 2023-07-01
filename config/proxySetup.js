const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports = function (app) {
  app.use(['/api/analytics-server'], createProxyMiddleware({
    target: 'http://localhost:3434/',
    changeOrigin: true,
    pathRewrite: {
      "/api/analytics-server": "/"
    }
  }))
	app.use(['/shopify', '/graphql', '/api', '/next', '/auth'], createProxyMiddleware({
		target: 'http://localhost:8080/',
		changeOrigin: true
	}))
  app.disable('x-powered-by')
}

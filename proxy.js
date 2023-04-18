const { createProxyMiddleware } = require('http-proxy-middleware');

const proxy = createProxyMiddleware({
    target: 'https://api.yelp.com',
    changeOrigin: true,
    headers: {
      Authorization: `Bearer ${process.env.YELP_API_KEY}`,
    },
    pathRewrite: {
      '^/v3/businesses/search': '/v3/businesses/search',
    },
  });
  
  module.exports = function(app) {
    app.use('/v3/businesses/search', proxy);
  };
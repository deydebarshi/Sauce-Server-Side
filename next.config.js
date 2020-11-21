const withImages = require('next-images')
module.exports = withImages({
  webpack: (config) => {
    config.node = {
      fs: 'empty'
    }
    return config
  },
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/home' : {page: '/home'},
      '/map' : {page:'/map'},
    }
  }
})

const path = require('path')

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      reducers: path.resolve(__dirname, 'src/reducers'),
      src: path.resolve(__dirname, 'src'),
    },
  }

  return config
}

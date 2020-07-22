const path = require('path')

module.exports = function (config) {
  const newConfig = config

  newConfig.module.rules = [
    ...config.module.rules,
    {
      enforce: 'pre',
      test: /\.(js|s?[ca]ss)$/,
      loader: 'import-glob',
    },
  ]
  newConfig.resolve = {
    ...config.resolve,
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      reducers: path.resolve(__dirname, 'src/reducers'),
      src: path.resolve(__dirname, 'src'),
    },
  }

  return newConfig
}

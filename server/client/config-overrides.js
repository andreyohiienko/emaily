const path = require('path')

module.exports = function (config) {
  const newConfig = config

  newConfig.module.rules.push({
    enforce: 'pre',
    test: /\.(js|s?[ca]ss)$/,
    loader: 'import-glob',
  })
  newConfig.resolve.alias['components'] = path.resolve(
    __dirname,
    'src/components',
  )
  newConfig.resolve.alias['reducers'] = path.resolve(__dirname, 'src/reducers')
  newConfig.resolve.alias['actions'] = path.resolve(__dirname, 'src/actions')
  newConfig.resolve.alias['src'] = path.resolve(__dirname, 'src')

  return newConfig
}

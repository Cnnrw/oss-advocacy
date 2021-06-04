const withPlugins = require('next-compose-plugins')
const images = require("next-images")

module.exports = withPlugins([
    [images],
  ], {
  future: {
    webpack5: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push(
      {
        test: /\.csv$/,
        loader: 'csv-loader',
        options: {
          dynamicTyping: true,
          header: true,
          skipEmptyLines: true
      }
    })

    return config
  }
});

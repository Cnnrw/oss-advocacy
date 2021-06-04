const withPlugins = require('next-compose-plugins')
const images = require("next-images")

const withMDX = require('@next/mdx')({
  extensions: /\.mdx?$/,
})

module.exports = withPlugins(
  [
    [withMDX],
    [images],
  ],
  {
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
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

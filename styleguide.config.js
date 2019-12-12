const path = require('path')
const webpackConfig = require('./webpack.config')

module.exports = {
  components: 'src/components/**/*.{js,jsx,ts,tsx}',
  webpackConfig,
  title: 'react-lamunanimation-buttons Components Library',
  styleguideDir: 'dist-docs',
  moduleAliases: {
    'react-lamunanimation-buttons': path.resolve(__dirname, 'src'),
  },
}

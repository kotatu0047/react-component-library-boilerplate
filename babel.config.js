const presets = [
  [
    '@babel/preset-env',
    {
      corejs: 2,
      loose: true,
      modules: false,
      targets: '>1%',
      useBuiltIns: 'usage',
    },
  ],
  '@babel/preset-react',
]
const plugins = [
  ['@babel/proposal-class-properties', { loose: true }],
  ['@babel/proposal-object-rest-spread', { loose: true }],
  ['@babel/plugin-transform-parameters', { loose: true }],
]

exports.presets = presets
exports.plugins = plugins

module.exports = function(api) {
  presets.push(['@babel/preset-typescript'])
  // api.cache(true)
  const isTest = api.env('test')
  if (isTest) plugins.push(['@babel/transform-modules-commonjs'])

  return {
    presets,
    plugins,
  }
}

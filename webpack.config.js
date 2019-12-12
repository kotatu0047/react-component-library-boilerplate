/**
 * @type {webpack.Configuration}
 */
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader?modules'],
      },
    ],
  },
  resolve: {
    extensions: ['js', 'jsx', '.ts', 'tsx'],
    modules: ['node_modules'],
  },
}

const path = require('path')

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'clappr-detach-plugin.js',
    library: 'ClapprDetachPlugin',
    libraryExport: 'default',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['css-loader'],
      },
      {
        test: /\.(html|svg)$/,
        loader: 'html-loader',
        options: {
          minimize: true,
        },
      },
    ],
  },
  resolve: {
    extensions: ['', '.js'],
  },
  optimization: {
    minimize: true,
  },
}

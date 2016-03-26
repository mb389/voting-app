const webpack = require('webpack')

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './client/src/index.jsx'
  ],
  module: {
   loaders: [{
     test: /\.jsx?$/,
     exclude: /node_modules/,
     loader: 'react-hot!babel'
   }, {
     test: /\.css$/,
     loader: 'style!css!autoprefixer?browsers=last 2 versions'
   }]
 },
resolve: {
  extensions: ['', '.js', '.jsx']
},
  output: {
    path: __dirname + '/client/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './client/dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

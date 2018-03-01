var webpack = require('webpack');
var version = require('./package.json').version;

module.exports = {
  entry: {
    'index': __dirname + '/src/index.js',
    'index.min': __dirname + '/src/index.js'
  },
  output: {
    path: __dirname + '/dist/',
    filename: '[name].js',
    libraryTarget: 'commonjs'
  },
  externals: {
    'three': 'three'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: [
              "transform-class-properties"
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      exclude: /^(?!.*?\.min\.).*$/,
      compress: {
        drop_console: false,
        warnings: false
      }
    }),
    new webpack.BannerPlugin([
      'The three.js expansion library v' + version,
      'Collected by Jusfoun Visualization Department',
      'Contact: ',
      '  vis@jusfoun.com',
      '  http://vis.jusfoun.com',
      '  http://jusfoun-vis.github.io',
      '',
      'Copyright (c) ' + new Date().getFullYear() + ', Jusfoun Big Data Group Inc.',
      'All rights reserved.',
      '',
      'LICENSE',
      'http://www.jusfoun.com/software/LICENSE.txt',
      '',
      'The three.js LICENSE',
      'http://threejs.org/license'
    ].join('\n'))
  ]
};

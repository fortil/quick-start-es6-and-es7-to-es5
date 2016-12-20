'use strict';

let webpack = require('webpack');

let vendorModules = /(node_modules|bower_components)/;

module.exports = {
  // target: 'web',
  watch: true,
  entry: {
    app: './main.js',
  },

  output: {
    path: './www/js/',
    filename: 'index.js',
  },

  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: vendorModules,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'es2017'],
          plugins: [
            'transform-runtime',
            'transform-es2015-destructuring',
            'transform-object-rest-spread',
            'transform-async-to-generator',
            'typecheck',
            'closure-elimination',
            "transform-object-assign",
          ]        
        },
      }
    ],
  },
  // Externals para johnny-five  
  /*externals: ['bindings'],*/
  //
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
};
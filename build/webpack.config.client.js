/*
* @Author: lvyufeng
* @Date:   2018/4/30
*
*/

const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const isDev = process.env.NODE_ENV === 'development'
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const baseConfig = require('./webpack.config.base')
const merge = require('webpack-merge')


let config

const defaultPlugins = [
    new HTMLPlugin({
      template:path.join(__dirname,'template.html')
    }),
    new VueLoaderPlugin()
]

const devServer = {
    port:'8000',
    host:'0.0.0.0',
    overlay:{
        errors:true,
    },
  historyApiFallback:{
      index: '/index.html'
  },
    hot: true
}

if(isDev){
    config = merge(baseConfig,{
        module:{
            rules:[
                {
                    test: /\.css$/,
                    use: [
                        'vue-style-loader',
                        'css-loader'
                    ]
                },
                {
                    test: /\.styl(us)?$/,
                    use: [
                        'vue-style-loader',
                        'css-loader',
                        'stylus-loader'
                    ]
                }
            ]
        },
        devServer,
        plugins:defaultPlugins.concat([

            new webpack.HotModuleReplacementPlugin(),
        ])
    })

}else{
    config = merge(baseConfig,{
        entry:{
            app:path.join(__dirname,'../client/index.js'),
        },
        output:{
            filename:'[name].[chunkhash:8].js'
        },
        module:{
            rules:[
                {
                    test: /\.css$/,
                    // use: [
                    //     MiniCssExtractPlugin.loader,
                    //     'css-loader',
                    //     'postcss-loader'
                    // ]
                  loader: ExtractTextPlugin.extract({
                    use: 'css-loader',
                    fallback: 'vue-style-loader'
                  })
                },
                {
                    test: /\.styl(us)?$/,
                    use:ExtractTextPlugin.extract({
                      use: [
                            'css-loader',
                            'stylus-loader'
                        ],
                      fallback: 'vue-style-loader'
                    })
                  // use: [
                    //     'vue-style-loader',
                    //     'css-loader',
                    //     'stylus-loader'
                    // ]
                },
            ]
        },
      optimization: {
        splitChunks: {
          chunks: "all"
        },
        runtimeChunk: true,
      },
        plugins:defaultPlugins.concat([
            // new MiniCssExtractPlugin({
            //     filename: 'styles.[contentHash:8].css',
            //     // chunkFilename: '[id].[hash].css'
            // }),
          new ExtractTextPlugin({filename: 'styles.[hash:8].css', allChunks: true}),
          // new webpack.LoaderOptionsPlugin({
          //   test:/\.vue$/,
          //   options: {
          //     vue: {
          //       loaders: {
          //         css: ExtractTextPlugin.extract({
          //           fallback:'vue-style-loader',
          //           use:'css-loader',
          //           publicPath:"../"
          //         }),
          //       }
          //     }
          //   }
          // })
        ]),



    })

}

module.exports = config



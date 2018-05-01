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
// const ExtractPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


const config = {
    target: "web",
    entry: path.join(__dirname,'src/index.js'),
    output: {
        filename: "bundle.js",
        path: path.join(__dirname,'dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"

            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.jsx$/,
                loader: "babel-loader",
            },


            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit:1024,
                            name:'[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        // new webpack.DefinePlugin({
        //     'process.env':{
        //         NODE_ENV: isDev ? '"development"': '"production"'
        //     }
        // }),
        new HTMLPlugin(),
        new VueLoaderPlugin()
    ],
    optimization: {
        splitChunks: {
            chunks: "all"
        },
        runtimeChunk: true,
    }
}

if(isDev){
    config.module.rules.push(
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
    )
    config.mode = 'development'
    config.devtool = '#cheap-module-eval-source-map'
    config.devServer = {
        port:'8000',
        host:'0.0.0.0',
        overlay:{
            errors:true,
        },
        hot: true
    }
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.NoEmitOnErrorsPlugin()
    )

}else{
    config.entry = {
        app:path.join(__dirname,'src/index.js'),
    }
    config.output.filename = '[name].[chunkhash:8].js'
    config.mode = 'production'
    config.module.rules.push(
        {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
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
    )
    config.plugins.push(
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
    )
}

module.exports = config



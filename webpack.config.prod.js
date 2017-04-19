const path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: ['./src'],
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx', '.scss'],
        alias: {
            'react-native': 'react-native-web'
        }
    },
    output: {
        publicPath: '/assets',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }, {
            test: /\.json$/,
            use: 'json-loader'
        }, {
            test: /\.s?css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            })
        }, {
            exclude: [
                /\.html$/,
                /\.(js|jsx)$/,
                /\.s?css$/,
                /\.json$/
            ],
            use: 'url-loader?name=[name].[ext]&limit=10000'
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            VERSION: JSON.stringify(require('./package.json').version),
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new LodashModuleReplacementPlugin,
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin({
            filename: 'bundle.css',
            allChunks: true,
            disable: false
        })
    ],
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
};

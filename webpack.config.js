var webpack = require("webpack");
const path = require('path');

module.exports = {
    entry : "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist/assets'),
        filename: "bundle.js",
        publicPath: "assets"
    },
    devServer: {
        inline: true,
        contentBase: "./dist",
        port: 3000
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            loaders: ["babel-loader", 'babel-loader?presets[]=es2015,presets[]=stage-0,presets[]=react']
        },
        {
            test: /\.json$/,
            exclude: /(node_modules)/,
            loaders: "json-loader"
        },
        {
            test: /\.css$/,
            loaders: "style-loader!css-loader!autoprefixer-loader"
        },
        {
            test: /\.scss$/,
            loaders: "style-loader!css-loader!autoprefixer-loader!sass-loader"
        },
        {   test: /\.png$/,
            loader: "url-loader?mimetype=image/png" 
        }]
    }
}
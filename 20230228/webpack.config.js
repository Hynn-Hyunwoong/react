const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    name : "HynnPack",
    mode : 'development', // Normally Development or Production
    resolve : {
        extensions : ["js", "jsx"],
    },
    entry : './src/index.jsx',
    plugins : [
        new HtmlWebpackPlugin({
            template :'index.html', // Original
            filename : 'index.html', // Will Bundling file
        }),
    ],
    module :{
      rules : [{
        test:/\.jsx?/,
        loader : 'babel-loader',
        options : {
            presets : ['@babel/preset-env','@babel/preset-react'],
            plugins : [],
        },
      }],  
    },
    output : {
        filename : 'bundle.js',
        path: path.join(__dirname, "dist"),
    },
    devServer : {
        static : {
            directory: path.join(__dirname,'dist'),
        },
        compress : true,
        port : 3000,
        hot : true,
        historyApiFallback : true,
    },
}
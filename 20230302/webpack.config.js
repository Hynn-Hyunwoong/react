const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    name : "react-project",
    mode : "development",
    resolve : {
        extensions : [".js", ".jsx"]
    },
    entry : './example/src/index.jsx',
    module : {
        rules : [
            {
                test : /\.jsx?/,
                loader : "babel-loader",
                options : {
                    presets: ["@babel/preset-env","@babel/preset-react"],
                }
            }
        ],
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : "./example/src/index.html",
            filename : "index.html",
        }),
    ],
    output : {
        filename : 'bundle.js',
        path: path.join(__dirname, 'dist')       
    },
    devServer : {
        static : {
            directory : path.join(__dirname, 'dist')
        },
        compress : true,
        port : 3000,
        hot : true,
        historyApiFallback : true
    }
}
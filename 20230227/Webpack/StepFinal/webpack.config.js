const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    plugins : [
        new HtmlWebpackPlugin({
            template : 'src/index.html',
            filename : 'Hynn.html'
        })
    ],
    loader : {

    },
    output: {
        filename: 'Hynn.js',
        path: path.join(__dirname, 'dist'),
    },
}
const path = require('path')

module.exports = {
    entry : './src/index.js',
    output : {
        filename : 'Hynn.js',
        path : path.join(__dirname, "dist")
    },
}
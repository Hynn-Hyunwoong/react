const path = require('path')

module.exports = {
    enryt: './src/index.js',
    output : {
        filename : 'bundle.js',
        path : path.join(__dirname,'dist'),
    },
}
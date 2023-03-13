const {combineReducers} = require('redux')
const {counterReducer} = require('./counter')
const {userReducer} = require('./user')

const rootReducer = combineReducers({
    counter : counterReducer,
    user : userReducer,
})

module.exports = { rootReducer }
const {createStore, applyMiddleware} = require('redux')
// import {createStore} from 'redux'
const {rootReducer} = require('../reducers')
const {add} = require("../reducers/user")

const createThunkMiddleware = () => {
    return (store) => (next) => (action) => {
        console.log("Hello")
        return next(action)
    }
}

const store = createStore(rootReducer, applyMiddleware(createThunkMiddleware()))
const api = () =>{
    // axios
    store.dispatch({type:"increment"})
}

store.dispatch(api)

console.log(store.getState())

// console.log(store, 'storeTest')
// // dispatch, getState
// console.log(store.getState(), "getStateTest")

// store.dispatch({type : 'increment'}) // 1
// store.dispatch({type : 'decrement'}) // 0 
// store.dispatch({type : 'increment'}) // 1
// store.dispatch({type : 'increment'}) // 1
// store.dispatch({type : 'decrement'}) // 0
// store.dispatch({type : 'increment'}) // 1
// store.dispatch({type : 'increment'}) // 2
// store.dispatch({type : 'decrement'}) // 1
// store.dispatch({type : 'decrement'}) // 0
// store.dispatch({type : 'decrement'}) // -1
// store.dispatch({type : 'increment'}) // 0
// store.dispatch({type : 'increment'}) // 1
// store.dispatch({type : 'increment'}) // 2
// // store.dispatch({type : ADD, payload : {userid : "Hynn", username : "Hyun"}})
// store.dispatch(add("Hynn", "Hyun"))
// console.log(store.getState(), "getStateTest")
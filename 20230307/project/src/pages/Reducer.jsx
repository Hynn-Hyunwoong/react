import {useReducer } from 'react'

const reducer = () => {
    console.log("Hi Reducer")
}

export const CounterReducer = () => {
    const initialState = { count : 0}
    const [state, dispatch] = useReducer(()=>{}, initialState)

    const increment = () => {
        dispatch()
    }

    return (
        <>
            <h2>Count : {state.count}</h2>
            <button onClick={increment}>+</button>
            <button>-</button>
        </>
    )
}


import {useState, useCallback, memo} from 'react'

export const ParentComponent = () => {
    const [count, setCount] = useState(0)
    const [value,setValue] = useState(0)
    
    const increment = useCallback(() => {
        setCount(count +1)
    }, [count])
    return (
        <>
            <h2>Count : {count}</h2>
            <ChildComponent increment={increment}/>

            <button onClick={()=> setValue(value+1)}>Value</button>
        </>
    )
}

const ChildComponent = memo (({increment}) => {
    console.log("Child")
    return (
        <button onClick={increment}>+</button>
    )
})
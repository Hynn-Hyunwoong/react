import {useState, createContext, useContext} from 'react'

const Global = createContext()

const D = () => {
    const obj = useContext(Global)
    return (<>
            Hello Context : {obj.user}
            <button onClick={()=>obj.setUser('')}>Change</button>
            </>)
}
const C = () => {
    return <D />
}
const B = () => {
    return <C />
}
const A = () => {
    return <B />
}


export const Context = () => {
    const [user, setUser] = useState("Hynn")
    const initialState = {user, setUser}

    return (
        <Global.Provider value={initialState}>
            <A />
        </Global.Provider>
    )
}

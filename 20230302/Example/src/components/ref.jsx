import React, {useRef, useEffect} from "react"

const Ref = () => {
    const input = useRef(null)
    console.log('Ref : ',input.current)


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submit : ",input.current)
    }
    useEffect(()=>{
        console.log("Input ,LifeCycle: ", input.current, )
    }, [])
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" id="username" ref={input} />
                <button>Focus</button>
            </form>
        </>
    )
}

const input = React.createElement('input', {
    name : 'username',
    id : 'username',
    ref : "refes"
}, null)

export default Ref
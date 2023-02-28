import React, { useState, useEffect } from "react"
import axios from "axios"

const Dog = () => {
    const [dog, setDog] = useState('')
    const getDogImage = async() => {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random')
        console.log(response.data)
        setDog(response.data.message)
    }
    useEffect(() =>{
        getDogImage()
    },[])
    return (
        <div>
            {dog.length === 0 ? "Loading..." : <img src={dog}/>}
            <button>Refresh</button>
        </div>
    )
}

export default Dog

// 
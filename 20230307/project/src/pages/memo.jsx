import { useState } from 'react'

export const Memo = () => {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    const oaddNumbers = numbers.filter((v) => v % 2 !== 0)
    const handleClick = () => {
        setNumbers([...numbers, numbers.length + 1])
    }

    return (
        <div>
            <p>Number : {numbers.join(', ')}</p>
            <p>Number : {oaddNumbers.join(', ')}</p>
            <button onClick={handleClick}> Add Resource</button>
        </div>
    )
}

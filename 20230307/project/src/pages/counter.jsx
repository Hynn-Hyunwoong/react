import { useState, useCallback, useMemo } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState(0)

  const increment = useCallback(() => {
    setCount(count + 1)
  }, [count])
  const decrement = useCallback(() => {
    setCount(count - 1)
  }, [count])

  const view = useCallback(() => {
    console.log('test-useCallback')
    return count
  }, [count])

  const getDate = () => {
    const today = new Date()

    const year = today.getFullYear()
    const month = today.getMonth()
    const day = today.getDate()
    const hour = today.getHours()
    const minute = today.getMinutes()
    const second = today.getSeconds()

    return `${year}-${month}-${day} ${hour}:${minute}:${second}`
  }

  const today = useMemo(() => {
    return getDate()
  }, [])

  return (
    <>
      <h2>{view()}</h2>
      <h3>{today}</h3>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <h2>{value}</h2>
      <button onClick={() => setValue(value + 1)}>+</button>
    </>
  )
}

export default Counter
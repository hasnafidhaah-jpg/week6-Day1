import { useState, useEffect } from 'react'

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString())
  const [count, setCount] = useState(0)

  
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)

    return () => clearInterval(timer)
  }, [])


  



  useEffect(() => {
    document.title = `Time: ${time} | Count: ${count}`
  }, [count, time])

  return (
    <div>
      <h1>Clock: {time}</h1>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}

export default App
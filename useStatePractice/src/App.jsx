import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counte, setCounte] = useState(5)
  // let counte = 5
  const addValue = () => {

    console.log("Value added", counte);
    setCounte(counte + 1)
  }
  const removeValue = () => {
    setCounte(counte - 1)
  }

  return (
    <>
      <h1>Add count and delete count practice</h1>
      <h2>Counte value is {counte} </h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chai from './Chai'

function App() {
  let [count, setCount] = useState(0);

  // let counter = 15

  const addValue = () => {
   
    if(count<=19){
      count = count +1;
      setCount(count)
      console.log("Clicked",count);
    }
  }

  const decValue = () => {
    if(count>0){
      count = count-1;
      setCount(count);
      console.log("Clicked",count);
    }
  }

  return (
    <>
      <h1>Counter App</h1>
      <Chai />
      <h3>Counter value : {count}</h3>

      <div>
        <button onClick={addValue}>Increment</button>
        <button onClick={decValue}>Decrement</button>
      </div>
    </>
  )
}

export default App

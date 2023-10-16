import { useState } from 'react'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
      
//     </>
//   )
// }

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 20) {
      setCount(count + 1);
    } else {
      alert('Counter cannot go above 20.');
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert('Counter cannot go below 0.');
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <>
    <div className='box'>
      <h2>Counter: {count}</h2>
      <button className='btn' onClick={increment}>Increment</button>
      <button className='btn' onClick={decrement}>Decrement</button>
      <button className='btn' id='reset' onClick={reset}>Reset</button>
      </div>
    </>
  );
}

export default Counter

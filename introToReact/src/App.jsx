// typical imports starting with prefix 'use' indicate react hooks
import { useState, useEffect, use } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// exmple react card component
const Card = ({title}) => {
  // const [variable, setVariable] = useState(initialState);
  // as each card is independent component, it can have its own state
  // thats why the state is defined inside the Card component
  const [hasLiked, setHasLiked] = useState(false);
  const [count, setCount] = useState(0);

  // useEffect hook to perform side effects in function components
  // it is executed 2 times
  useEffect(() => {
    console.log(`You have ${hasLiked ? 'liked' : 'not liked'} ${title}`);
  }, [hasLiked]); // dependency array, 'effect' runs when hasLiked changes
  
  return(
    // don't update the value of state using the state variable directly instead use another
    // callback function to update the state
    // for example: onClick={() => setCount((prevState) => prevState + 1)}
  <div className='card' onClick={() => setCount(count + 1)}>
     {/* {count || null} is conditional rendering, if count is 0 it will render null instead of 0 */}
    <h2>{title} - {count || null}</h2>
    <button onClick={() => setHasLiked(!hasLiked)}>
      {hasLiked ? 'liked !' : 'Like'}
    </button>
  </div>
  )
}

const App = () => {
  return (
  <div className='card-container'>
    {/* <h1>Hello React!</h1> */}
    {/* Here title is passed as props to Card component */}
    <Card title="Avatar"/>
    <Card title="Jumanji"/>
    <Card title="Jim Carrey"/>
  </div>
  )
}

export default App

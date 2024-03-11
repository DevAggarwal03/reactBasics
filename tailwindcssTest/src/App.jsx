import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=' flex justify-center align-middle size-100'>
        <h2 className='bg-green-400 text-black text-4xl size-max'>Hello there I am dev</h2>
      </div>
    </>
  )
}

export default App

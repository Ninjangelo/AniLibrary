import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-center items-center text-3xl p-10 font-bold text-blue-600 underline'>
        Hello Rafino Islam
      </div>
      <p className='flex justify-center text-red-600 text-2xl'>sample text... testing? testing?</p>
    </>
  )
}

export default App

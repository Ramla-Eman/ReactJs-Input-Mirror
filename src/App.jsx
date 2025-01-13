import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('')

  return (
    <>
      <div className='bg-orange-300 p-6 rounded-lg text-orange-700'>
        <h1 className='lg:text-[4rem] text-[1.5rem]'>Hello Mirror Input</h1>
        <input type="text" placeholder='Write Something' value={inputValue} onChange={(e) => setInputValue(e.target.value)} className='py-1 text-[1.3rem] px-3 rounded-md'/>
        <p className='text-[1.6rem] '>Your Text Is: <span className='text-[1.4rem] text-orange-600'>{inputValue}</span></p>
      </div>
    </>
  )
}

export default App

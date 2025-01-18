import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="h-screen w-screen bg-slate-400">
       <div className="flex flex-col items-center justify-center h-full">
         <img className="h-24 w-24" src={reactLogo} alt="React logo" />
         <h1 className="text-4xl font-bold text-white">React + Vite</h1>
         <p className="text-lg text-white">A modern frontend development tool.</p>
         <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={() => setCount(count + 1)}>
           Click me {count} times
         </button>
       </div>
     </div>
    </>
  )
}

export default App

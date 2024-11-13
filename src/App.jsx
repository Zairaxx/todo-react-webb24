import { useEffect, useState } from 'react'
import SmallComponent from './components/SmallComponent';
import './App.css'

function App() {
  let [show,setShow] = useState(false);


  useEffect(() => {
    console.log("När applikationen startas")
}, [])



  return (
    <>
    {show && <SmallComponent/>}
    <h1>Component Lifecycle - useEffect</h1>
    <button onClick={() => setShow(!show)}>Toggle</button>
    </>
  )
}

export default App

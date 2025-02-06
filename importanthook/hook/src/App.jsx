import { useEffect, useState } from 'react'



function App() {
  const [count, setCount] = useState('')
  const apiKey = "e1475860a3add91b1eedd6d4f89a6f23"
  useEffect(()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`)
    .then(res=>res.json())
    .then(data=>setCount(JSON.stringify(data)))
    .catch(err=>console.error(err))
  },[])

  return (
    <>
    <h1 className="w-96 h-48 overflow-auto border border-black p-2">this is the weather data:  {JSON.stringify(count, null, 2)}</h1>
    <button onClick={()=>setCount(count)}update></button>

      
      
    </>
  )
}

export default App

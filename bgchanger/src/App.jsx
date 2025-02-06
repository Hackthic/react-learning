import { useState } from 'react'


function App() {
  const [color, setColor] = useState('blue')
  

  return (
    <div className='w-full h-screen ' style={{backgroundColor: color}}>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
      <button onClick={()=>{setColor("red")}} className=" rounded-xl" style={{backgroundColor:"red"}}>Red</button>
      <button onClick={()=>{setColor("white")}} className=" rounded-xl" style={{backgroundColor:"white"}}>white</button>
      <button onClick={()=>{setColor("yellow")}} className=" rounded-xl" style={{backgroundColor:"yellow"}}>yellow</button>
      <button onClick={()=>{setColor("green")}} className=" rounded-xl" style={{backgroundColor:"green"}}>green</button>

      </div>
    </div>
  )
}

export default App

import { useState } from 'react'



function App() {
  const [counter, setCounter] = useState(15)
   
  const addvalue=()=>{
    
   if(counter<20){
    setCounter(counter+1);
   }
  }

  const removevalue=()=>{
    if(counter>0){
      setCounter(counter-1);
    }
 
  }
  
  return (
    <>
      <h1>hello hakcthic</h1>
      <h1>counter value:{counter}</h1>
      <button
      onClick={addvalue}>Add value</button>
      <br/>
      <button
      onClick={removevalue}>remove value</button>
    
    </>
  )
}

export default App

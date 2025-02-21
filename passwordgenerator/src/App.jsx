import { useCallback, useState } from 'react'


function App() {
  const [length, setlength] = useState(8);
  const [NumberAllowed, setNumberAllowed] = useState(false);
  const [CharAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("");
  const passwordGenerator = useCallback(()=>{
let pass=""
let string = " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
if(NumberAllowed) string+="0123456789";
if(CharAllowed) string += "@#$%^&*(){}[]";
for (let i = 0; i < length; i++) {
  let char = Math.floor(Math.random() * string.length)
  pass += string.charAt(char);
  
}
setPassword(pass);

  }, [length, NumberAllowed, CharAllowed, setPassword])

  return (
    <>
     <div className='w-full max-w-md shadow-md rounded-lg px-4 my-8 text-white bg-gray-800 my-8 '>
      Password Generator
       <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" 
        value={Password}
        className='outline-none w-full py-1 px-3 text-orange-500 bg-white'
        placeholder='password'
        readOnly
        />
        <button className='bg-sky-500 hover:bg-sky-700 px-2 my-2 py-2 shrink-0' >copy</button>
       </div>
       <div flex text-sm gap-x-2>
        <div className='flex items-center gap-x-1 '>
          <input type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer text-orange-500'
          onChange={(e)=>{setlength(e.target.value)}}
          />
          <label >length:{length}</label>

        </div>
       </div>
     </div>
      
    </>
  )
}

export default App

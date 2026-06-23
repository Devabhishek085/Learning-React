import React, { useState } from 'react'

const App = () => {
  let [num, setnum] = useState(0)
  return (
    <div>
      <h1>{num}</h1>
     
      <button onClick={()=>{
        setnum(num+1);
      }} className='btn1'>Increase</button>

      <button onClick={()=>{
        setnum(num-1)
      }} className='btn2'>Decrease</button>
    </div>
  )
}

export default App
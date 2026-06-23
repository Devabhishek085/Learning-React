import React, { useState } from 'react'

const App = () => {
  const [arr, setarr] = useState([10,20,30,40])

  const Click=()=>{
    // let newobj={...obj}
    // newobj.user="Sarthak Sharma"
    // setobj(newobj)
    let newarr=[...arr];
    newarr.push(99);
    setarr(newarr);
  }

  return (
    <div>
      <h1>{arr}</h1>
      <button onClick={Click}>Click</button>
    </div>
  )
}

export default App
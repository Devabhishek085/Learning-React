import React from 'react'

const App = () => {
  return (
    <div onWheel={(e)=>{
      // console.log(e.deltaY);
      if(e.deltaY>0){
        console.log("Scrolling Downwards");
      }else{
        console.log("Scrolling Upwards");
      }  
    }}>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>

    </div>
  )
}

export default App
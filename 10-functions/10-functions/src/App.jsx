import React from 'react'

const App = () => {
  return (
    <div onWheel={(e)=>{
      // console.log(e.deltaY);
      if(e.deltaY>0){
        console.log("Upar Scroll Kiya Gaya haii");
      }else{
        console.log("Gande Ho Tum");
      }  
    }}>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>

    </div>
  )
}

export default App
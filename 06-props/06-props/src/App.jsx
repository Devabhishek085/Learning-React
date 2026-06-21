import React from 'react'
import Card from './components/Card'


const App = () => {
  return (
    <div className='parent'>
     
    <Card user="Abhishek" age={22} image="https://images.unsplash.com/photo-1781694949169-8dad95b59995?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

     <Card user="Aman" age={21} image="https://plus.unsplash.com/premium_photo-1738976630382-6935c27d2146?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

   </div>
  )
}

export default App
import React from 'react'

const Card = (props) => {
    console.log(props.user,props.age,props.image);
    
  return (
     <div className='card'>
        <img src={props.image} alt="" />
        <h1>{props.user} , {props.age}</h1>
  
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, eos.</p>
    <button>Viw Profile</button>
    
    </div>
  )
}

export default Card
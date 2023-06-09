import React from 'react'

export default function Card(props) {
  return (
    <div className='cards'>
        <p>{props.id}</p>
        <p>{props.name}</p>
        <p>{props.io}</p>
        <p>{props.ui}</p>
        <p>{props.data}</p>
        <p>{props.ltp}</p>
        
        <button className='but-card'>B</button>
        <button className='but-card'>S</button>
        
      
    </div>
  )
}

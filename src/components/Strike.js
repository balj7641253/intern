import React from 'react'
import Data from './Data'


export default function Strike(props) {
  return (
    <div className='hau'>
        <br></br>
        <div className='con-head-str'>
            <p>Strike</p>
        
            
        </div>
        <div className='cards-in' >
        {Data.map((item) => (
            <p className='cards-in'>19500</p>
      ))}
        </div>
      
    </div>
  )
}

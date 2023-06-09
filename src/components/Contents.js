import React from 'react'
import Data from './Data'
import Card from './Card'

export default function Contents(props) {
  return (
    <div className='hau'>
        <h1>{props.title}</h1>
        <div className='con-head'>
            <p>OI Buildup</p>
            <p>IV</p>
            <p>OI</p>
            <p>Volume</p>
            <p>Chng%</p>
            <p>LTP</p>
            
        </div>
        <div className='scroll' >
        {Data.map((item) => (
            <Card id={item.oibuild} name={item.iv} oi={item.oi} ui={item.volume} data={item.chng} ltp={item.ltp} />
      ))}
        </div>
      
    </div>
  )
}

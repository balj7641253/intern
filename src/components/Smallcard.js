import React from 'react'

export default function Smallcard(props) {
    return (
        <div className='con-sc'>
            <h4 className='h4-sc'>
                {props.title}
            </h4>
            <div className='inner-p-sc'>
                <p className='p-sc-price'>
                    {props.price}
                </p>
                <br></br>
                <br></br>
                <p className='p-sc-change'>
                    {props.change}
                </p>

            </div>


        </div>
    )
}

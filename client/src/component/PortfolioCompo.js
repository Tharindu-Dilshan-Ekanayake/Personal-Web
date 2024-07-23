import React from 'react'

import DP from '../images/ME.png'

export default function PortfolioCompo() {
  return (
    <div >

        <div className='flex items-center justify-center border'>
            <div className='w-2/3'>
                    <h1>hi</h1>
            </div>
            <div className='w-1/3'>
                <img src={DP} alt='dp'></img>
            </div>
        </div>
      
    </div>
  )
}

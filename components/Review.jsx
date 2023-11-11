import React from 'react'
import { Rating } from './Rating'

export const Review = () => {
  return (
    <div className='m-auto  max-w-[1400px]'>
        
       <div className='mt-5'>
       <hr  />
        <h1 className='text-xl mt-4 max-w-[600px] font-bold'>Looking for specific info?</h1>
        <input type="text" placeholder='Search in review Q/A'  />
       </div>
       <Rating/>
    </div>
  )
}

import React from 'react'
import pictrn from '../../assets/pic13.webp';


export const Fire = () => {
  return (
    <>
    
    <div className='mt-10 sm:-mt-28 max-w-[1100px] mx-auto sm:flex sm:gap-10 border-2 border-[#513121] rounded-xl border-b-8 overflow-hidden'> 
    {/* Image Box */}
      <div className='border-r-2 border-[#512131] '>
        <img src={pictrn} className=' sm:h-[33rem] '/>
      </div>
      {/* Content Box */}
      <div className='text-[#513121] pt-16  px-4 sm:pt-24 leading-7 pl-10'>
        <h3 className='text-3xl  sm:text-5xl'>Rip - Pour - Fire it</h3>
        <h3 className='text-3xl sm:text-5xl sm:pt-2'>up 🌶</h3>
        <div className='text-left'>
        <p className='pt-4 '>Our meal starters are pantry shortcuts for a specific</p>
        <p>Asian dish. They combine all the sauces, aromatics,</p>
        <p>and seasonings you need.</p>
        </div>
        <button className='border  bg-[#910f37] text-white rounded-3xl px-6 py-3 sm:mt-9 mt-4 mb-10'>Shop Starters</button>
      </div>
    </div>
    </>
  )
}

import React from 'react'

function NewsLetter() {
  return (
    
      <div className='w-full md:w-1/2 mx-auto flex flex-col items-centre p-10  '>
<h3 className='text-secondary font-semibold text-center text-4xl'>Sign up for my weekly newsletter</h3>
<p className='mt-6 text-gray-600 text-lg text-center leading-normal font-light'>Weekly emails with my latest recipes, cooking tips and tricks and product recommendations! <br /> You`ll be set up in minutes</p>

<div className='mt-6 flex items-center '>
    <input type="text" className='flex  flex-grow px-4 py-4 rounded text-gray-400  outline-none placeholder:text-[#1b2629]'
    placeholder='name'
    /> 
    <br />
    <input type="text" className='flex ml-24 flex-grow px-4 py-4 rounded text-gray-400 outline-none placeholder:text-[#1b2629]'
    placeholder='Email Address'
    /> 
    <br />
    <button className=' bg-btncolor hover:text-secondary outline-none ml-24 hover:border hover:border-btncolor hover:bg-[#f9f7f3] text-white shadow-lg rounded px-8 w-52 '>
        Get Started
    </button>
</div>
      </div>
    
  )
}

export default NewsLetter

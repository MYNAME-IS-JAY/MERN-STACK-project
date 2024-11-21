import React from 'react'
import AboutImg    from '../../assets/about-image.jpg'
import { Link } from 'react-router-dom'

function Aboutsection() {
  return (
    <div className='flex'>
        <div className='text-start sm:w-1/2'>
        <h2 className='text-3xl font-semibold  text-semibold text-secondary sm:text-5xl sm:leading-relaxed'>Vegan foodie who loves to experiment with recipes</h2>
        <p className='text-xl mt-4 text-[#5c5c5c]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, accusantium. Reprehenderit quos perferendis neque molestiae aliquam .</p>
        <div className='lg:mt-10 lg:flex-shrink-0'>
            <div className='mt-12 inline-flex'>
         <Link to="/categories/entrees" className='py-4 px-8 hover:bg-btncolor text-secondary hover:text-white transition-transform eas-in doration-200 text-center text-base font-semibold border border-[#9c702a] focus:outline-none rounded-lg'>View recipe</Link>
            </div>
            
        </div>

        </div>
        <div className='ml-12 '>
            <img src={AboutImg} alt="Featured Image" className='rounded-md h-[600px]' />
        </div>
      
    </div>
  )
}

export default Aboutsection

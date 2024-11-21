import React from 'react'
import FeaturedImg from "../../assets/featured.webp"

const FeaturedSection = () => {
  return (
    <div className='overflow-hidden flex md:flex-row flex-col justify-between items-center sm:my-20 my-4 md:gap-20 gap-12 px-5 lg:px-10'>
            <div className='relative'>
              <div className='top-4 left-5 text-black bg-white border border-black absolute px-3 py-1 mt-24 rounded-md uppercase tracking-wider mb-[300px]`'>Featured Recipe</div>
                <img src={FeaturedImg} alt="Featured image" className='rounded-md object-cover h-[450px]  mt-24'/>
            </div>

            <div>
              <p className='text-3xl font-semibold ml-24'> Pineapple + Smoked </p>
              <p className='text-3xl font-semibold ml-24'>Jackfruit Pizza</p>
          <br />
              <p className='text-xl ml-24'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nemo culpa optio enim </p>
            <button className='border  text-black bg-white border-solid ml-24 m-4 p-4 rounded-full'>
              View Recipe
            </button>
              
            </div>
    </div>
  )
}

export default FeaturedSection

import React from 'react'

function CompanyLogo() {
  return (
    <div className=' py-24 sm:py-32'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <h2 className='text-center text-lg font-semibold leading-8 text-gray-900'>
                Trusted by the world's most innovative teams
            </h2>
            <div className='mx-auto mt-10 grid max-w-lg grid-clos-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5'>
                <img src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg"
                className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
                
                alt="" />
               <img src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg"
                className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
                
                alt="" />
                  <img src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg"
                className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
                
                alt="" />
                  <img src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg"
                className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
                
                alt="" />
                 <img src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg"
                className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
                
                alt="" />
                
            </div>

        </div>
      
    </div>
  )
}

export default CompanyLogo

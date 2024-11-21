import React from 'react'
import { Link } from 'react-router-dom';
function Subscription() {
  return (
    <div className='bg-white py-16 rounded-t-md'>
      <div className='w-92 mx-auto px-6 mb-20 lg:px-8'>
        <div className='grid grid-cols-2'>
           <div>
           <h3 className='text-3xl font-bold tracking-tighter text-secondary sm:text-4xl'>Subscribe to our newsletter</h3>
            <p className=' text-lg leading-5'>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis soluta nemo at obcaecati nisi iusto culpa repellat quisquam in quo assumenda laudantium facere impedit nesciunt 
            </p>
           </div>
        
       
        <div className='flex items-center'>
   
        <input type="text"
        id='email-hidden'
        name='email'
        autoComplete='email'
        required
        className='border border-solid p-5 flex-1 rounded-md'
        placeholder='Enter your email address'
        />
        <button className='bg-text-slate-400 border border-solid rounded p-4 ml-2 bg-orange-50 hover:bg-white '>Subscribe</button>
        </div>

        <div className='mt-10'>
          <Link to ="/" className='px-4 py-2 bg-orange-900 rounded-full text-white'>
            Sign Out
          </Link>
        </div>
        </div>
        <div className='w-full border my-5'></div>
        <div className='mt-3 grid grid-cols-2'>
          <div>
            <h2 className='font-bold text-xl'>The Grand</h2>
            <p className='text-gray-600'>&copy; since 2005</p>
          </div>
          <div>
            <nav>
              <h3 className='font-bold text-xl'>Navigate</h3>
              <ul className='flex flex-col justify-between items-start'>
                <li className='mr-4 hover:underline font-thin'><Link to='/home'>Home</Link></li>
                <li className='mr-4 hover:underline font-thin'><Link to='/categories/entrees'>Recipes</Link></li>
                <li className='mr-4 hover:underline font-thin'><Link to='/'>Log out</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscription

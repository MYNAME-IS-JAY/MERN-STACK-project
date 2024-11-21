import React from 'react'
import { Link } from 'react-router-dom'

const DesktopNav = ({menuItems, Logo}) => {
  return (
    <div className='h-16 flex justify-between items-center px-6 lg:px-12'>
             <a href="/">
                 <img src={Logo} alt="logo" className='w-[80px] p-2 ' />
              </a>
              <ul className='flex gap-7'>
                {
                  menuItems?.map((menu,index) => (  
                    <li key={index}>
                      <Link to={menu} className='font-medium capitalize text-secondary'>{menu}</Link>
                    </li>
                  ) )
                }
              </ul>
              
             {/* login and signup btn */}

             <ul className="flex items-center gap-4 font-medium">
             <li>
                  <Link to="/" className="text-secondary px-4 py-2 rounded" >Log In</Link>
              </li>
              {/* <li>
                  <Link className="text-secondary px-4 py-2 rounded">Sign up</Link>
              </li>     */}
             
             </ul>
        </div>
  ) 
}

export default DesktopNav

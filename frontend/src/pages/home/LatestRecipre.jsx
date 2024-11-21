import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Card from '../category/Card';
import { Link } from 'react-router-dom';


function LatestRecipre() {

    const [items,setItems]= useState([]);
    useEffect(()=>{
        async function getLatestItems(){
            const response = await axios.get('http://localhost:5000/api/all-items');
            setItems(response.data);
            console.log(response.data);
            
        }
        getLatestItems();
    },[])

  return (
    <div className='px-5 xl:px-10 py-16'>
      <h2 className='text-3xl mb-8 font-semibold text-secondary'>Latest recipes</h2>
      <ul className='flex gap-20 h-[400px]'>
        {items.length >0? items.slice(0,4).map((item,index)=>(
            <Card key={item._id} item={item} />
        )):(<p className='text-3xl '>Loading ..</p>)}
    
      </ul>
      <div className='sm:w-64 mx-auto mt-16'>
        <Link to='/categories/entrees'>
       <button className='text-black border border-solid p-4 rounded hover:bg-orange-300 '>View All recipes</button>
       </Link>
      </div>
    </div>
    
)
}

export default LatestRecipre

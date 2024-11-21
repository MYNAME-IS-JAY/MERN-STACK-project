import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleProduct = () => {
    const item = useLoaderData();
    console.log(item)

    const extractNumber = (timeString) => {
        if(!timeString) return 25;
        let timeArray = timeString.split(" ")
        return parseInt(timeArray[0])
    }

    let prepTimeMinutes= extractNumber(item?.more[0].prep_time)
    let cookTimeMinutes= extractNumber(item?.more[0].cook_time)
  return (
    <section className='min-h-dvh md:flex justify-center items-center md:bg-eggshell'>
         <article>
               <div className='bg-white md:my-[5rem] md:py-8 pb-8 md:rounded-xl'>
                   <picture className='max-w-1/2'>
                    <img src ={item.thumbnail_image} alt="" className='md:max-w-[100%] w-full md:rounded-xl p-10'/>             
                    </picture>

                    <div className='px-8'>
                        <h1 className='text-4xl mt-12 text-secondary'>{item.name}</h1>
                        <p className='mt-6'>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs coocked to perfection, optionally filled with your choice of cheese, vegetables, or meats.
                        </p>

                        <article className='bg-rose-50 mt-6 p-5 rounded-xl'>
                            <h2 className='text-xl font-semibold ml-2'>Preparation time</h2>
                            <ul className='list-disc mt-3 ml-8 text-lg marker:text-orange-500'>
                                <li className='pl-3 mt-3'>
                                    <p>
                                        <span>Total:</span> <span>{prepTimeMinutes + cookTimeMinutes} minutes</span>
                                    </p>
                                </li>
                                    <li className='pl-3 mt'>
                                    <p>
                                        <span>Preparation:</span> <span>{prepTimeMinutes} Minutes</span>
                                    </p>
                                </li>
                                    <li className='pl-3 mt'>
                                    <p>
                                        <span>Cooking:</span> <span>{cookTimeMinutes} Minutes</span>
                                    </p>
                                </li>
                            </ul>
                        </article>
                    </div>
                    <div className='mt-5 px-10'>
                    <h2 className='text-xl font-semibold ml-2'>Ingriedients</h2>
                        <ul className='list-disc marker:text-bleu-500 mt-4 ml-6 text-secondary marker:align-middle'>
                            {
                                item.ingredients.map(item => {
                                    return <li key={item.id}>
                                        <span>{item.name}</span>
                                        <span>{item.quantity}</span>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                    <div className='mt-5'>
                    <h2 className='text-xl font-semibold ml-2'>Instructions</h2>
                        <ul className='list-disc marker:text-bleu-500 mt-4 ml-6 text-secondary marker:align-middle'>
                                <li>{item.instructions}</li>
                        </ul>
                    </div>
               </div>

         </article>
          
    </section>
  )
}

export default SingleProduct

import React from 'react'
import Image from 'next/image'
import Data from '@/pages/data/activities.json'

export default function Activities() {
  return (
    <div className='lg:w-10/12 mx-auto px-6 py-16'>
      <div className='text-center max-w-2xl mx-auto pb-8 space-y-4'>
      <h1 className='text-4xl font-bold text-neutral-700'>
            Explore our Activities
        </h1>
        <div className=' mt-9 pb-4'>
            <p className='text-neutral-600'>
                Experience the Magic of Kenya within Our Unique Homestays and AirBnBs.
            </p>
        </div>
      </div>

      <div className='mt-4 grid lg:grid-cols-3 gap-8 mx-auto md:grid-cols-2 lg:max-w-none mb-6'>
            {
                Data.map ((item) => (
                    <>
                        <div className='rounded-lg hover:shadow' key={item.id}>
                            <div className='flex-shrink-0 relative rounded-lg h-[420px] bg-neutral-900'>
                                <Image src={item.image} alt={item.title} className="block w-full h-full rounded-lg opacity-50" fill />
                            </div>
                            <div className='absolute z-10 -mt-32'>
                                <div className='flex flex-col w-2/3 mx-4 space-y-2'>
                                    <h1 className='text-white capitalize font-semibold text-2xl'>{item.title}</h1>
                                    <p className='text-white'>{item.decription}</p>
                                </div>
                            </div>
                        </div>
                    </>
                ))
            }
      </div>
    </div>
  )
}

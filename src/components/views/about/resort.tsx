import React from 'react'
import Image from 'next/image'
import Data from '@/pages/data/resort.json'

export default function Resort() {
  return (
    <div className='lg:w-10/12 mx-auto px-6 py-16'>
      <div className='text-center max-w-2xl mx-auto pb-8 space-y-4'>
        <h1 className='text-4xl font-bold capitalize text-neutral-700'>
            What makes us different?
        </h1>
        <div className=' mt-9 pb-4'>
            <p className='text-neutral-600'>
              At Lukeman Airbnb & Homestay, we&apos;re not just another accommodation provider; we&apos;re a community of travelers and hosts passionate about making a difference. Here&apos;s what sets us apart
            </p>
        </div>
      </div>
      <div className='mt-4 grid lg:grid-cols-3 gap-8 mx-auto md:grid-cols-2 lg:max-w-none mb-6'>
            {
                Data.map ((activity) => (
                    <>
                        <div className='flex flex-col space-y-8 items-center px-3' key={activity.id}>
                            <div className='flex-shrink-0 relative'>
                            <Image src={activity.image} alt={activity.title} className="object-cover" width={100} height={100}/>
                            </div>
                            <div className='flex flex-col space-y-2'>
                                <h3 className='text-neutral-700 font-medium capitalize text-xl'>{activity.title}</h3>
                                <p className='text-neutral-600'>{activity.decsription}</p>
                            </div>
                        </div>
                    </>
                ))
            }
      </div>
    </div>
  )
}

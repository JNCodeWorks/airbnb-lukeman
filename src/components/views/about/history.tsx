import React from 'react'

export default function History() {
  return (
    <div className='lg:w-10/12 mx-auto px-6 py-16'>
      <div className='mt-4 grid lg:grid-cols-2 gap-8 mx-auto md:grid-cols-2 lg:max-w-none mb-6'>
        <div className='space-y-4'>
            <h2 className='text-neutral-700 capitalize text-[32px] font-bold'>
                how we started    
            </h2>  
            <p className='text-neutral-600 leading-8'>
              Our journey started with a simple idea: to provide travelers with more than just a place to stay. We envisioned a platform that would allow visitors to immerse themselves in the local culture, experience the warmth of Kenyan hospitality, and create memories that last a lifetime.
            </p>  
        </div>

        <div className='space-y-4'>
            <h2 className='text-neutral-700 capitalize text-[32px] font-bold'>
                our story
            </h2>
            <p className='text-neutral-600 leading-8'>
              Since our inception, we have been committed to making travel experiences meaningful. We&apos;ve partnered with local hosts who open their homes and hearts to travelers, ensuring that every stay is a unique and enriching experience. We believe that the true essence of travel lies in connecting with people, places, and cultures.
            </p>
        </div>
      </div>
    </div>
  )
}

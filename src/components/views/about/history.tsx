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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.    
            </p>  
        </div>

        <div className='space-y-4'>
            <h2 className='text-neutral-700 capitalize text-[32px] font-bold'>
                our story
            </h2>
            <p className='text-neutral-600 leading-8'>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
      </div>
    </div>
  )
}

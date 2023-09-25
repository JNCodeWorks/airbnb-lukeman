import React from 'react'
import Location from '@/pages/data/location.json'

export default function Locations() {
  return (
    <div className='lg:w-10/12 mx-auto px-6 py-16'>
    <div className='text-center max-w-2xl mx-auto pb-8 space-y-4'>
        <h1 className='text-4xl font-bold text-neutral-700'>
            Our various locations
        </h1>
        <div className=' mt-9 pb-4'>
            <p className='text-neutral-600'>
                Lorem ipsum dolor sit amet consectetur adipiscing elitolmi mauris convallis mauris ultricies dolor viverra.
            </p>
        </div>
      </div>
      <div className='mt-4 grid lg:grid-cols-3 gap-8 mx-auto md:grid-cols-2 lg:max-w-none mb-6'>
            {
                Location.map((items) => (
                    <>
                        <div className='flex flex-col p-8 shadow-lg rounded-lg space-y-2 items-start px-6 bg-white' key={items.id}>
                            <div className='font-semibold'>
                                <h1 className='text-neutral-700'>{items.name}</h1>
                            </div>
                            <div className='flex flex-row items-center space-x-4'>
                                <p className='text-[#ff3f3f]'>
                                    <svg className="svg-icon w-6 h-6" viewBox="0 0 20 20">
							            <path fill="currentColor" d="M10,1.375c-3.17,0-5.75,2.548-5.75,5.682c0,6.685,5.259,11.276,5.483,11.469c0.152,0.132,0.382,0.132,0.534,0c0.224-0.193,5.481-4.784,5.483-11.469C15.75,3.923,13.171,1.375,10,1.375 M10,17.653c-1.064-1.024-4.929-5.127-4.929-10.596c0-2.68,2.212-4.861,4.929-4.861s4.929,2.181,4.929,4.861C14.927,12.518,11.063,16.627,10,17.653 M10,3.839c-1.815,0-3.286,1.47-3.286,3.286s1.47,3.286,3.286,3.286s3.286-1.47,3.286-3.286S11.815,3.839,10,3.839 M10,9.589c-1.359,0-2.464-1.105-2.464-2.464S8.641,4.661,10,4.661s2.464,1.105,2.464,2.464S11.359,9.589,10,9.589"></path>
						            </svg>
                                </p>
                                <p className='text-neutral-600 text-[14px]'>{items.location}</p>
                            </div>
                        </div>
                    </>
                ))
            }
      </div>
    </div>
  )
}

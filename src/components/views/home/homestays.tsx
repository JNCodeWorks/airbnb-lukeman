import React from 'react'
import Link from 'next/link'
import Data from '@/pages/data/homestay-data.json'
import Image from 'next/image'



export default function Homestays() {
  return (
    <div className='lg:w-10/12 mx-auto px-6 py-16'>
      <div className='flex lg:flex-row flex-col lg:items-center space-y-4 lg:space-y-0 items-start justify-between'>
        <h1 className='text-neutral-700 text-[34px] capitalize font-bold leading-[50px]'>
            Discover Our Homestay Listings
        </h1>
        <Link href={'/homestays'} className={'px-8 py-3 border bg-white rounded-full text-neutral-700 capitalize hover:text-white hover:bg-[#f8a72a] ease-in-out duration-500 font-medium'}>Browse All</Link>
      </div>
      <div className='mt-8 grid gap-5 mx-auto lg:grid-cols-3 md:grid-cols-2 lg:max-w-none'>
          {
                                Data.map ((Item) => (

                    
                                  <div className=" mx-3 bg-white rounded-sm shadow-md overflow-hidden" key={Item.id}>
                                      <div className="flex-shrink-0 relative h-60">
                                          <Image src={Item.image} alt={Item.name} className="object-cover hover:scale-125 ease-in-out duration-500" fill/>
                                      </div>
                                      <div className="flex-1 p-6 flex flex-col justify-between rounded-b-lg">
                                          <div className="flex-1 space-y-2">
                                              <Link href={'/homestays'} className="capitalize font-bold text-neutral-700 tracking-wide text-lg hover:text-[#f8a72a] ease-in-out duration-500">
                                                      <h1>{Item.name}</h1>
                                              </Link>
                                              <p className="capitalize text-sm text-neutral-600">{Item.description}</p>
                                          </div>
                                          <div className=" flex flex-row justify-between py-8">
                                              <p className="flex flex-row capitalize text-sm text-neutral-700 mb-2"> <span className="text-[#f8a72a] mr-2 text-sm">
                                                <svg fill="none" className='w-5 h-5' stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path>
                                                  </svg>
                                                  </span>{Item.guests}</p>
                                              <p className="flex flex-row capitalize text-sm text-neutral-700 mb-2">
                                                  <span className="text-[#f8a72a] mr-2 text-sm">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor">
                                                <g clip-path="url(#clip0_1610_32377)">
                                                <path d="M1.83303 7.5H14.1664C14.52 7.5 14.8591 7.64048 15.1092 7.89052C15.3592 8.14057 15.4997 8.47971 15.4997 8.83333V12H0.499695V8.83333C0.499695 8.47971 0.640171 8.14057 0.890219 7.89052C1.14027 7.64048 1.47941 7.5 1.83303 7.5V7.5Z"  stroke-width="1.35954" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M0.499695 12V14" stroke-width="1.35954" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M15.4996 12V14"  stroke-width="1.35954" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M13.9998 7.5V3C13.9998 2.73478 13.8944 2.48043 13.7069 2.29289C13.5193 2.10536 13.265 2 12.9998 2H2.99976C2.73454 2 2.48019 2.10536 2.29265 2.29289C2.10511 2.48043 1.99976 2.73478 1.99976 3V7.5" stroke-width="1.35954" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M5.6663 5H10.333C10.5098 5 10.6793 5.07024 10.8044 5.19526C10.9294 5.32029 10.9996 5.48986 10.9996 5.66667V7.5H4.99963V5.66667C4.99963 5.48986 5.06987 5.32029 5.1949 5.19526C5.31992 5.07024 5.48949 5 5.6663 5V5Z" stroke-width="1.35954" stroke-linecap="round" stroke-linejoin="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_1610_32377">
                                                <rect width="18" height="18" fill="white"/>
                                                </clipPath>
                                                </defs>
                                                </svg>
                                                  </span>{Item.bedrooms}</p>
                                          </div>
                                          <div className="mt-2 border-t w-full border-neutral-600 pt-8 md:flex md:items-center md:justify-between"></div>
                                          <div className="flex-1 -mt-2">
                                              <div className="flex flex-row items-center justify-between">
                                                  <h4 className="pb-2 text-neutral-700 font-medium">
                                                    <span className="text-2xl font-bold">Kshs. {Item.price}</span> per night
                                                  </h4>
                                                  <button className="rounded-md px-4 py-2 bg-[#53afe5] hover:bg-[#f8a72a] ease-in-out duration-500 capitalize text-white"><Link href={'/homestays'}>view</Link></button>
                                              </div>
                                          </div>
                                      </div>  
                                  </div>
                                  ))
          }
      </div>
    </div>
  )
}

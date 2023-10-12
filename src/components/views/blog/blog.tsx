import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Data from '../../../pages/data/blog-data.json'

export default function BlogSection() {
  return (
    <div className='bg-white'>
        <div className='lg:w-10/12 mx-auto px-6 py-16'>
        <div className='mt-4 grid gap-6 mx-auto lg:grid-cols-2 md:grid-cols-2 lg:max-w-none mb-6'>
            {
                                Data.map ((Items) =>(
                                    <div className='mx-3 bg-white rounded-sm shadow-md overflow-hidden mb-4' key={Items.id}>
                                            <div className='flex-shrink-0 relative h-60'>
                                                <Image src={Items.image} alt={Items.title} className='object-cover hover:scale-125 ease-in-out duration-500' fill/>
                                            </div>
                                            <div className='flex-1 p-4'>
                                                <div className='bg-white p-2 space-y-4'>
                                                <div className='flex lg:flex-row lg:space-x-4 items-start  flex-col space-y-3 lg:space-y-0 py-4'>
                                                    <p className='flex space-x-2 items-center'>
                                                        <span className='text-[#f8a72a]'>
                                                        <svg className='h-6 w-6' fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"></path>
                                                        </svg>
                                                        </span>
                                                        <span className='text-gray-600 '>{Items.date}</span>
                                                    </p>
                                                    <p className='flex space-x-2 items-center'>
                                                        <span className='text-[#f8a72a]'>
                                                        <svg fill="none" className='w-6 h-6' stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                        </svg>
                                                        </span>
                                                        <span className='text-neutral-600'>
                                                            Admin
                                                        </span>
                                                    </p>
                                                    <p className='flex space-x-2 items-center'>
                                                        <span className='text-[#f8a72a]'>
                                                        <svg fill="none" className='w-6 h-6' stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"></path>
                                                        </svg>
                                                        </span>
                                                        <span className='text-neutral-600'>
                                                            Uncategorized
                                                        </span>
                                                    </p>
                                                    
                                                </div>
                                                    <Link href={'#'} className='capitalize text-[#53afe5] font-bold text-2xl text-start hover:text-[#f8a72a] ease-in-out duration-300'>
                                                        {Items.title}
                                                    </Link>
                                                {/* <h1 className='capitalize text-light text-stone-600 font-semibold text-2xl text-start'>{Items.title}</h1> */}
                                                <p className='text-start text-gray-700'>{Items.description}</p>
                                                </div>
                                            </div>
                                    </div>
                                ))
            }
        </div>

        </div>
      
    </div>
  )
}
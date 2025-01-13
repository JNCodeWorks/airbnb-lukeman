import React from 'react'
import Image from 'next/image'
import PXL from '../../../../public/images/1.jpeg'

export default function Banner() {
  return (
    <div className='w-full relative bg-cover bg-center'>
        <Image src={PXL} alt='banner' className='object-cover' style={{height: "400px", width: "100vw"}}/>
        <div className='absolute top-0 left-0 w-full h-full bg-neutral-900 opacity-80 flex flex-col justify-center text-white'>
            <div className='lg:w-10/12 mx-auto max-w-3xl px-6'>
                <div className='xl:text-[32px] md:text-2xl flex flex-col space-y-12 text-2xl text-center justify-center'>
                    <h1 className='font-semibold capitalize'>
                        explore the world of hospitality & tourism
                    </h1>
                    <p className='lg:text-md text-base leading-7 capitalize'>
                        Stay informed and inspired with our travel blog and news updates. Discover travel tips, destination guides, and the latest trends in hospitality.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
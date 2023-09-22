import React from 'react'
import Link from 'next/link'

export default function Banner() {
  return (
    <div>
            <div className="w-full homeBanner2 bg-cover bg-center">
                <div className="bannerOverlay h-96 flex flex-col justify-center text-white">
                    <div className="lg:w-10/12 mx-auto px-6 w-full">
                        <div className="xl:text-5xl pt-12 lg:text-3xl flex flex-col space-y-12 text-2xl text-center">
                            <h1 className="font-medium capitalize "> Recharge energy in our unique hotel </h1>
                            <p className="lg:text-md text-base capitalize"> In id enim odio. Nunc aliquet diam tortor, at venenatis urna sagittis non. Suspendisse sodales nulla sit amet sem condimentum, ac euismod nibh elementum. Praesent eu urna at sem sodales venenatis. Mauris efficitur dapibus enim in posuere </p>
                            <div className='flex md:flex-row flex-col space-y-4 md:space-y-0 md:space-y-0 justify-center md:space-x-8'>
                            <button className='bg-[#ff3f3f] py-4 px-8 capitalize rounded-full text-white text-base font-semibold hover:bg-red-600 ease-in-out duration-500 hover:text-white'>
                                <Link href={'#'}>explore airbnb</Link>
                            </button>
                            <button className='bg-white capitalize rounded-full py-4 px-8 text-neutral-600 text-base font-semibold hover:bg-[#ff3f3f] ease-in-out duration-500 hover:text-white'>
                                <Link href={'#'}>explore homestays</Link>
                            </button>
                        </div>
                        </div>
                    </div>

                </div>
                
            </div>
    </div>
  )
}

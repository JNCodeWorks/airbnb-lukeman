import React from 'react'
import Link from 'next/link'

export default function Banner() {
  return (
    <div>
            <div className="w-full homeBanner2 bg-cover bg-center">
                <div className="bannerOverlay h-96 flex flex-col justify-center text-white">
                    <div className="lg:w-10/12 mx-auto px-6 w-full">
                        <div className="xl:text-5xl pt-12 lg:text-3xl flex flex-col space-y-12 text-2xl text-center">
                            <h1 className="font-medium capitalize "> our luxurious homestays </h1>
                            <p className="lg:text-md text-base capitalize"> In id enim odio. Nunc aliquet diam tortor, at venenatis urna sagittis non. Suspendisse sodales nulla sit amet sem condimentum, ac euismod nibh elementum. Praesent eu urna at sem sodales venenatis. Mauris efficitur dapibus enim in posuere </p>
                        </div>
                    </div>

                </div>
                
            </div>
    </div>
  )
}

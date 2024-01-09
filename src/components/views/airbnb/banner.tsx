import React from 'react'
import Link from 'next/link'

export default function Banner() {
  return (
    <div>
            <div className="w-full homeBanner2 bg-cover bg-center">
                <div className="bannerOverlay h-96 flex flex-col justify-center text-white">
                    <div className="lg:w-10/12 mx-auto px-6 max-w-3xl w-full">
                        <div className="xl:text-4xl pt-12 md:text-3xl flex flex-col space-y-12 text-2xl text-center">
                            <h1 className="font-semibold capitalize "> our luxurious airbnb </h1>
                            <p className="lg:text-md text-base capitalize"> Explore our curated collection of Airbnb listings that offer comfort, style, and convenience. Browse our selection, view stunning images, and inquire about your desired stay.</p>
                        </div>
                    </div>

                </div>
                
            </div>
    </div>
  )
}

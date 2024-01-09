import React from 'react'
import Link from 'next/link'

export default function Banner() {
  return (
    <div>
            <div className="w-full homeBanner2 bg-cover bg-center">
                <div className="bannerOverlay h-96 flex flex-col justify-center text-white">
                    <div className="lg:w-10/12 mx-auto max-w-3xl px-6 w-full">
                        <div className="xl:text-4xl pt-12 md:text-3xl flex flex-col space-y-12 text-2xl text-center">
                            <h1 className="font-semibold capitalize "> our luxurious homestays</h1>
                            <p className="lg:text-md text-base capitalize"> Experience the warmth and hospitality of our homestay hosts. Our handpicked homestays offer a chance to immerse yourself in local culture, savor homemade cuisine, and forge meaningful connections.  </p>
                        </div>
                    </div>

                </div>
                
            </div>
    </div>
  )
}

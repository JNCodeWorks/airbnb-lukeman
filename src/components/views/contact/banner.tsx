import React from 'react'
import Link from 'next/link'

export default function Banner() {
  return (
    <div>
            <div className="w-full homeBanner2 bg-cover bg-center">
                <div className="bannerOverlay h-96 flex flex-col justify-center text-white">
                    <div className="lg:w-10/12 mx-auto px-6 max-w-3xl w-full">
                        <div className="xl:text-4xl pt-12 md:text-3xl flex flex-col space-y-12 text-2xl text-center">
                            <h1 className="font-semibold capitalize "> contact us </h1>
                            <p className="lg:text-md text-base capitalize"> We would love to hear from you.  </p>
                        </div>
                    </div>

                </div>
                
            </div>
    </div>
  )
}

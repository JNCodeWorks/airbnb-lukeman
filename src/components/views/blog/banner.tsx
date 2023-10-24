import React from 'react'
import Link from 'next/link'

export default function Banner() {
  return (
    <div>
            <div className="w-full homeBanner2 bg-cover bg-center">
                <div className="bannerOverlay h-96 flex flex-col justify-center text-white">
                    <div className="lg:w-10/12 mx-auto px-6 max-w-3xl w-full">
                        <div className="xl:text-5xl pt-12 md:text-3xl flex flex-col space-y-12 text-2xl text-center">
                            <h1 className="font-medium capitalize "> our blog </h1>
                            <p className="lg:text-md text-base capitalize"> Stay informed and inspired with our travel blog and news updates. Discover travel tips, destination guides, and the latest trends in hospitality. Whether you are planning your next adventure or simply seeking travel inspiration, our blog is your go-to resource for all things travel-related.</p>
                        </div>
                    </div>

                </div>
                
            </div>
    </div>
  )
}
import React from 'react'
import Link from 'next/link'

export default function Banner() {
  return (
    <div>
            <div className="w-full homeBanner2 bg-cover bg-center">
                <div className="bannerOverlay h-96 flex flex-col justify-center text-white">
                    <div className="lg:w-10/12 mx-auto px-6 justify-center max-w-3xl w-full">
                        <div className="xl:text-5xl pt-12 md:text-3xl flex flex-col space-y-12 text-2xl text-center">
                            <h1 className="font-medium capitalize "> About Lukeman Homestays & Airbnb </h1>
                            <p className="lg:text-md text-base capitalize"> Lukeman Homestays & Airbnb is an accommodation provider established to offer you a secure, cost-effective, convenient and glamarous stay for all groups of travellers. All our facilities command a high standard accommodation to spice up your stay and make your experience even much better. The serenity, ambience and services are mind-blowing. </p>
                        </div>
                    </div>

                </div>
                
            </div>
    </div>
  )
}

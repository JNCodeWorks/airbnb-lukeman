import React from 'react'
import Image from 'next/image'
import pic1 from '../../../../public/images/1.jpeg'
import pic2 from '../../../../public/images/4.jpg'
import pic3 from '../../../../public/images/pxl1.jpg'
import pic4 from '../../../../public/images/3.jpg'

export default function Difference() {
  return (
    <div className='lg:w-10/12 mx-auto px-6 py-16'>
      <div className='grid lg:grid-cols-2 gap-6'>
        <div className='space-y-4'>
            <div className='space-y-2'>
                <h2 className='text-neutral-700 capitalize font-bold text-[32px]'>
                    Mission
                </h2>
                <p className='text-neutral-700 font-bold italic'>
                    &quot;Empowering Kenyan Journeys, One Stay at a Time&quot;
                </p>
                <p className='text-neutral-600 leading-7'>
                    At Lukeman Homestays & Airbnb, our mission is to enrich the lives of travelers by connecting them with the heart and soul of Kenya. We are dedicated to curating extraordinary travel experiences that immerse you in the authentic beauty, culture, and warmth of our nation. With each stay, we aim to create lasting memories and foster meaningful connections, one journey at a time.
                </p>
            </div>
            <div className='border-b-2 border-neutral-300'></div>
            <div className='space-y-2'>
                <h2 className='text-neutral-700 capitalize font-bold text-[32px]'>
                    vision
                </h2>
                <p className='text-neutral-700 font-bold italic'>
                    &quot;Inspiring Boundless Adventures in Kenya&quot;
                </p>
                <p className='text-neutral-600 leading-7'>
                    Our vision is to be the catalyst for unforgettable adventures in Kenya. We envision a world where every traveler discovers the wonders of our diverse landscapes, connects with our vibrant communities, and leaves with a deep appreciation for Kenya&apos;s natural beauty and cultural richness. We aspire to be your trusted companion on your journey of discovery.
                </p>
            </div>
           
        </div>
        <div className='grid grid-cols-2 gap-6'>
            <div className='space-y-6'>
                <div className='flex-shrink-0 relative rounded-lg h-52'>
                    <Image src={pic1} alt='#' className='block w-full h-full rounded-lg' fill/>
                </div>
                <div className='flex-shrink-0 relative rounded-lg h-80'>
                    <Image src={pic2} alt='#' className='block w-full h-full rounded-lg' fill/>
                </div>
            </div>

            <div className='space-y-6'>
                <div className='flex-shrink-0 relative rounded-lg h-80'>
                    <Image src={pic4} alt='#' className='block w-full h-full rounded-lg' fill/>
                </div>
                <div className='flex-shrink-0 relative rounded-lg h-52'>
                    <Image src={pic3} alt='#' className='block w-full h-full rounded-lg' fill/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

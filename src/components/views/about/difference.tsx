import React from 'react'
import Image from 'next/image'
import pic1 from '../../../../public/images/1.jpeg'
import pic2 from '../../../../public/images/4.jpg'
import pic3 from '../../../../public/images/pxl1.jpg'
import pic4 from '../../../../public/images/3.jpg'

export default function Difference() {
  return (
    <div className='lg:w-10/12 mx-auto px-6 py-16'>
        <div className='grid lg:grid-cols-2 gap-8'>
            <div className='space-y-2'>
                <h2 className='text-neutral-700 capitalize font-bold text-[32px]'>
                    Mission
                </h2>
                <p className='text-neutral-700 font-bold italic'>
                    &quot;Our Commitment to Hospitality Excellence&quot;
                </p>
                <p className='text-neutral-600 leading-7'>
                At Lukeman Airbnb, Homestays & Villas, our mission is to provide guests with an unforgettable and comfortable home-away-from-home experience. We are dedicated to delivering exceptional hospitality, creating lasting memories, and ensuring the well-being of every guest who walks through our doors. We believe in personalized service, attention to detail, and fostering a welcoming environment where travelers can connect with local culture, forging a genuine connection that goes beyond a mere stay.
                </p>
            </div>
            <div className='space-y-2'>
            <h2 className='text-neutral-700 capitalize font-bold text-[32px]'>
                    vision
                </h2>
                <p className='text-neutral-700 font-bold italic'>
                    &quot;Reimagining Hospitality, One Stay at a Time&quot;
                </p>
                <p className='text-neutral-600 leading-7'>
                Our vision at Lukeman Homestay & Airbnb is to be the leading name in accommodations, redefining the future of travel by seamlessly blending comfort, authenticity, and community. We aspire to expand our reach, building a network of accommodations that captivate travelers with unique and enriching experiences. We strive to be at the forefront of innovation in the hospitality industry, consistently exceeding expectations while promoting sustainable and responsible tourism practices.
                </p>
            </div>
        </div>
    </div>
  )
}

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
        <div className='space-y-8'>
            <h2 className='text-neutral-700 capitalize font-bold text-[34px]'>
                what makes us different?
            </h2>
            <p className='text-neutral-600 leading-8'>
                Lorem ipsum dolor sit ame consectetur adipiscing elit at imperdiet vehicula sem in turpis convallis sit mauris dolorolmel adipiscing duis vulputate non odio eget sit.
            </p>
            <div className='border-b-2'></div>
            <p className='text-neutral-600 leading-8'>
                Nisl suscipit adipiscing bibendum est et sollicitudin ac orci phasellus egestas tellus rutrum tristique nulla aliquet enim dsolor tortor parturient montes nascetur ridiculus mus mauris. In dictum non consectetur a erat nam.
            </p>
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

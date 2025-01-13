import React from 'react'
import Image from 'next/image'

export default function Banner() {
  return (
    <div className='w-full relative bg-cover bg-center'>
        <Image src={'https://images.ctfassets.net/kkpwxk9m1i0h/1BdSFlhNYczcQhFrrhcMcS/efc16b58a0f79691cad3391412571adc/IMG-20231208-WA0038.jpg'} alt='banner' className='object-cover' width={1000} height={1000} style={{height: "400px", width: "100vw"}}/>
        <div className='absolute top-0 left-0 w-full h-full bg-neutral-900 opacity-80 flex flex-col justify-center text-white'>
            <div className='lg:w-10/12 mx-auto max-w-3xl px-6'>
                <div className='xl:text-[32px] md:text-2xl flex flex-col space-y-12 text-2xl text-center justify-center'>
                    <h1 className='font-semibold capitalize'>
                      our luxurious homestays
                    </h1>
                    <p className='lg:text-md text-base leading-7 capitalize'>
                      Experience the warmth and hospitality of our homestay hosts. Our handpicked homestays offer a chance to immerse yourself in local culture, savor homemade cuisine, and forge meaningful connections.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

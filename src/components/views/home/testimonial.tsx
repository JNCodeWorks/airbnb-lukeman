import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Phone from '../../../public/images/phone.jpg'
import Data from '@/pages/data/feedback.json'

export default function Testimonial() {
  return (
    <>
    <div>
    <section className="">
    <div className="lg:w-10/12 mx-auto px-6 py-16">
        <div className="flex flex-col items-center">
        <div className='text-center max-w-2xl mx-auto pb-8 space-y-4'>
        <h1 className='text-4xl font-bold text-neutral-700'>
            What our past clients say
        </h1>
        <div className=' mt-9 pb-4'>
            <p className='text-neutral-600'>
                Lorem ipsum dolor sit amet consectetur adipiscing elitolmi mauris convallis mauris ultricies dolor viverra.
            </p>
        </div>
      </div>
            <div className="relative md:order-2">
                <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                    <div className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter" id='testimonial'></div>
                </div>

                <div className="relative grid max-w-lg gap-6 mx-auto md:max-w-none lg:gap-10 lg:grid-cols-3">
                    {
                        Data.map ((items) => (
                            <>
                                <div className="flex flex-col bg-white overflow-hidden shadow-lg" key={items.id}>
                                    <div className='flex flex-col space-y-8 justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7'>
                                        <div className='flex flex-col space-y-2'>
                                            <h1 className='font-semibold text-neutral-700 text-lg'>&quot;{items.title}&quot;</h1>
                                            <p className='text-neutral-600 text-[14px]'>{items.description}</p>
                                        </div>
                                        <div className='flex flex-row items-center justify-between'>
                                            <div className='flex-shrink-0 relative h'>
                                                <Image src={items.image} alt={items.name} className='block w-full h-full rounded-xl' height={90} width={90}/>
                                            </div>
                                            <div className='flex flex-col text-sm items-start space-y-1'>
                                                <h1 className='font-semibold text-neutral-700'>{items.name}</h1>
                                                <p className='text-neutral-500'>{items.location}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
        <div className='flex md:flex-row flex-col space-y-4 md:space-y-0 md:space-y-0 py-12 justify-center md:space-x-8'>
                            <button className='bg-[#ff3f3f] py-4 px-8 capitalize rounded-full text-white text-base font-semibold hover:bg-red-600 ease-in-out duration-500 hover:text-white'>
                                <Link href={'#'}>explore airbnb</Link>
                            </button>
                            <button className='bg-white capitalize rounded-full py-4 px-8 text-neutral-600 text-base font-semibold hover:bg-[#ff3f3f] ease-in-out duration-500 hover:text-white'>
                                <Link href={'#'}>explore homestays</Link>
                            </button>
                        </div>
    </div>
</section>
    </div>
</>
)
}
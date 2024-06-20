import React from 'react'
import Location from '@/pages/data/location.json'
import ModalImage from "react-modal-image";

export default function Locations() {
  return (
    <div className='lg:w-10/12 mx-auto px-6 py-16'>
        <div className='grid lg:grid-cols-2 gap-6'>
            <div className='space-y-6'>
                <div className='space-y-3'>
                    <h2 className='font-bold text-[32px] uppercase tracking-wide text-neutral-700'>
                        welcome home!
                    </h2>
                    <p className='text-[#07286f] uppercase font-semibold'>
                        some word about us
                    </p>
                </div>
                <div className='space-y-3'>
                    <p className='font-semibold text-neutral-700'>
                        Lukeman Airbnb, Homestays & Villas offers serene accommodation nestled amidst the enchanting landscapes of Kenya.
                    </p>
                    <p className='text-neutral-600 leading-8'>
                        Escape from the hustle and hassle of your everyday routine and come away to the luxurious homestays & airbnbs we provide, where a serene world awaits you. Throw off all your worries and slip into the scenic, relaxed atmosphere and be pampered and rejuvenated.
                    </p>
                </div>
                <div className='space-y-6'>
                    <div className='flex items-center space-x-4'>
                        <p className='text-[#07286f] hover:text-[#1d92ce] ease-in-out duration-500'>
                            <svg className="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m11.479 1.712 2.367 4.8a.532.532 0 0 0 .4.292l5.294.769a.534.534 0 0 1 .3.91l-3.83 3.735a.534.534 0 0 0-.154.473l.9 5.272a.535.535 0 0 1-.775.563l-4.734-2.49a.536.536 0 0 0-.5 0l-4.73 2.487a.534.534 0 0 1-.775-.563l.9-5.272a.534.534 0 0 0-.154-.473L2.158 8.48a.534.534 0 0 1 .3-.911l5.294-.77a.532.532 0 0 0 .4-.292l2.367-4.8a.534.534 0 0 1 .96.004Z"/>
                            </svg>
                        </p>
                        <p className='uppercase text-neutral-700 font-semibold text-sm'>Consistently High Guest Satisfaction</p>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <p className='text-[#07286f] hover:text-[#1d92ce] ease-in-out duration-500'>
                            <svg className="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"/>
                            </svg>
                        </p>
                        <p className='uppercase text-neutral-700 font-semibold text-sm'>Discover Your Oasis: Where Hospitality Meets Home</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-2">
                {
                    Location.slice(0,1).map ((images) => (
                        <ModalImage
                        className="rounded-md"
                        key={images.id}
                        small={images.image}
                        medium={images.image}
                        large={images.image}
                        alt={images.alt}
                        hideDownload={true}
                        hideZoom={true}
                        hideRotate={true}
                        />
                    ))
                }
            </div>
        </div>
        <div className="grid lg:grid-cols-3 py-16 gap-4">
                {
                    Location.map ((images) => (
                        <ModalImage
                        className="rounded-md"
                        key={images.id}
                        small={images.image}
                        medium={images.image}
                        large={images.image}
                        alt={images.alt}
                        hideDownload={true}
                        hideZoom={true}
                        hideRotate={true}
                        />
                    ))
                }
        </div>
    </div>
  )
}

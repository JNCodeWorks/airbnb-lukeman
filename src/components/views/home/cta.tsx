import React from 'react';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import ReactPlayer from 'react-player'

export default function CTA() {

    const [showPlayer, setShowPlayer] = useState(false);
    // const videoRef = useRef<ReactPlayer | null>(null);

    useEffect(() => {
      setShowPlayer(true);
    }, []);
    

  return (
    <div className=''>
        <div className="lg:w-10/12 mx-auto px-6 py-16">
            <div className="">
                <div className="w-full flex justify-center">
                    <div className="w-full rounded-lg bg-gradient-to-r from-[#1d92ce] to-sky-400 md:py-8 md:px-8 px-5 py-4 xl:px-12 xl:py-16">
                        <div>
                            {/* <div className="flex flex-wrap items-center md:flex-row flex-col-reverse"> */}
                            <div className='grid md:grid-cols-2'>
                                <div className="md: w-full pb-6 md:pb-0 md:pr-6 flex-col md:block flex items-center justify-center md:pt-0 pt-4">
                                    <div className='space-y-3'>
                                        <h1 role="heading" className="text-xl md:text-2xl lg:text-4xl xl:text-4xl lg:w-10/12 text-white font-bold leading-6 lg:leading-10 md:text-left text-center">We are Passionate About Creating Memorable Travel Experiences.</h1>
                                        <p className='text-white'>We Are Driven By The Desire To Offer Travelers A Unique And Authentic Experience In The Heart Of Kenya&apos;s Natural Beauty.</p>
                                    </div>
                                    <Link href={'/about'}><button role="button" aria-label="About Us" className="mt-5 lg:mt-8 py-3 lg:py-4 px-4 lg:px-8 bg-white font-bold text-[#1d92ce] rounded-full text-sm lg:text-lg xl:text-xl hover:bg-opacity-90  focus:ring-2 focus:ring-offset-2 capitalize focus:ring-white focus:outline-none">about us</button></Link>
                                </div>
                                <div className="">
                                    <div style={{ position: 'relative', paddingTop: '56.25%', width: '100%', height: '100%' }}>
                                        {showPlayer && (
                                             <ReactPlayer url="https://www.youtube.com/watch?v=SRf_gbDtd4E" controls playing autoPlay volume={1} loop pip style={{ position: 'absolute', top: 0, left: 0 }} width='100%' height='100%' />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

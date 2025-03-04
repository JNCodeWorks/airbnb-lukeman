import React from 'react'
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player'

export default function Video() {

    const [showPlayer, setShowPlayer] = useState(false);

    useEffect(() => {
      setShowPlayer(true);
    }, []);

  return (
    <div className='lg:w-10/12 mx-auto px-6 py-16'>
    <div className='text-center max-w-2xl mx-auto pb-8 space-y-4'>
        <div className=''>
            <p className='text-[#07286f] text-lg font-semibold'>
                Explore our Experience
            </p>
        </div>
        <h1 className='text-4xl font-bold text-neutral-700'>
            Watch how a day unfolds at one of our properties.
        </h1>
        <p className='text-neutral-600'>Get a glimpse of the unforgettable experiences that await you in Kenya.</p>
      </div>
      <div className='w-full items-center  justify-center text-center'>
        <div style={{ position: 'relative', paddingTop: '56.25%', width: '100%', height: '100%' }}>
        {showPlayer && <ReactPlayer url="https://www.youtube.com/watch?v=SRf_gbDtd4E" controls playing autoPlay volume={1} loop pip style={{ position: 'absolute', top: 0, left: 0 }} width='100%' height='100%' />}
        </div>
      </div>
    </div>
  )
}

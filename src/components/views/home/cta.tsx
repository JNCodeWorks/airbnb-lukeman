import React from 'react'

export default function CTA() {
  return (
    <div className=''>
        <div className="lg:w-10/12 mx-auto px-6 py-16">
            <div className="">
                <div className="w-full flex justify-center">
                    <div className="w-full rounded-lg bg-gradient-to-r from-[#ff3f3f] to-red-600 md:py-8 md:px-8 px-5 py-4 xl:px-12 xl:py-16">
                        <div>
                            <div className="flex flex-wrap items-center md:flex-row flex-col-reverse">
                                <div className="md:w-2/3 w-full pb-6 md:pb-0 md:pr-6 flex-col md:block flex items-center justify-center md:pt-0 pt-4">
                                    <div className='space-y-2'>
                                        <h1 role="heading" className="text-xl md:text-2xl lg:text-4xl xl:text-4xl lg:w-10/12 text-white font-black leading-6 lg:leading-10 md:text-left text-center">Recharge your energies in one of our forest cabins</h1>
                                        <p className='text-white'>Non consectetur a erat nam at lectus urna duis convallis molestie nunc non blandit massa ut etiam sit amet nisl purus in mollis.</p>
                                    </div>
                                    <button role="button" aria-label="Join the community" className="mt-5 lg:mt-8 py-3 lg:py-4 px-4 lg:px-8 bg-white font-bold text-red-600 rounded-full text-sm lg:text-lg xl:text-xl hover:bg-opacity-90  focus:ring-2 focus:ring-offset-2 focus:ring-white focus:outline-none">Join the community</button>
                                </div>
                                <div className="md:w-1/3 w-2/3">
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/CTA.png" alt="cartoon avatars" />
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

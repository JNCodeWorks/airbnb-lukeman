import React from 'react'
import Link from 'next/link'
import PhotoGallery from './photoGallery'

export default function Single() {
  return (
    <div>
    <div className='w-full single bg-cover bg-center'>
      <div className='bannerOverlay h-96 flex flex-col justify-center text-white'>
            <div className="lg:w-10/12 mx-auto px-6 w-full">
            <div className="xl:text-5xl pt-12 md:text-3xl flex flex-col space-y-6 text-2xl text-left">
                <h1 className="font-medium capitalize "> single rustic cabin </h1>
                <p className='text-base max-w-prose capitalize'>Lorem ipsum dolor sit amet consectetur adipiscing elit etiam cras tellus sit tempor amet, nascetur quam ornare proin platea diam amet</p>
            </div>
            </div>
      </div>
    </div>

    <div className='lg:w-10/12 mx-auto px-6 py-16'>
        <div className='grid lg:grid-cols-3 gap-6'>
            <div className='col-span-2 space-y-8'>

                <div className='grid lg:grid-cols-3 gap-4'>
                    <button className='border justify-center text-sm text-neutral-700 items-center flex space-x-6 rounded-full py-3'>
                        <span>
                        <svg fill="none" className='w-5 h-5' stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path>
                        </svg>
                        </span>
                        <span>Guest(s)</span>
                    </button>

                    <button className='border justify-center text-sm text-neutral-700 items-center flex space-x-6 rounded-full py-3'>
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none">
                        <g clip-path="url(#clip0_1610_32377)">
                        <path d="M1.83303 7.5H14.1664C14.52 7.5 14.8591 7.64048 15.1092 7.89052C15.3592 8.14057 15.4997 8.47971 15.4997 8.83333V12H0.499695V8.83333C0.499695 8.47971 0.640171 8.14057 0.890219 7.89052C1.14027 7.64048 1.47941 7.5 1.83303 7.5V7.5Z" stroke="#191919" stroke-width="1.35954" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M0.499695 12V14" stroke="#191919" stroke-width="1.35954" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15.4996 12V14" stroke="#191919" stroke-width="1.35954" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M13.9998 7.5V3C13.9998 2.73478 13.8944 2.48043 13.7069 2.29289C13.5193 2.10536 13.265 2 12.9998 2H2.99976C2.73454 2 2.48019 2.10536 2.29265 2.29289C2.10511 2.48043 1.99976 2.73478 1.99976 3V7.5" stroke="#191919" stroke-width="1.35954" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5.6663 5H10.333C10.5098 5 10.6793 5.07024 10.8044 5.19526C10.9294 5.32029 10.9996 5.48986 10.9996 5.66667V7.5H4.99963V5.66667C4.99963 5.48986 5.06987 5.32029 5.1949 5.19526C5.31992 5.07024 5.48949 5 5.6663 5V5Z" stroke="#191919" stroke-width="1.35954" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1610_32377">
                        <rect width="18" height="18" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                        </span>
                        <span>Bedroom(s)</span>
                    </button>

                    <button className='border justify-center text-sm text-neutral-700 items-center flex space-x-6 rounded-full py-3'>
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none">
                        <g clip-path="url(#clip0_1632_35021)">
                        <path d="M8.5 9.50049H15.5L15.0573 12.1578C14.9017 13.0919 14.4197 13.9405 13.6972 14.5526C12.9746 15.1647 12.0583 15.5006 11.1113 15.5005H4.88867C3.94169 15.5006 3.0254 15.1647 2.30283 14.5526C1.58026 13.9405 1.09829 13.0919 0.942667 12.1578L0.5 9.50049H3.5" stroke="#191919" stroke-width="1.34699" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8 13.5002H4C3.86739 13.5002 3.74021 13.4476 3.64645 13.3538C3.55268 13.26 3.5 13.1329 3.5 13.0002V9.50024C3.5 9.23503 3.60536 8.98067 3.79289 8.79314C3.98043 8.6056 4.23478 8.50024 4.5 8.50024H7.5C7.76522 8.50024 8.01957 8.6056 8.20711 8.79314C8.39464 8.98067 8.5 9.23503 8.5 9.50024V13.0002C8.5 13.1329 8.44732 13.26 8.35355 13.3538C8.25979 13.4476 8.13261 13.5002 8 13.5002Z" stroke="#191919" stroke-width="1.34699" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10.5 2.50024C10.5 1.96981 10.7107 1.4611 11.0858 1.08603C11.4609 0.710958 11.9696 0.500244 12.5 0.500244C13.0304 0.500244 13.5391 0.710958 13.9142 1.08603C14.2893 1.4611 14.5 1.96981 14.5 2.50024V9.50024" stroke="#191919" stroke-width="1.34699" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.5 4.50024C8.5 3.96981 8.71071 3.4611 9.08579 3.08603C9.46086 2.71096 9.96957 2.50024 10.5 2.50024C11.0304 2.50024 11.5391 2.71096 11.9142 3.08603C12.2893 3.4611 12.5 3.96981 12.5 4.50024H8.5Z" stroke="#191919" stroke-width="1.34699" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1632_35021">
                        <rect width="18" height="18" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                        </span>
                        <span>Bathroom(s)</span>
                    </button>
                </div>

                <div className='space-y-6'>
                    <h1 className='capitalize text-neutral-800 font-bold text-[32px]'>about the cabin</h1>
                    <p className='text-neutral-700 leading-7'>Lorem ipsum dolor sit amet consectetur adipiscing elit etiam cras tellus sit tempor amet, nascetur quam ornare proin platea diam amet sed fringilla.</p>
                    <ul className='list-disc list-inside space-y-3 text-neutral-700'>
                        <li>Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae.</li>
                        <li>Magna etiam tempor orci eu lobortis elementum nibh tellus molestie.</li>
                        <li>Porta lorem mollis aliquam ut porttitor leo a diam.</li>
                        <li>Pellentesque elit eget gravida cum sociis natoque penatibus et magni.</li>
                    </ul>
                    <p className='text-neutral-700 leading-7'>Pulvinar mattis nunc sed blandit libero cursus turpis massa tincidunt dui ut tellus molestie nunc non blandit massa enim nec dui nunc netus et malesuada fames aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus scelerisque purus semper eget duis at tellus in mollis nunc sed id semper risus.</p>
                    <p className='text-neutral-700 leading-7'>Tempus quam pellentesque nec nam aliquam sem et tortor duis convallis convallis tellus id interdum sit amet nisl purus in mollis nulla facilisi morbi tempus iaculis urna id volutpat tincidunt vitae semper quis lectus nulla.</p>
                </div>

                <div class="border-b border-neutral-500"></div>

                <div className='space-y-6'>
                    <h1 className='capitalize text-neutral-800 font-bold text-[32px]'>amenities</h1>

                    <ul className='grid lg:grid-cols-3 gap-4 list-disc list-inside space-y-3 text-neutral-700 capitalize'>
                        <li>heater</li>
                        <li>fireplace</li>
                        <li>hot tub</li>
                        <li>TV</li>
                        <li>parking</li>
                        <li>full kitchen</li>
                        <li>game room</li>
                        <li>refrigirator</li>
                    </ul>
                </div>
            </div>

            <div>
                
            </div>

        </div>

        <div className='py-16'>
            <div className='flex lg:flex-row flex-col lg:items-center space-y-4 lg:space-y-0 items-start justify-between'>
            <h1 className='text-neutral-700 text-[34px] capitalize font-bold leading-[50px]'>
                gallery
            </h1>
            <Link href={'/homestays'} className={'px-8 py-3 border bg-white rounded-full text-neutral-700 capitalize hover:text-white hover:bg-red-600 ease-in-out duration-500 font-medium'}>Book now</Link>
            </div>
            <div>
                <PhotoGallery/>
            </div>
        </div>

    </div>
    </div>
  )
}

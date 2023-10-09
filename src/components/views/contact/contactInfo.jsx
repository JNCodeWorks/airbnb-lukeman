import React from 'react'
import Link from 'next/link'

export default function ContactInfo() {
  return (
    <div className='lg:w-10/12 mx-auto px-6 py-24'>
        <div className='py-8'>
            <h2 className='text-zinc-700 font-medium capitalize text-2xl'>contact information</h2>
        </div>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-6'>
            <div className='lg:mx-auto'>
                <p className='flex flex-col space-y-2 text-sm'>
                    <span className='capitalize text-neutral-700 font-medium'>address:&nbsp;</span><span className='text-neutral-500'> Maweni Plaza, Voi, Taita-Taveta County, Kenya.</span>
                </p>
            </div>

            <div className='lg:mx-auto'>
                <Link href={"tel://123235598"} className='flex flex-col space-y-2 text-sm'>
                    <span className='capitalize text-neutral-700 font-medium'>phone:&nbsp;</span><span className='text-[#53afe5]'>+256 712 345 678</span>
                </Link>
            </div>

            <div className='lg:mx-auto'>
                <Link href={"mailto:info@heartofhelp.org"} className='flex flex-col space-y-2 text-sm'>
                    <span className='capitalize text-neutral-700 font-medium'>email:&nbsp;</span><span className='text-[#53afe5]'>info@test.com</span>
                </Link>
            </div>

            <div className='lg:mx-auto'>
                <Link href={"/"} className='flex flex-col space-y-2 text-sm'>
                    <span className='capitalize text-neutral-700 font-medium'>website:&nbsp;</span><span className='text-[#53afe5]'>lukeman.com</span>
                </Link>
            </div>
        </div>
    </div>
  )
}

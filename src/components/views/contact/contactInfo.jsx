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
                <Link href="https://wa.me/+254719548363" className='flex flex-col space-y-2 text-sm'>
                    <span className='capitalize text-neutral-700 font-medium'>whatsapp:&nbsp;</span><span className='text-[#07286f]'>+254 719 548 363</span>
                </Link>
            </div>

            <div className='lg:mx-auto'>
                <Link href={"tel://+254794234163"} className='flex flex-col space-y-2 text-sm'>
                    <span className='capitalize text-neutral-700 font-medium'>phone:&nbsp;</span><span className='text-[#07286f]'>+254 794 234 163</span>
                </Link>
            </div>

            <div className='lg:mx-auto'>
                <Link href={"mailto:info@lukemanbnb.com"} className='flex flex-col space-y-2 text-sm'>
                    <span className='capitalize text-neutral-700 font-medium'>email:&nbsp;</span><span className='text-[#07286f]'>info@lukemanbnb.com</span>
                </Link>
            </div>

            <div className='lg:mx-auto'>
                <Link href={"/"} className='flex flex-col space-y-2 text-sm'>
                    <span className='capitalize text-neutral-700 font-medium'>website:&nbsp;</span><span className='text-[#07286f]'>lukemanbnb.com</span>
                </Link>
            </div>
        </div>
    </div>
  )
}

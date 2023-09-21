import React from 'react'
import { useState } from 'react';
import { useRouter } from "next/router";
import Image from 'next/image';
import Link from 'next/link';
// import Logo from '../../../../public/images/cropped-Nextage-Logo-4.png'

export default function Responsive() {

    const router = useRouter ();
    const [show, setShow] = useState(true);

    const navigation = {
        links: [
            {
                id: 1,
                name: 'home',
                href: '/'
            },
            {
                id: 2,
                name: 'about',
                href: '/about'
            },
            {
                id: 3,
                name:'homestays',
                href: '/services'
            },
            {
                id: 4,
                name: 'airbnb',
                href: '/airbnb'
            },
            {
                id: 5,
                name: 'blog',
                href: '/blog'
            },
            {
                id: 6,
                name: 'contacts',
                href: '/contacts'
            }
        ]
    }

  return (
    <div className='lg:hidden'>
      <div className='bg-white shadow xl:hidden flex justify-between w-full px-8 py-6 rounded-t-xl items-center border-b border-transparent sm:border-gray-200'>
      <button className="flex text-white hover:text-indigo-200 focus:outline-none focus:text-indigo-200 justify-between  items-center space-x-3">
                <Link href={'/'} className='flex flex-col items-center'>
                {/* <Image src={Logo} alt="" width={80} height={50}/> */}
                 </Link>
                </button>
                <div aria-label="toggler" className="flex justify-center items-center">
                    <button id="open" aria-label="open" onClick={() => setShow(!show)} className={`${show ? "flex items-center space-x-1" : "hidden"} focus:outline-none focus:ring-2 `}>
                        <svg className="text-[#ff3f3f]" width={28} height={28} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6H20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 12H20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 18H20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {/* <span className="uppercase font-medium text-base">open</span> */}
                    </button>
                    <button id="close" aria-label="close" onClick={() => setShow(!show)} className={`${show ? "hidden" : "flex items-center space-x-1"} focus:outline-none focus:ring-2  `}>
                        <svg className="text-[#ff3f3f]" width={28} height={28} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6 6L18 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {/* <span className="uppercase font-medium text-base">close</span> */}
                    </button>
                </div>
                
      </div>
            <div id="Main" className={`${show ? "-translate-x-full" : "-translate-x-0"} bg-white space-y-2 transform  xl:translate-x-0 shadow xl:rounded-r fixed h-screen top-22 sm:z-20  ease-in-out transition duration-700 flex justify-start items-start w-full sm:w-64 flex-col `}>
                {navigation.links.map((item)=>(
                    // <button className="text-stone-700 rounded py-3 px-8 items-start text-left space-x-6 w-full" key={item.id} >
                    //     <Link href={item.href} className={router.pathname == item.href ? "text-[#ff3f3f] capitalize font-medium" : "hover:text-[#ff3f3f] text-[#202B5D] capitalize w-full font-medium"}>{item.name}</Link>
                    // </button>
                    <Link href={item.href} key={item.id} className="text-left items-start text-stone-700 rounded py-2.5 px-8 text-left space-x-6 w-full"><button className={router.pathname == item.href ? "text-hove-color capitalize font-medium" : "hover:text-hove-color capitalize font-medium"}>{item.name}</button></Link>
                ))}
            </div>
    </div>
  )
}
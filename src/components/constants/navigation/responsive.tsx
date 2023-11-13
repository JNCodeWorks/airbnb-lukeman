import React from 'react'
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../../public/images/LUKEMAN-LOGO.png'

export default function Responsive() {

    const router = useRouter ();
    const [navbar, setNavbar] = useState (false);
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
                href: '/homestays'
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

    const changeBackground = () => {
        if (window.scrollY >=200) {
            setNavbar (true)
        } else {
            setNavbar (false);
        }
    };

        // window.addEventListener ("scroll", changeBackground);
        useEffect (() => {window.addEventListener ("scroll", changeBackground)})

  return (
    <div className='lg:hidden'>
      <div className='bg-[#fefefe] shadow-md xl:hidden py-4 flex justify-between w-full px-8 rounded-b-xl items-center border-b border-transparent sm:border-neutral-200'>
      {/* <div className={navbar ? 'navbar active shadow xl:hidden flex justify-between w-full px-8 items-center border-b-2 sm:border-neutral-200' : 'navbar xl:hidden flex justify-between w-full px-8 items-center border-b border-transparent sm:border-neutral-200'}> */}
      {/* <button className="flex text-white hover:text-indigo-200 focus:outline-none focus:text-indigo-200 justify-between  items-center space-x-3">
                <Link href={'/'} className='flex flex-col items-center'>
                    <div>
                        <Image src={Logo} alt='' style={{height: "70px", width: "70px"}}/>
                    </div>
                 </Link>
                </button> */}
                        <div className='items-center ml-[56px] overflow-hidden'>
                <Link href={'/'} className='flex flex-col items-center'>
                <div className='absolute -mt-[99px]'>
                    <Image src={Logo} alt='' className='relative' style={{height: "200px", width: "300px"}}/>
                </div>
                </Link>

            </div>
                <div aria-label="toggler" className="flex justify-center items-center">
                    <button id="open" aria-label="open" onClick={() => setShow(!show)} className={`${show ? "flex items-center space-x-1" : "hidden"} focus:outline-none focus:ring-2 `}>
                        <svg className="text-[#07286f]" width={28} height={28} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6H20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 12H20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 18H20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {/* <span className="uppercase font-medium text-base">open</span> */}
                    </button>
                    <button id="close" aria-label="close" onClick={() => setShow(!show)} className={`${show ? "hidden" : "flex items-center space-x-1"} focus:outline-none focus:ring-2  `}>
                        <svg className="text-[#07286f]" width={28} height={28} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6 6L18 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {/* <span className="uppercase font-medium text-base">close</span> */}
                    </button>
                </div>
                
                
      </div>
            <div id="Main" className={`${show ? "-translate-x-full" : "-translate-x-0"} bg-[#fefefe] space-y-2 transform  xl:translate-x-0 shadow xl:rounded-r fixed h-screen top-22 sm:z-20  ease-in-out transition duration-700 flex justify-start items-start w-full sm:w-64 flex-col `}>
                {navigation.links.map((item)=>(
                    // <button className="text-stone-700 rounded py-3 px-8 items-start text-left space-x-6 w-full" key={item.id} >
                    //     <Link href={item.href} className={router.pathname == item.href ? "text-[#07286f] capitalize font-medium" : "hover:text-[#07286f] text-neutral-600 capitalize w-full font-medium"}>{item.name}</Link>
                    // </button>
                    <Link href={item.href} key={item.id} className="text-left items-start text-[#07286f] rounded py-2.5 px-8 text-left space-x-6 w-full"><button className={router.pathname == item.href ? "text-[#1d92ce] capitalize font-medium" : "hover:text-[#1d92ce] capitalize font-medium"}>{item.name}</button></Link>
                ))}
            </div>
    </div>
  )
}
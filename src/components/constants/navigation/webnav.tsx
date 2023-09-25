import React from 'react'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image';


export default function WebNav() {

    const [navbar, setNavbar] = useState (false);
    const router = useRouter ();

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
        ],


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
    // <div className='bg-white rounded-full'>
        <div className={navbar ? 'navbar active w-full rounded-b-full hidden lg:flex' : 'navbar w-full hidden lg:flex'}>
        <div className='py-4 lg:flex justify-between items-center lg:w-10/12 px-6 mx-auto hidden'>
        <div className='items-center'>
                <Link href={'/'} className='flex flex-col items-center'>
                    {/* <Image src={Logo} alt="" width={70} height={70}/> */}

                </Link>

            </div>
            <div>
                <nav className='flex items-center space-x-8 items-center'>
                    {navigation.links.map((item)=>(
                        <Link href={item.href} key={item.id} className={router.pathname == item.href ? "text-[#ff3f3f] capitalize font-medium" : "hover:text-[#ff3f3f] ease-in-out duration-300 text-[#202B5D] capitalize font-medium"}>{item.name}</Link>
                    ))}
                </nav>
            </div>
        </div>
    </div>
  )
}
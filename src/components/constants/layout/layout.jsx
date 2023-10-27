import React from 'react'
// import TopNav from '../navigation/topnav'
import WebNav from '../navigation/webnav'
import Responsive from '../navigation/responsive'
import TopNav from '../navigation/topnav'
import Footer from '../navigation/footer'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import LoadingSpinner from '../navigation/LoadingSpinner';
import ScrollTop from '../navigation/scrollTop'


export default function Layout({children}) {

    const router = useRouter();
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      const handleStart = () => {
        setLoading(true);
      };
  
      const handleComplete = () => {
        setLoading(false);
      };
  
      router.events.on('routeChangeStart', handleStart);
      router.events.on('routeChangeComplete', handleComplete);
      router.events.on('routeChangeError', handleComplete);

      return () => {
        router.events.off('routeChangeStart', handleStart);
        router.events.off('routeChangeComplete', handleComplete);
        router.events.off('routeChangeError', handleComplete);
      };
    }, [router]);

  return (
   <>
         {loading && <LoadingSpinner />}
        <header className='fixed w-full top-0 z-40 drop-shadow-md'>
            {/* <TopNav/> */}
            <TopNav/>
            <WebNav/>
            <Responsive/>
        </header>

        <main className=''>
            {children}
            <ScrollTop/>
        </main>

        <footer>
            {/* <Footer/> */}
            <Footer/>
        </footer>
   </>
  )
}
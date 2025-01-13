import React, { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
// import TopNav from '../navigation/topnav'
import WebNav from '../navigation/webnav';
import Responsive from '../navigation/responsive';
import TopNav from '../navigation/topnav';
import Footer from '../navigation/footer';
import { useRouter } from 'next/router';
import ScrollTop from '../navigation/scrolltop';

export default function Layout({ children }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      // Optionally, you can track route changes or handle any other logic here
    };

    router.events.on('routeChangeStart', handleRouteChange);
    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('routeChangeError', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('routeChangeError', handleRouteChange);
    };
  }, [router]);

  return (
    <>
      <header className="fixed w-full top-0 z-40 drop-shadow-md">
        {/* <TopNav/> */}
        {/* <TopNav/> */}
        <WebNav />
        <Responsive />
      </header>

      <main className="">
        {children}
        <ScrollTop />
        <Analytics />
        <SpeedInsights />
      </main>

      <footer>
        {/* <Footer/> */}
        <Footer />
      </footer>
    </>
  );
}

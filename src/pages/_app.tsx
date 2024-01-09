import ReactGA from 'react-ga';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import React, { useEffect, useState } from 'react';
import LoadingSpinner from '@/components/constants/navigation/LoadingSpinner';

function MyApp({ Component, pageProps }: { Component: React.ComponentType, pageProps: any }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    ReactGA.initialize(process.env.TRACKING_ID || '');

    const handleRouteChange = (url: string) => {
      ReactGA.pageview(url);
    };

    // Initial page load
    ReactGA.pageview(window.location.pathname);

    // Track page views on route change
    router.events.on('routeChangeComplete', handleRouteChange);

        // Additional tracking: Event and Custom Dimension
        ReactGA.event({
          category: 'User',
          action: 'Clicked Button',
          label: 'Register',
        });
    
        ReactGA.set({
          userId: '123', // Replace with your user ID
        });

    // Simulate an async action (e.g., fetching data) and hide the spinner when it's done
    setTimeout(() => {
      setLoading(false);
    }, 5000); // Adjust the time according to your needs

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default MyApp;

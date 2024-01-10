import '../styles/globals.css';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import LoadingSpinner from '@/components/constants/navigation/LoadingSpinner';
import * as ga from '../../lib/ga/analytics'; // Import the ga module containing Google Analytics logic

function MyApp({ Component, pageProps }: { Component: React.ComponentType; pageProps: any }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageview(url); // Call Google Analytics pageview on route change
    };

        // Function to handle initial page load tracking
        const trackInitialPageLoad = () => {
          ga.pageview(window.location.pathname);
        };
    
        // Track initial page load
        trackInitialPageLoad();
    

    // Simulate an async action (e.g., fetching data) and hide the spinner when it's done
    setTimeout(() => {
      setLoading(false);
    }, 5000); // Adjust the time according to your needs

    // When the component is mounted, subscribe to router changes and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe from the event with the `off` method
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

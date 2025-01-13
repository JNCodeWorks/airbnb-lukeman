import '../styles/globals.css';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import * as ga from '../../lib/ga/analytics'; // Import the ga module containing Google Analytics logic

function MyApp({ Component, pageProps }: { Component: React.ComponentType; pageProps: any }) {
  const router = useRouter();

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

    // When the component is mounted, subscribe to router changes and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}

export default MyApp;

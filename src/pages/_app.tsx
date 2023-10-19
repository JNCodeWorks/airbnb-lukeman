import '../styles/globals.css';
import React, { useEffect, useState } from 'react';
import LoadingSpinner from '@/components/constants/navigation/LoadingSpinner';

function MyApp({ Component, pageProps }: { Component: React.ComponentType, pageProps: any }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an async action (e.g., fetching data) and hide the spinner when it's done
    setTimeout(() => {
      setLoading(false);
    }, 5000); // Adjust the time according to your needs
  }, []);

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

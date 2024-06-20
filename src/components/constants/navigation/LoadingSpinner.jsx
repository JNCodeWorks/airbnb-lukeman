import React from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

const LoadingSpinner = () => (
  <>
                      <NextSeo
                title="Lukeman Airbnb, Homestays & Villas"
      description="Experience comfort and warmth at Lukeman Airbnb, Homestays & Villas – your cozy home away from home. Enjoy hospitality and relaxation for an unforgettable stay."
      canonical="https://www.lukemanbnb.com/"
      openGraph={{
        url: 'https://www.lukemanbnb.com/',
        title: "Lukeman Airbnb, Homestays & Villas",
        description: 'Experience comfort and warmth at Lukeman Airbnb, Homestays & Villas – your cozy home away from home. Enjoy hospitality and relaxation for an unforgettable stay.',
        images: [
          {
            url: 'https://www.lukemanbnb.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flukeman-logo2.e6956bab.png&w=3840&q=75',
            width: 800,
            height: 600,
            alt: "Lukeman Airbnb, Homestays & Villas",
            type: 'image/jpeg',
          },
          {
            url: 'https://www.lukemanbnb.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flukeman-logo2.e6956bab.png&w=3840&q=75',
            width: 900,
            height: 800,
            alt: "Lukeman Airbnb, Homestays & Villas",
            type: 'image/jpeg',
          },
          { url: 'https://www.lukemanbnb.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flukeman-logo2.e6956bab.png&w=3840&q=75' },
          { url: 'https://www.lukemanbnb.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flukeman-logo2.e6956bab.png&w=3840&q=75' },
        ],
        siteName: "Lukeman Airbnb, Homestays & Villas",
                }}
                twitter={{
                   handle: '@handle',
                  site: '@site',
                  cardType: 'summary_large_image',
                }}
            />
      <Head>
       
        <link rel="icon" href="/images/LUKEMAN.COM-LOGO.jpg" />   
      </Head>
  <div className="fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center bg-white z-50">
    <div className="loader">Loading
      <span></span>
    </div>
  </div>
  </>
);

export default LoadingSpinner;

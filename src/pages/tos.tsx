import Layout from '@/components/constants/layout/layout'
import TermsOfService from '@/components/views/terms/tos'
import Head from 'next/head'
import React from 'react'
import { NextSeo } from 'next-seo'
import { useEffect } from 'react'
import ReactGA from 'react-ga';

ReactGA.initialize('G-4YF2N5KEXP');

export default function Tos() {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <div>
      <Head>
      <title>Lukeman Homestays & Airbnb</title>
      <link href="https://fonts.cdnfonts.com/css/reddit-sans" rel="stylesheet"/>
      <link rel="icon" href="/images/logo.png" />    
    </Head>
                    <NextSeo
                title='Lukeman Homestays & Airbnb'
      description="Discover the comfort and warmth of Lukeman Homestays & Airbnb - your home away from home. Immerse yourself in cozy accommodations, where every stay feels like a familiar embrace. Experience the perfect blend of hospitality and relaxation, making your journey an unforgettable experience."
      canonical="https://www.lukeman.com/"
      openGraph={{
        url: 'https://www.lukemanbnb.com',
        title: 'Lukeman Homestays & Airbnb',
        description: 'Discover the comfort and warmth of Lukeman Homestays & Airbnb - your home away from home. Immerse yourself in cozy accommodations, where every stay feels like a familiar embrace. Experience the perfect blend of hospitality and relaxation, making your journey an unforgettable experience.',
        images: [
          {
            url: 'https://lukemanbnb.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.47d75517.png&w=3840&q=75',
            width: 800,
            height: 600,
            alt: 'Lukeman Homestays & Airbnb',
            type: 'image/jpeg',
          },
          {
            url: 'https://lukemanbnb.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.47d75517.png&w=3840&q=75',
            width: 900,
            height: 800,
            alt: 'Lukeman Homestays & Airbnb',
            type: 'image/jpeg',
          },
          { url: 'https://lukemanbnb.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.47d75517.png&w=3840&q=75' },
          { url: 'https://lukemanbnb.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.47d75517.png&w=3840&q=75' },
        ],
        siteName: 'Lukeman Homestays & Airbnb',
                }}
                twitter={{
                   handle: '@handle',
                  site: '@site',
                  cardType: 'summary_large_image',
                }}
            />
      <Layout>
        <TermsOfService/>
      </Layout>
    </div>
  )
}

import React from 'react'
import Layout from '@/components/constants/layout/layout'
import Banner from '@/components/views/contact/banner'
import ContactInfo from '@/components/views/contact/contactInfo'
import ContactForm from '@/components/views/contact/contactForm'
import Head from 'next/head'
import { NextSeo } from 'next-seo'

export default function Contacts() {
  return (
    <div>
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
      <Head>
      <link href="https://fonts.cdnfonts.com/css/reddit-sans" rel="stylesheet"/> 
        <link rel="icon" href="/images/logo.png" />   
      </Head>
      
      <Layout>
        <Banner/>
        <ContactInfo/>
        <ContactForm/>
      </Layout>
    </div>
  )
}

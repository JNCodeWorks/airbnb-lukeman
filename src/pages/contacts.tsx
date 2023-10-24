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
                title="Lukeman Homestays & Airbnb"
      description="Discover the comfort and warmth of Lukeman Homestays & Airbnb - your home away from home. Immerse yourself in cozy accommodations, where every stay feels like a familiar embrace. Experience the perfect blend of hospitality and relaxation, making your journey an unforgettable experience."
      canonical="https://www.lukemanbnb.com"
      openGraph={{
        url: 'https://www.lukemanbnb.com',
        title: 'Lukeman Homestays & Airbnb',
        description: 'Discover the comfort and warmth of Lukeman Homestays & Airbnb - your home away from home. Immerse yourself in cozy accommodations, where every stay feels like a familiar embrace. Experience the perfect blend of hospitality and relaxation, making your journey an unforgettable experience.',
        // images: [
        //   {
        //     url: 'https://www.example.ie/og-image-01.jpg',
        //     width: 800,
        //     height: 600,
        //     alt: 'Og Image Alt',
        //     type: 'image/jpeg',
        //   },
        //   {
        //     url: 'https://www.example.ie/og-image-02.jpg',
        //     width: 900,
        //     height: 800,
        //     alt: 'Og Image Alt Second',
        //     type: 'image/jpeg',
        //   },
        //   { url: 'https://www.example.ie/og-image-03.jpg' },
        //   { url: 'https://www.example.ie/og-image-04.jpg' },
        // ],
        siteName: 'Lukeman Homestays & Airbnb',
                }}
                // twitter={{
                 //   handle: '@handle',
                //   site: '@site',
                //   cardType: 'summary_large_image',
                // }}
            />
      <Head>
        <link href="https://fonts.cdnfonts.com/css/lt-bump-smrd" rel="stylesheet"/> 
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

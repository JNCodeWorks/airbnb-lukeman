import React from 'react'
import Layout from '@/components/constants/layout/layout'
import Banner from '@/components/views/contact/banner'
import ContactInfo from '@/components/views/contact/contactInfo'
import ContactForm from '@/components/views/contact/contactForm'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import { useEffect } from 'react'


export default function Contacts() {
  


  return (
    <div>
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
            url: 'https://lukemanbnb.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FlukemanLogo.44f00735.png&w=3840&q=75',
            width: 800,
            height: 600,
            alt: "Lukeman Airbnb, Homestays & Villas",
            type: 'image/jpeg',
          },
          {
            url: 'https://lukemanbnb.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FlukemanLogo.44f00735.png&w=3840&q=75',
            width: 900,
            height: 800,
            alt: "Lukeman Airbnb, Homestays & Villas",
            type: 'image/jpeg',
          },
          { url: 'https://lukemanbnb.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FlukemanLogo.44f00735.png&w=3840&q=75' },
          { url: 'https://lukemanbnb.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FlukemanLogo.44f00735.png&w=3840&q=75' },
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
       
        <link rel="icon" href="/images/Logo/lukemanLogo.png" type="image/png" />    
      </Head>
      
      <Layout>
        {/* <Banner/> */}
        {/* <ContactInfo/> */}
        <ContactForm/>
      </Layout>
    </div>
  )
}

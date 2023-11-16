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
                title="Lukeman Homestays & Airbnb"
      description="Experience comfort and warmth at Lukeman Homestays & Airbnb – your cozy home away from home. Enjoy hospitality and relaxation for an unforgettable stay."
      canonical="https://www.lukeman.com/"
      openGraph={{
        url: 'https://www.lukemanbnb.com',
        title: "Lukeman Homestays & Airbnb",
        description: 'Experience comfort and warmth at Lukeman Homestays & Airbnb – your cozy home away from home. Enjoy hospitality and relaxation for an unforgettable stay.',
        images: [
          {
            url: 'https://lukemanbnb.com/_ipx/w_3840,q_75/%2F_next%2Fstatic%2Fmedia%2Flukeman-logo2.e6956bab.png?url=%2F_next%2Fstatic%2Fmedia%2Flukeman-logo2.e6956bab.png&w=3840&q=75',
            width: 800,
            height: 600,
            alt: "Lukeman Homestays & Airbnb",
            type: 'image/jpeg',
          },
          {
            url: 'https://lukemanbnb.com/_ipx/w_3840,q_75/%2F_next%2Fstatic%2Fmedia%2Flukeman-logo2.e6956bab.png?url=%2F_next%2Fstatic%2Fmedia%2Flukeman-logo2.e6956bab.png&w=3840&q=75',
            width: 900,
            height: 800,
            alt: "Lukeman Homestays & Airbnb",
            type: 'image/jpeg',
          },
          { url: 'https://lukemanbnb.com/_ipx/w_3840,q_75/%2F_next%2Fstatic%2Fmedia%2Flukeman-logo2.e6956bab.png?url=%2F_next%2Fstatic%2Fmedia%2Flukeman-logo2.e6956bab.png&w=3840&q=75' },
          { url: 'https://lukemanbnb.com/_ipx/w_3840,q_75/%2F_next%2Fstatic%2Fmedia%2Flukeman-logo2.e6956bab.png?url=%2F_next%2Fstatic%2Fmedia%2Flukeman-logo2.e6956bab.png&w=3840&q=75' },
        ],
        siteName: "Lukeman Homestays & Airbnb",
                }}
                twitter={{
                   handle: '@handle',
                  site: '@site',
                  cardType: 'summary_large_image',
                }}
            />
      <Head>
      <link href="https://fonts.cdnfonts.com/css/reddit-sans" rel="stylesheet"/> 
        <link rel="icon" href="/images/LUKEMAN.COM-LOGO.jpg" />   
      </Head>
      
      <Layout>
        <Banner/>
        <ContactInfo/>
        <ContactForm/>
      </Layout>
    </div>
  )
}

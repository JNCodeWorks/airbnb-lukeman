import React from 'react'
import Layout from '@/components/constants/layout/layout'
import Banner from '@/components/views/contact/banner'
import ContactInfo from '@/components/views/contact/contactInfo'
import ContactForm from '@/components/views/contact/contactForm'
import Head from 'next/head'

export default function Contacts() {
  return (
    <div>
      <Head>
        <link href="https://fonts.cdnfonts.com/css/lt-bump-smrd" rel="stylesheet"/>    
      </Head>
      
      <Layout>
        <Banner/>
        <ContactInfo/>
        <ContactForm/>
      </Layout>
    </div>
  )
}

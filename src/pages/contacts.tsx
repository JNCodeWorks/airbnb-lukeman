import React from 'react'
import Layout from '@/components/constants/layout/layout'
import Banner from '@/components/views/contact/banner'
import ContactInfo from '@/components/views/contact/contactInfo'
import ContactForm from '@/components/views/contact/contactForm'

export default function Contacts() {
  return (
    <div>
      <Layout>
        <Banner/>
        <ContactInfo/>
        <ContactForm/>
      </Layout>
    </div>
  )
}

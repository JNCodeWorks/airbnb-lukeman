import Layout from '@/components/constants/layout/layout'
import Banner from '@/components/views/about/banner'
import History from '@/components/views/about/history'
import Locations from '@/components/views/about/locations'
import React from 'react'

export default function About() {
  return (
    <div>
      <Layout>
        <Banner/>
        <Locations/>
        <History/>
      </Layout>
    </div>
  )
}

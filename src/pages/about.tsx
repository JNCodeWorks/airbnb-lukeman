import Layout from '@/components/constants/layout/layout'
import Banner from '@/components/views/about/banner'
import Difference from '@/components/views/about/difference'
import History from '@/components/views/about/history'
import Locations from '@/components/views/about/locations'
import Resort from '@/components/views/about/resort'
import React from 'react'

export default function About() {
  return (
    <div>
      <Layout>
        <Banner/>
        <Locations/>
        <History/>
        <Difference/>
        <Resort/>
      </Layout>
    </div>
  )
}

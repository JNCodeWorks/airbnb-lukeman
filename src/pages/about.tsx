import Layout from '@/components/constants/layout/layout'
import Banner from '@/components/views/about/banner'
import Difference from '@/components/views/about/difference'
import History from '@/components/views/about/history'
import Locations from '@/components/views/about/locations'
import Resort from '@/components/views/about/resort'
import Video from '@/components/views/about/video'
import Head from 'next/head'
import React from 'react'

export default function About() {
  return (
    <div>
      <Head>
        <link href="https://fonts.cdnfonts.com/css/lt-bump-smrd" rel="stylesheet"/>
        <link rel="icon" href="/images/logo.png" />    
      </Head>
      <Layout>
        <Banner/>
        <Locations/>
        <History/>
        <Difference/>
        <Resort/>
        <Video/>
      </Layout>
    </div>
  )
}

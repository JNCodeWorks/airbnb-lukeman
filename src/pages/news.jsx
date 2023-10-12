import React from 'react'
import Layout from '../components/constants/layout/layout'
import Head from 'next/head'
import Banner from '../components/views/blog/banner'
import BlogSection from '../components/views/blog/blog'

export default function Blog() {
  return (
    <div>
      <Head>
        <link href="https://fonts.cdnfonts.com/css/lt-bump-smrd" rel="stylesheet"/>    
      </Head>
      <Layout>
        <Banner/>
        <BlogSection/>
      </Layout>
    </div>
  )
}

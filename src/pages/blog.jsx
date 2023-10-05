import React from 'react'
import Layout from '../components/constants/layout/layout'
import Single from '../components/views/homestays/single'
import Head from 'next/head'

export default function Blog() {
  return (
    <div>
      <Head>
        <link href="https://fonts.cdnfonts.com/css/lt-bump-smrd" rel="stylesheet"/>    
      </Head>
      <Layout>
        <Single/>
      </Layout>
    </div>
  )
}

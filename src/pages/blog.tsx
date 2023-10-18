import React from 'react'
import Layout from '@/components/constants/layout/layout'
import Banner from '@/components/views/blog/banner'
import BlogSection from '@/components/views/blog/blogSection'

export default function Blog() {
  return (
    <div>
      <Layout>
        <Banner/>
        <BlogSection/>
      </Layout>
    </div>
  )
}

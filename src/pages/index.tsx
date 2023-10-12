import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/constants/layout/layout'
import Banner from '@/components/views/home/banner'
import Airbnb from '@/components/views/home/airbnb'
import Homestays from '@/components/views/home/homestays'
import Experience from '@/components/views/home/experience'
import CTA from '@/components/views/home/cta'
import Activities from '@/components/views/home/activities'
import Testimonial from '@/components/views/home/testimonial'
import Head from 'next/head'



const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  return (
    <>
    <Head>
      <link href="https://fonts.cdnfonts.com/css/lt-bump-smrd" rel="stylesheet"/>    
    </Head>
    <Layout>
      <Banner/>
      <Airbnb/>
      <Homestays/>
      <Experience/>
      <CTA/>
      <Activities/>
      <Testimonial/>
    </Layout>
    </>
  )
}

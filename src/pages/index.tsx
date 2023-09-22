import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/constants/layout/layout'
import Banner from '@/components/views/home/banner'
import Airbnb from '@/components/views/home/airbnb'
import Homestays from '@/components/views/home/homestays'
import Experience from '@/components/views/home/experience'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <Banner/>
      <Airbnb/>
      <Homestays/>
      <Experience/>
    </Layout>
  )
}

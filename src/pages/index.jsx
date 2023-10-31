import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import { Inter } from 'next/font/google'
import Layout from '@/components/constants/layout/layout'
import Banner from '@/components/views/home/banner'
import Airbnb from '@/components/views/home/airbnb'
import Homestays from '@/components/views/home/homestays'
import Experience from '@/components/views/home/experience'
import CTA from '@/components/views/home/cta'
import Activities from '@/components/views/home/activities'
import Testimonial from '@/components/views/home/testimonial'
import Link from 'next/link'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import { getBlogPosts } from '../../lib/reviews'

export async function getStaticProps() {
  const blogPosts = await getBlogPosts();
  return {
    props: { blogPosts },
  };
}

const inter = Inter({ subsets: ['latin'] })



export default function Home({blogPosts}) {

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % blogPosts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + blogPosts.length) % blogPosts.length);
  };

    // Automatically advance to the next slide in a loop
    useEffect(() => {
        const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    
        // Clear the interval when the component unmounts to prevent memory leaks
        return () => {
          clearInterval(interval);
        };
      }, [currentIndex]);

  return (
    <>
    <NextSeo
      title="Lukeman Homestays & Airbnb"
      description="Discover the comfort and warmth of Lukeman Homestays & Airbnb - your home away from home. Immerse yourself in cozy accommodations, where every stay feels like a familiar embrace. Experience the perfect blend of hospitality and relaxation, making your journey an unforgettable experience."
      canonical="https://www.canonical.ie/"
      openGraph={{
        url: 'https://www.lukemanbnb.com',
        title: 'Lukeman Homestays & Airbnb',
        description: 'Discover the comfort and warmth of Lukeman Homestays & Airbnb - your home away from home. Immerse yourself in cozy accommodations, where every stay feels like a familiar embrace. Experience the perfect blend of hospitality and relaxation, making your journey an unforgettable experience.',
        // images: [
        //   {
        //     url: 'https://www.example.ie/og-image-01.jpg',
        //     width: 800,
        //     height: 600,
        //     alt: 'Og Image Alt',
        //     type: 'image/jpeg',
        //   },
        //   {
        //     url: 'https://www.example.ie/og-image-02.jpg',
        //     width: 900,
        //     height: 800,
        //     alt: 'Og Image Alt Second',
        //     type: 'image/jpeg',
        //   },
        //   { url: 'https://www.example.ie/og-image-03.jpg' },
        //   { url: 'https://www.example.ie/og-image-04.jpg' },
        // ],
        siteName: 'Lukeman Homestays & Airbnb',
      }}
      // twitter={{
      //   handle: '@handle',
      //   site: '@site',
      //   cardType: 'summary_large_image',
      // }}
    />
    <Head>
      <link href="https://fonts.cdnfonts.com/css/reddit-sans" rel="stylesheet"/>
      <link rel="icon" href="/images/logo.png" />    
    </Head>
    <Layout>
      <Banner/>
      <Airbnb/>
      <Homestays/>
      <Experience/>
      <CTA/>
      <Activities/>
      {/* <Testimonial/> */}
      <div>
      <section className="">
        <div className="lg:w-10/12 mx-auto px-6 py-16">
        <div className='text-center space-y-4'>
        <h2 className='capitalize text-4xl font-bold tracking-wide text-neutral-700'>
                {/* out testimonials */}
                What our happy clients say about us
            </h2>
            
            <div className='max-w-4xl mx-auto mt-9 pb-4'>
                <p className='text-neutral-600'>
                    We pride ourselves in putting our customers first and going out of our way to fulfill our customer&apos;s requirements.
                    Our wide net of customers allows us to learn from different sectors and thus making our experience vast.
                </p>
            </div>
        </div>
          <div className="flex flex-col items- py-6">
            {/* Carousel container */}
            <div className="relative md:order-2">
              <div className="relative grid max-w-lg gap-6 mx-auto md:max-w-none lg:gap-10 lg:grid-cols-1">
                {blogPosts.map((posts, index) => (
                  <div
                    key={posts.sys.id}
                    className={`testimonial-slide ${
                      index === currentIndex ? 'active' : ''
                    }`}
                  >
                    {/* Your slide content here */}
                    <div className="flex flex-col  space-y-8 justify-between flex-1 p-6 items-center justify-center bg-white shadow-lg rounded-xl lg:py-8 lg:px-7">
                      <div className="flex flex-col space-y-2">
                        <h1 className="font-semibold text-neutral-700 text-center text-lg">
                          &quot;{posts.fields.title}&quot;
                        </h1>
                        <p className="text-neutral-600 text-center mx-auto px-6 text-[16px]">
                          &quot;{posts.fields.comment}&quot;
                        </p>
                      </div>
                      <div className="flex flex-col items-center justify-center space-y-4">
                        <div
                          className="flex-shrink-0 relative"
                          style={{ width: '50px', height: '50px' }}
                        >
                          <Image
                            src={"https:" + posts.fields.image.fields.file.url}
                            alt={posts.fields.name}
                            className="block w-full h-full rounded-full"
                            fill
                          />
                        </div>
                        <div className="flex flex-col text-sm items-start">
                          <h1 className="font-semibold text-neutral-700">
                            {posts.fields.name}
                          </h1>
                          <p className="text-neutral-500">{posts.fields.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>     
            </div>
          </div>
          <div className="carousel-controls">
            <button className="prev-button" onClick={prevSlide}>
            <svg fill="none" className='w-6 h-6' stroke="currentColor" stroke-width="4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"></path>
            </svg>
            </button>
            <button className="next-button" onClick={nextSlide}>
            <svg fill="none" className='w-6 h-6' stroke="currentColor" stroke-width="4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
            </svg>
            </button>
          </div>
          <div className="flex md:flex-row flex-col space-y-4 md:space-y-0 md:space-y-0 py-12 justify-center md:space-x-8">
            <Link
              className="bg-[#53afe5] py-4 px-8 capitalize rounded-full text-white text-base font-semibold hover:bg-[#f8a72a] ease-in-out duration-500 hover:text-white"
              href={'/airbnb'}
            >
              explore airbnb
            </Link>
            <Link
              className="bg-white capitalize rounded-full py-4 px-8 text-neutral-600 text-base font-semibold hover:bg-[#53afe5] ease-in-out duration-500 hover:text-white"
              href={'/homestays'}
            >
              explore homestays
            </Link>
          </div>
        </div>
      </section>
    </div>

    </Layout>
    </>
  )
}

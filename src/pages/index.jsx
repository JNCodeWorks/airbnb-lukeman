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
import { FaStar, FaRegStar } from 'react-icons/fa';
import RatingStars from '@/pages/RatingStars'
import { NextSeo } from 'next-seo'
import { getBlogPosts } from '../../lib/reviews'
import { getLatestBlogPosts } from '../../lib/blogUtils';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export async function getStaticProps() {
  const blogPosts = await getBlogPosts();
  const latestBlogPosts = await getLatestBlogPosts(4);
  return {
    props: { blogPosts, latestBlogPosts }, 
  };
}

const inter = Inter({ subsets: ['latin'] })



export default function Home({blogPosts, latestBlogPosts}) {
  
      const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 7000,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
        // Add more settings as per your requirements
      };

      const set = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 7000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
        // Add more settings as per your requirements
      };

  return (
    <>
    <NextSeo
      title="Lukeman Homestays & Airbnb"
      description="Experience comfort and warmth at Lukeman Homestays & Airbnb – your cozy home away from home. Enjoy hospitality and relaxation for an unforgettable stay."
      canonical="https://www.lukeman.com"
      openGraph={{
        url: 'https://www.lukemanbnb.com',
        title: "Lukeman Homestays & Airbnb",
        description: 'Experience comfort and warmth at Lukeman Homestays & Airbnb – your cozy home away from home. Enjoy hospitality and relaxation for an unforgettable stay.',
        images: [
          {
            url: 'https://lukemanbnb.com/_ipx/w_3840,q_75/%2F_next%2Fstatic%2Fmedia%2Flukeman-logo2.e6956bab.png?url=%2F_next%2Fstatic%2Fmedia%2Flukeman-logo2.e6956bab.png&w=3840&q=75',
            width: 800,
            height: 600,
            alt: "Lukeman Homestays & Airbnb",
            type: 'image/jpeg',
          },
          {
            url: 'https://lukemanbnb.com/_ipx/w_3840,q_75/%2F_next%2Fstatic%2Fmedia%2Flukeman-logo2.e6956bab.png?url=%2F_next%2Fstatic%2Fmedia%2Flukeman-logo2.e6956bab.png&w=3840&q=75',
            width: 900,
            height: 800,
            alt: "Lukeman Homestays & Airbnb",
            type: 'image/jpeg',
          },
          { url: 'https://lukemanbnb.com/_ipx/w_3840,q_75/%2F_next%2Fstatic%2Fmedia%2Flukeman-logo2.e6956bab.png?url=%2F_next%2Fstatic%2Fmedia%2Flukeman-logo2.e6956bab.png&w=3840&q=75' },
          { url: 'https://lukemanbnb.com/_ipx/w_3840,q_75/%2F_next%2Fstatic%2Fmedia%2Flukeman-logo2.e6956bab.png?url=%2F_next%2Fstatic%2Fmedia%2Flukeman-logo2.e6956bab.png&w=3840&q=75' },
        ],
        siteName: "Lukeman Homestays & Airbnb",
      }}
      // twitter={{
      //   handle: '@handle',
      //   site: '@site',
      //   cardType: 'summary_large_image',
      // }}
    />
    <Head>
      
      <link rel="icon" href="/images/LUKEMAN.COM-LOGO.jpg" />    
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
            <div className="">
              <Slider {...settings}>
                {blogPosts.map((posts) => (
                  <>
                  <div key={posts.sys.id} className="mx-3">
                    <div className='h-96'>
                    {/* Your slide content here */}
                    <div className="flex flex-col  space-y-8 justify-between flex-1 p-6 items-center justify-center rounded-xl lg:py-8 lg:px-7">
                      <div className="flex flex-col space-y-2">
                        <h1 className="font-semibold text-neutral-700 text-center text-lg">
                          &quot;{posts.fields.title}&quot;
                        </h1>
                        <p className="text-neutral-600 text-center mx-auto px-6 text-[14px]">
                          &quot;{posts.fields.comment}&quot;
                        </p>
                      </div>
                      <div className="flex flex-col items-center justify-center space-y-4">
                    
                        <RatingStars rating={posts.fields.rating} />
                        <div className="flex flex-col text-sm items-start">
                          <h1 className="font-semibold text-neutral-700">
                            {posts.fields.name}
                          </h1>
                          <p className="text-neutral-500">{posts.fields.location}</p>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                  </>
                ))}
              </Slider>     
            </div>
          </div>
          <div className="flex md:flex-row flex-col space-y-4 md:space-y-0 md:space-y-0 justify-center md:space-x-8">
            <Link
              className="bg-[#07286f] py-4 px-8 capitalize rounded-full text-white text-base font-semibold hover:bg-[#1d92ce] ease-in-out duration-500 hover:text-white"
              href={'/airbnb'}
            >
              explore airbnb
            </Link>
            <Link
              className="bg-white capitalize rounded-full py-4 px-8 text-neutral-600 text-base font-semibold hover:bg-[#07286f] ease-in-out duration-500 hover:text-white"
              href={'/homestays'}
            >
              explore homestays
            </Link>
          </div>
        </div>
      </section>
    </div>

    {/* Blog Posts */}
    <div className="container mx-auto lg:w-10/12 px-6 py-16">
    <div className='text-center pb-8'>
      <h2 className='capitalize text-4xl font-bold tracking-wide text-neutral-700'>
        Our Article Library
      </h2>
    </div>
      <Slider {...set}>
        {latestBlogPosts.map((post) => (
                    <div key={post.sys.id} className='card-container'>
                    <div className=' bg-white rounded-sm shadow-sm overflow-hidden mx-4 h-full'>
                    <div className="relative flex-shrink-0 overflow-hidden h-72">
                        <Image src={"https:" + post.fields.image.fields.file.url} alt={post.fields.title} className="object-cover hover:scale-125 ease-in-out duration-500" fill/>
                        <div className="bg-white absolute top-0 left-0">
                            <p className="text-base leading-4 py-3 px-5 capitalize text-gray-800">{post.fields.type}</p>
                        </div>
                    </div>
                    <div className='bg-white p-4'>
                    <p className="text-sm font-light leading-4 capitalize text-neutral-500 py-3 italic">by {post.fields.author}</p>
                    {/* <h1 className="text-2xl font-semibold leading-7 sm:pr-20 mt-2 text-neutral-700">{posts.fields.title}</h1> */}
                    <Link href={`/blog/${post.fields.slug}`} className="capitalize text-2xl font-semibold text-neutral-700 sm:pr-20 mt-2 tracking-wide text-lg hover:text-[#1d92ce] ease-in-out duration-500">
                        <h1>{post.fields.title}</h1>
                    </Link>
                    <p className="text-base leading-normal mt-4 sm:pr-20 md:pr-10 text-neutral-600">{post.fields.description}</p>
                    <div className='mt-4 w-full py-4'>
                      <Link href={`/blog/${post.fields.slug}`} className="rounded-md px-4 py-2 w-full bg-[#07286f] hover:bg-[#1d92ce] ease-in-out duration-500 capitalize text-white">read more</Link>
                    </div>
                    </div>
                </div>
                </div>
        ))}
      </Slider>
    </div>

    </Layout>
    </>
  )
}

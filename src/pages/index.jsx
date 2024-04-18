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
import Link from 'next/link'
import Head from 'next/head'
import { FaStar, FaRegStar } from 'react-icons/fa';
import RatingStars from '@/pages/RatingStars'
import { NextSeo } from 'next-seo'
import { getComments } from '../../lib/reviews'
import { getLatestBlogPosts } from '../../lib/blogUtils';
import { getLatestAirbnb } from '../../lib/homeAirbnb';
import { getLatestHomestays } from '../../lib/homeHomestays'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export async function getStaticProps() {
  const Comments = await getComments();
  const latestBlogPosts = await getLatestBlogPosts(4);
  const LatestAirbnb = await getLatestAirbnb (5);
  const LatestHomestays = await getLatestHomestays (5);
  return {
    props: { Comments, latestBlogPosts, LatestAirbnb, LatestHomestays }, 
  };
}

const inter = Inter({ subsets: ['latin'] })



export default function Home({Comments, latestBlogPosts, LatestAirbnb, LatestHomestays}) {
  
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

      const setters = {
        dots: true,
        infinite: true,
        speed: 1000,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 3000,
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
        dots: true,
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

      const bnb = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
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

      const formatDate = (timestamp) => {
        const months = [
          'January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December'
        ];
    
        const date = new Date(timestamp);
        const month = months[date.getMonth()];
        const day = date.getDate();
        const year = date.getFullYear();
    
        return `${month} ${day}, ${year}`;
      };

  return (
    <>
    <NextSeo
      title="Lukeman Homestays & Airbnb"
      description="Experience comfort and warmth at Lukeman Homestays & Airbnb – your cozy home away from home. Enjoy hospitality and relaxation for an unforgettable stay."
      canonical="https://www.lukemanbnb.com"
      openGraph={{
        url: 'https://www.lukemanbnb.com/',
        title: "Lukeman Homestays & Airbnb",
        description: 'Experience comfort and warmth at Lukeman Homestays & Airbnb – your cozy home away from home. Enjoy hospitality and relaxation for an unforgettable stay.',
        images: [
          {
            url: 'https://www.lukemanbnb.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flukeman-logo2.e6956bab.png&w=3840&q=75',
            width: 800,
            height: 600,
            alt: "Lukeman Homestays & Airbnb",
            type: 'image/jpeg',
          },
          {
            url: 'https://www.lukemanbnb.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flukeman-logo2.e6956bab.png&w=3840&q=75',
            width: 900,
            height: 800,
            alt: "Lukeman Homestays & Airbnb",
            type: 'image/jpeg',
          },
          { url: 'https://www.lukemanbnb.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flukeman-logo2.e6956bab.png&w=3840&q=75' },
          { url: 'https://www.lukemanbnb.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flukeman-logo2.e6956bab.png&w=3840&q=75' },
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
      <meta name="google-site-verification" content="bXvgTpvmVs9DLNq0HpHpZJh5NxpsD3xU7DgGOD84luU" />
    </Head>
    <Layout>
      <Banner/>
      {/* <Airbnb/> */}

      <div className='lg:w-10/12 mx-auto px-6 py-16'>
      <div className='flex lg:flex-row flex-col lg:items-center space-y-4 lg:space-y-0 items-start justify-between'>
        <h1 className='text-neutral-700 text-[34px] capitalize font-bold leading-[50px]'>
            Discover Our Airbnb Listings
        </h1>
        <Link href={'/airbnb'} className={'px-8 py-3 border bg-white rounded-full text-neutral-700 capitalize hover:text-white hover:bg-[#1d92ce] ease-in-out duration-500 font-medium'}>Browse All</Link>
      </div>
      <div className='mt-8'>
      <Slider {...setters}>
      {
                                LatestAirbnb.map ((posts) => (

                                  <>
                                  <div className=" mx-3 bg-white rounded-sm shadow-md overflow-hidden mx-3" key={posts.sys.id}>
                                      {/* <div className="flex-shrink-0 relative overflow-hidden h-60" id="Header">
                                          <Image src={"https:" + posts.fields.image.fields.file.url} alt={posts.fields.name} className="object-cover hover:scale-125 ease-in-out duration-500" fill/>
                                      </div> */}
                                      
                                      <Slider {...bnb}>
                                          {posts.fields.gallery.map((image) => (
                                            <div key={image.sys.id} className="flex-shrink-0 relative overflow-hidden h-72">
                                              <Image
                                                src={"https:" + image.fields.file.url}
                                                alt={image.fields.title}
                                                className="object-cover hover:scale-125 ease-in-out duration-500"
                                                fill
                                              />
                                            </div>
                                          ))}
                                        </Slider>
                                      
                                      <div className="flex-1 bg-white p-6 flex flex-col justify-between rounded-b-lg">
                                          <div className="flex-1 space-y-2">
                                             <button><Link href={`/airbnb/${posts.fields.slug}`} className="capitalize font-bold text-neutral-700 tracking-wide text-lg hover:text-[#1d92ce] ease-in-out duration-500">
                                                      <h1>{posts.fields.name}</h1>
                                              </Link></button>
                                              <p className="capitalize text-sm text-neutral-600">{posts.fields.description}</p>
                                          </div>
                                          <div className=" flex flex-row justify-between py-8">
                                              <p className="flex flex-row text-sm text-neutral-700 mb-2"> <span className="text-[#1d92ce] mr-2 text-sm">
                                                <svg fill="none" className='w-5 h-5' stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path>
                                                  </svg>
                                                  </span>{posts.fields.guests} Guest(s)</p>
                                              <p className="flex flex-row text-sm text-neutral-700 mb-2">
                                                  <span className="text-[#1d92ce] mr-2 text-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor">
                                                <g clip-path="url(#clip0_1610_32377)">
                                                <path d="M1.83303 7.5H14.1664C14.52 7.5 14.8591 7.64048 15.1092 7.89052C15.3592 8.14057 15.4997 8.47971 15.4997 8.83333V12H0.499695V8.83333C0.499695 8.47971 0.640171 8.14057 0.890219 7.89052C1.14027 7.64048 1.47941 7.5 1.83303 7.5V7.5Z"  stroke-width="1.35954" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M0.499695 12V14" stroke-width="1.35954" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M15.4996 12V14"  stroke-width="1.35954" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M13.9998 7.5V3C13.9998 2.73478 13.8944 2.48043 13.7069 2.29289C13.5193 2.10536 13.265 2 12.9998 2H2.99976C2.73454 2 2.48019 2.10536 2.29265 2.29289C2.10511 2.48043 1.99976 2.73478 1.99976 3V7.5" stroke-width="1.35954" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M5.6663 5H10.333C10.5098 5 10.6793 5.07024 10.8044 5.19526C10.9294 5.32029 10.9996 5.48986 10.9996 5.66667V7.5H4.99963V5.66667C4.99963 5.48986 5.06987 5.32029 5.1949 5.19526C5.31992 5.07024 5.48949 5 5.6663 5V5Z" stroke-width="1.35954" stroke-linecap="round" stroke-linejoin="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_1610_32377">
                                                <rect width="18" height="18" fill="white"/>
                                                </clipPath>
                                                </defs>
                                                </svg>
                                                  </span>{posts.fields.bedrooms} Bedroom(s)</p>
                                          </div>
                                          <div className="mt-2 border-t w-full border-neutral-600 pt-8 md:flex md:items-center md:justify-between"></div>
                                          <div className="flex-1 -mt-2">
                                              <div className="flex flex-row items-center justify-between">
                                                  <h4 className="pb-2 text-neutral-700">
                                                      <span className="text-2xl font-bold">Kshs. {posts.fields.price}</span> per night
                                                  </h4>
                                                  <Link href={`/airbnb/${posts.fields.slug}`} className="rounded-md px-4 py-2 bg-[#07286f] hover:bg-[#1d92ce] ease-in-out duration-500 capitalize text-white">book now</Link>
                                              </div>
                                          </div>
                                      </div>  
                                  </div>
                                  </>
                                  ))
          }
          </Slider>
      </div>
    </div>

      {/* <Homestays/> */}
      <div className='lg:w-10/12 mx-auto px-6 py-16'>
      <div className='flex lg:flex-row flex-col lg:items-center space-y-4 lg:space-y-0 items-start justify-between'>
        <h1 className='text-neutral-700 text-[34px] capitalize font-bold leading-[50px]'>
            Discover Our Homestay Listings
        </h1>
        <Link href={'/homestays'} className={'px-8 py-3 border bg-white rounded-full text-neutral-700 capitalize hover:text-white hover:bg-[#1d92ce] ease-in-out duration-500 font-medium'}>Browse All</Link>
      </div>
      <div className='mt-8'>
      <Slider {...setters}>
      {
                                LatestHomestays.map ((posts) => (

                                  <>
                                  <div className=" mx-3 bg-white rounded-sm shadow-md overflow-hidden mx-3" key={posts.sys.id}>
                                      {/* <div className="flex-shrink-0 relative overflow-hidden h-60" id="Header">
                                          <Image src={"https:" + posts.fields.image.fields.file.url} alt={posts.fields.name} className="object-cover hover:scale-125 ease-in-out duration-500" fill/>
                                      </div> */}
                                      
                                      <Slider {...bnb}>
                                          {posts.fields.gallery.map((image) => (
                                            <div key={image.sys.id} className="flex-shrink-0 relative overflow-hidden h-72">
                                              <Image
                                                src={"https:" + image.fields.file.url}
                                                alt={image.fields.title}
                                                className="object-cover hover:scale-125 ease-in-out duration-500"
                                                fill
                                              />
                                            </div>
                                          ))}
                                        </Slider>
                                      
                                      <div className="flex-1 bg-white p-6 flex flex-col justify-between rounded-b-lg">
                                          <div className="flex-1 space-y-2">
                                             <button><Link href={`/homestays/${posts.fields.slug}`} className="capitalize font-bold text-neutral-700 tracking-wide text-lg hover:text-[#1d92ce] ease-in-out duration-500">
                                                      <h1>{posts.fields.name}</h1>
                                              </Link></button>
                                              <p className="capitalize text-sm text-neutral-600">{posts.fields.description}</p>
                                          </div>
                                          <div className=" flex flex-row justify-between py-8">
                                              <p className="flex flex-row text-sm text-neutral-700 mb-2"> <span className="text-[#1d92ce] mr-2 text-sm">
                                                <svg fill="none" className='w-5 h-5' stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path>
                                                  </svg>
                                                  </span>{posts.fields.guests} Guest(s)</p>
                                              <p className="flex flex-row text-sm text-neutral-700 mb-2">
                                                  <span className="text-[#1d92ce] mr-2 text-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor">
                                                <g clip-path="url(#clip0_1610_32377)">
                                                <path d="M1.83303 7.5H14.1664C14.52 7.5 14.8591 7.64048 15.1092 7.89052C15.3592 8.14057 15.4997 8.47971 15.4997 8.83333V12H0.499695V8.83333C0.499695 8.47971 0.640171 8.14057 0.890219 7.89052C1.14027 7.64048 1.47941 7.5 1.83303 7.5V7.5Z"  stroke-width="1.35954" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M0.499695 12V14" stroke-width="1.35954" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M15.4996 12V14"  stroke-width="1.35954" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M13.9998 7.5V3C13.9998 2.73478 13.8944 2.48043 13.7069 2.29289C13.5193 2.10536 13.265 2 12.9998 2H2.99976C2.73454 2 2.48019 2.10536 2.29265 2.29289C2.10511 2.48043 1.99976 2.73478 1.99976 3V7.5" stroke-width="1.35954" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M5.6663 5H10.333C10.5098 5 10.6793 5.07024 10.8044 5.19526C10.9294 5.32029 10.9996 5.48986 10.9996 5.66667V7.5H4.99963V5.66667C4.99963 5.48986 5.06987 5.32029 5.1949 5.19526C5.31992 5.07024 5.48949 5 5.6663 5V5Z" stroke-width="1.35954" stroke-linecap="round" stroke-linejoin="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_1610_32377">
                                                <rect width="18" height="18" fill="white"/>
                                                </clipPath>
                                                </defs>
                                                </svg>
                                                  </span>{posts.fields.bedrooms} Bedroom(s)</p>
                                          </div>
                                          <div className="mt-2 border-t w-full border-neutral-600 pt-8 md:flex md:items-center md:justify-between"></div>
                                          <div className="flex-1 -mt-2">
                                              <div className="flex flex-row items-center justify-between">
                                                  <h4 className="pb-2 text-neutral-700">
                                                      <span className="text-2xl font-bold">Kshs. {posts.fields.price}</span> per night
                                                  </h4>
                                                  <Link href={`/homestays/${posts.fields.slug}`} className="rounded-md px-4 py-2 bg-[#07286f] hover:bg-[#1d92ce] ease-in-out duration-500 capitalize text-white">book now</Link>
                                              </div>
                                          </div>
                                      </div>  
                                  </div>
                                  </>
                                  ))
          }
          </Slider>
      </div>
    </div>  

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
                {Comments.map((posts) => (
                  <>
                  <div key={posts.sys.id} className="mx-3">
                    <div className='h-96 bg-gray-200'>
                    {/* Your slide content here */}
                    <div className="flex flex-col  space-y-8 justify-between flex-1 p-6 items-start rounded-xl lg:py-8 lg:px-7">
                      <div className="flex flex-col space-y-4">
                        <h1 className="font-semibold text-neutral-700 text-start px-6 text-lg">
                          &quot;{posts.fields.title}&quot;
                        </h1>
                        <p className="text-neutral-600 text-start mx-auto px-6 text-[14px]">
                          &quot;{posts.fields.comment}&quot;
                        </p>
                      </div>
                      <div className="flex flex-col items-start px-6 justify-center space-y-4">
                    
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
                    <p className="text-sm font-medium leading-4 capitalize text-neutral-500 py-3 ">{formatDate(post.sys.createdAt)}</p>
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

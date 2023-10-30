import React from 'react'
import { getBlogPosts } from '../../../lib/blogpost'
import Layout from '../../components/constants/layout/layout'
import Banner from '../../components/views/blog/banner'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

export async function getStaticProps() {
    const blogPosts = await getBlogPosts();
    return {
      props: { blogPosts },
    };
  }


export default function Index({blogPosts}) {
  return (
    <div>
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
        {/* <BlogSection/> */}
        <div>
        <div className='lg:w-10/12 mx-auto px-6 py-16'>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 ">
            {
                blogPosts.map ((posts) => (
                    <div key={posts.sys.id}>
                        <div className='mx-3 bg-white rounded-sm shadow-sm overflow-hidden'>
                        <div className="relative flex-shrink-o h-72">
                            <Image src={"https:" + posts.fields.image.fields.file.url} alt={posts.fields.title} className="object-cover hover:scale-125 ease-in-out duration-500" fill/>
                            <div className="bg-white absolute top-0 left-0">
                                <p className="text-base leading-4 py-3 px-5 capitalize text-gray-800">{posts.fields.type}</p>
                            </div>
                        </div>
                        <div className='bg-white p-4'>
                        <p className="text-sm font-light leading-4 capitalize text-neutral-500 py-3 italic">by {posts.fields.author}</p>
                        {/* <h1 className="text-2xl font-semibold leading-7 sm:pr-20 mt-2 text-neutral-700">{posts.fields.title}</h1> */}
                        <Link href={`/blog/${posts.fields.slug}`} className="capitalize text-2xl font-semibold text-neutral-700 sm:pr-20 mt-2 tracking-wide text-lg hover:text-[#f8a72a] ease-in-out duration-500">
                            <h1>{posts.fields.title}</h1>
                        </Link>
                        <p className="text-base leading-normal mt-4 sm:pr-20 md:pr-10 text-neutral-600">{posts.fields.description}</p>
                        <div className='mt-4 w-full py-4'>
                          <Link href={`/blog/${posts.fields.slug}`} className="rounded-md px-4 py-2 w-full bg-[#53afe5] hover:bg-[#f8a72a] ease-in-out duration-500 capitalize text-white">read more</Link>
                        </div>
                        </div>
                    </div>
                    </div>
                ))
            }
            </div>
        </div>
        </div>
      </Layout>
    </div>
  )
}

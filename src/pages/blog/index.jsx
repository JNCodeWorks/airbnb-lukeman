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
      description="Experience comfort and warmth at Lukeman Homestays & Airbnb – your cozy home away from home. Enjoy hospitality and relaxation for an unforgettable stay."
      canonical="https://www.lukeman.com/"
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
                twitter={{
                   handle: '@handle',
                  site: '@site',
                  cardType: 'summary_large_image',
                }}
            />
        <Head>
          
            <link rel="icon" href="/images/LUKEMAN.COM-LOGO.jpg" />    
        </Head>
      <Layout>
        <Banner/>
        {/* <BlogSection/> */}
        <div>
        <div className='lg:w-10/12 mx-auto px-6 py-16'>
        <div className="grid lg:grid-cols-3 gap-6 md:grid-cols-2 ">
            {
                blogPosts.map ((posts) => (
                    <div key={posts.sys.id} className='card-container'>
                        <div className=' bg-white rounded-sm shadow-sm overflow-hidden h-full'>
                        <div className="relative flex-shrink-0 overflow-hidden h-72">
                            <Image src={"https:" + posts.fields.image.fields.file.url} alt={posts.fields.title} className="object-cover hover:scale-125 ease-in-out duration-500" fill/>
                            <div className="bg-white absolute top-0 left-0">
                                <p className="text-base leading-4 py-3 px-5 capitalize text-gray-800">{posts.fields.type}</p>
                            </div>
                        </div>
                        <div className='bg-white p-4'>
                        <p className="text-sm font-light leading-4 capitalize text-neutral-500 py-3 italic">by {posts.fields.author}</p>
                        {/* <h1 className="text-2xl font-semibold leading-7 sm:pr-20 mt-2 text-neutral-700">{posts.fields.title}</h1> */}
                        <Link href={`/blog/${posts.fields.slug}`} className="capitalize text-2xl font-semibold text-neutral-700 sm:pr-20 mt-2 tracking-wide text-lg hover:text-[#1d92ce] ease-in-out duration-500">
                            <h1>{posts.fields.title}</h1>
                        </Link>
                        <p className="text-base leading-normal mt-4 sm:pr-20 md:pr-10 text-neutral-600">{posts.fields.description}</p>
                        <div className='mt-4 w-full py-4'>
                          <Link href={`/blog/${posts.fields.slug}`} className="rounded-md px-4 py-2 w-full bg-[#07286f] hover:bg-[#1d92ce] ease-in-out duration-500 capitalize text-white">read more</Link>
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

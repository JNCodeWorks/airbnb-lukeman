import React from 'react'
import { getBlogPostBySlug } from "../../../lib/blogpost";
import { getBlogPosts } from "../../../lib/blogpost";
import Layout from '../../components/constants/layout/layout';
import ReactMarkdown from 'react-markdown';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

export async function getStaticPaths () {
    const blogPosts = await getBlogPosts ();
    const paths = blogPosts.map ((post) => ({params: {slug: post.fields.slug}}));
    return{
        paths,
        fallback: false,
    };
}

export async function getStaticProps ({ params }) {
    const { slug } = params;
    const blogPost = await getBlogPostBySlug(slug);
    return {
        props: { blogPost },
    };
}

export default function BlogPost ({blogPost}) {
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
            <div className='w-full single bg-cover bg-center'>
            <div className='bannerOverlay h-96 flex flex-col justify-center text-white'>
            <div className="lg:w-10/12 mx-auto px-6 w-full">
            <div className="xl:text-4xl pt-12 md:text-3xl flex flex-col space-y-6 text-2xl text-left">
                <h1 className="font-medium capitalize "> {blogPost.fields.title} </h1>  
            </div>
            <div className={'lg:flex  flex-col justify-between start py-4'}>
                        <div className={'block box-border'}>
                            <ul className={'flex flex-row space-x-4 items-center  text-white'}>
                                <li className='capitalize hover:text-[#07286f] ease-in-out duration-300'>
                                    <Link href={'/'}> home </Link>
                                </li>
                                <li className=''>
                                    <svg className='h-4 w-4' fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                                    </svg>
                                </li>
                                <li className='capitalize hover:text-[#07286f] ease-in-out duration-300'>
                                    <Link href={'/blog'}> blog </Link> 
                                </li>
                                <li className=''>
                                    <svg className='h-4 w-4' fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                                    </svg>
                                </li>
                                <li className='capitalize'>{blogPost.fields.title}</li>
                            </ul>
                        </div>
                    </div>
            </div>
            </div>
            </div>

            <div className='lg:w-10/12 mx-auto px-6 py-16'>

                <div className='prose px-6 lg:mx-auto lg:max-w-6xl gap-8'>
                <h1 className='text-center text-[#07286f] font-bold max-w-3xl mx-auto capitalize text-3xl'>
                    {blogPost.fields.description}
                </h1>
                <p className='text-neutral-500 text-center font-semibold capitalize text-base italic'> ~ by: {blogPost.fields.author}</p>
                <div className='border-t-2 mx-auto border-[#1d92ce] -mt-5 w-1/4 max-w-sm'></div>
                <div className='flex-shrink-0 relative h-[720px] mx-6 mt-8'>
                    <Image src={"https:" + blogPost.fields.image.fields.file.url} alt={blogPost.fields.title} className='object-cover' fill/>
                </div>
                    <ReactMarkdown className="mx-auto px-6 w-full text-neutral-600"> 
                        {blogPost.fields.body}
                    </ReactMarkdown>
                </div>
            </div>
        </Layout>
    </div>
  )
}

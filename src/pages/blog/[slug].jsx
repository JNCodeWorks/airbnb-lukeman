import React from 'react'
import { getBlogPostBySlug } from "../../../lib/blogpost";
import { getBlogPosts } from "../../../lib/blogpost";
import { getLatestBlogPosts } from '../../../lib/blogUtils';
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
    const latestBlogPosts = await getLatestBlogPosts(10);
    return {
        props: { blogPost, latestBlogPosts },
    };
}

export default function BlogPost ({blogPost, latestBlogPosts}) {

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

      const contentfulLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}&fm=webp`
      }

  return (
    <div>
                    <NextSeo
                title="Lukeman Airbnb, Homestays & Villas"
      description="Experience comfort and warmth at Lukeman Airbnb, Homestays & Villas – your cozy home away from home. Enjoy hospitality and relaxation for an unforgettable stay."
      canonical="https://www.lukemanbnb.com/"
      openGraph={{
        url: 'https://www.lukemanbnb.com/',
        title: "Lukeman Airbnb, Homestays & Villas",
        description: 'Experience comfort and warmth at Lukeman Airbnb, Homestays & Villas – your cozy home away from home. Enjoy hospitality and relaxation for an unforgettable stay.',
        images: [
          {
            url: 'https://www.lukemanbnb.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flukeman-logo2.e6956bab.png&w=3840&q=75',
            width: 800,
            height: 600,
            alt: "Lukeman Airbnb, Homestays & Villas",
            type: 'image/jpeg',
          },
          {
            url: 'https://www.lukemanbnb.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flukeman-logo2.e6956bab.png&w=3840&q=75',
            width: 900,
            height: 800,
            alt: "Lukeman Airbnb, Homestays & Villas",
            type: 'image/jpeg',
          },
          { url: 'https://www.lukemanbnb.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flukeman-logo2.e6956bab.png&w=3840&q=75' },
          { url: 'https://www.lukemanbnb.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flukeman-logo2.e6956bab.png&w=3840&q=75' },
        ],
        siteName: "Lukeman Airbnb, Homestays & Villas",
                }}
                twitter={{
                   handle: '@handle',
                  site: '@site',
                  cardType: 'summary_large_image',
                }}
            />
        <Head>
            
            <link rel="icon" href="/images/Logo/lukemanLogo.png" type="image/png" /> 
        </Head>
        <Layout>
            <div className='w-full relative bg-cover bg-center'>
            <Image
              loader={contentfulLoader}
              src={"https:" + blogPost.fields.image.fields.file.url}
              alt={blogPost.fields.name}
              className="object-cover hover:scale-125 ease-in-out duration-500"
              placeholder="blur"
              blurDataURL={`${"https:" + blogPost.fields.image.fields.file.url}?w=10&q=10`}
              width={800}
              height={800} 
              style={{height: "550px", width: "100vw"}}
            />
            <div className='absolute top-0 left-0 w-full h-full bg-neutral-900 opacity-80 flex flex-col justify-center text-white'>
            <div className="lg:w-10/12 mx-auto px-6 w-full ">
            <div className="xl:text-4xl pt-12 md:text-3xl flex flex-col space-y-6 text-2xl text-left">
                <h1 className="font-semibold capitalize "> {blogPost.fields.title} </h1>
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
                <div className='grid md:grid-cols-4 md:divide-x-2 md:divide-[#1d92ce] gap-4'>
                <div className='md:col-span-3 prose lg:mx-auto lg:max-w-6xl gap-8'>
                <h1 className='text-center text-[#07286f] font-bold mx-auto capitalize lg:text-3xl text-xl'>
                    {blogPost.fields.description}
                </h1>
                <p className='text-neutral-500 text-center md:space-x-6 grid md:block font-semibold capitalize text-base italic'> <span>~ by: {blogPost.fields.author}</span> <span>{formatDate(blogPost.sys.createdAt)}</span> </p>
                {/* <p className="text-sm font-medium leading-4 capitalize text-neutral-500 py-3 "></p> */}
                <div className='border-t-2 mx-auto border-[#1d92ce] -mt-5 w-2/4 max-w-sm'></div>
                <div className='flex-shrink-0 relative lg:h-[480px] h-[360px] mx-6 mt-8'>
                <Image
                loader={contentfulLoader}
                src={"https:" + blogPost.fields.image.fields.file.url}
                alt={blogPost.fields.name}
                className="object-cover"
                placeholder="blur"
                blurDataURL={`${"https:" + blogPost.fields.image.fields.file.url}?w=10&q=10`}
                fill
                />
                </div>
                    <ReactMarkdown className="mx-auto px-6 pt-12 w-full text-neutral-600"> 
                        {blogPost.fields.body}
                    </ReactMarkdown>
                </div>
                <div className='px-2'>
                    <p className='text-center text-lg font-semibold text-[#07286f]'>Recent Posts</p>
                {
                latestBlogPosts.map ((posts) => (
                    <div key={posts.sys.id} className='md:pl-4 py-2'>
                        <div className=' bg-white rounded-sm shadow-sm overflow-hidden'>
                        <div className='bg-white p-4'>
                        <p className="text-sm font-medium leading-4 capitalize text-neutral-500 py-3 ">{formatDate(posts.sys.createdAt)}</p>
                        {/* <h1 className="text-2xl font-semibold leading-7 sm:pr-20 mt-2 text-neutral-700">{posts.fields.title}</h1> */}
                        <Link href={`/blog/${posts.fields.slug}`} className="capitalize text-[16px] font-semibold text-neutral-500 sm:pr-20 mt-2 tracking-wide hover:text-[#1d92ce] ease-in-out duration-500">
                            <h1>{posts.fields.title}</h1>
                        </Link>
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

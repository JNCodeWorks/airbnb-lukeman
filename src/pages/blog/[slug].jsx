import React from 'react'
import { getBlogPostBySlug } from "../../../lib/blogpost";
import { getBlogPosts } from "../../../lib/blogpost";
import Layout from '../../components/constants/layout/layout';
import ReactMarkdown from 'react-markdown';
import Head from 'next/head';
import Image from 'next/image';
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
            {/* <title>{blogPost.fields.title}</title> */}
            <link href="https://fonts.cdnfonts.com/css/reddit-sans" rel="stylesheet"/>
            <link rel="icon" href="/images/logo.png" />
        </Head>
        <Layout>
            <div className='w-full single bg-cover bg-center'>
            <div className='bannerOverlay h-96 flex flex-col justify-center text-white'>
            <div className="lg:w-10/12 mx-auto px-6 w-full">
            <div className="xl:text-4xl pt-12 md:text-3xl flex flex-col space-y-6 text-2xl text-left">
                <h1 className="font-medium capitalize "> {blogPost.fields.title} </h1>
                <p className='text-white font-semiblod capitalize text-sm italic'> ~ by: {blogPost.fields.author}</p>
                {/* <p className='text-base max-w-prose capitalize'> {blogPost.fields.description} </p> */}
            </div>
            </div>
            </div>
            </div>

            <div className='lg:w-10/12 mx-auto px-6 py-16'>

                <div className='prose px-6 lg:mx-auto lg:max-w-6xl gap-8'>
                <h1 className='text-center text-[#53afe5] font-bold capitalize text-2xl'>
                    {blogPost.fields.description}
                </h1>
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

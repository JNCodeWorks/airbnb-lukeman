import React from 'react'
import { getBlogPostBySlug } from "../../../lib/blogpost";
import { getBlogPosts } from "../../../lib/blogpost";
import Layout from '../../components/constants/layout/layout';
import ReactMarkdown from 'react-markdown';
import Head from 'next/head';

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
        <Head>
            <title>{blogPost.fields.title}</title>
            <link rel="icon" href="/images/logo.png" />
        </Head>
        <Layout>
            <div className='w-full single bg-cover bg-center'>
            <div className='bannerOverlay h-96 flex flex-col justify-center text-white'>
            <div className="lg:w-10/12 mx-auto px-6 w-full">
            <div className="xl:text-5xl pt-12 md:text-3xl flex flex-col space-y-6 text-2xl text-left">
                <h1 className="font-medium capitalize "> {blogPost.fields.title} </h1>
                <p className='text-base max-w-prose capitalize'> {blogPost.fields.description} </p>
            </div>
            </div>
            </div>
            </div>

            <div className='lg:w-10/12 mx-auto px-6 py-16'>
                <div className='grid lg:grid-cols-3 gap-8'>
                    <div className='lg:col-span-2'>
                    <ReactMarkdown className="text-neutral-600 prose w-full prose-neutral"> 
                        {blogPost.fields.body}
                    </ReactMarkdown>
                    </div>

                    <div>
                        
                    </div>
                </div>

            <p className='text-neutral-500 py-2 font-semiblod text-sm'>Published by: {blogPost.fields.author}</p>
            </div>
        </Layout>
    </div>
  )
}

import React from 'react'
import { getBlogPosts } from '../../../lib/blogpost'
import Layout from '../../components/constants/layout/layout'
import Banner from '../../components/views/blog/banner'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import BlogSection from '../../components/views/blog/blogSection'

export async function getStaticProps() {
    const blogPosts = await getBlogPosts();
    return {
      props: { blogPosts },
    };
  }


export default function Index({blogPosts}) {
  return (
    <div>
        <Head>
            <link href="https://fonts.cdnfonts.com/css/lt-bump-smrd" rel="stylesheet"/>
            <link rel="icon" href="/images/logo.png" />    
        </Head>
      <Layout>
        <Banner/>
        {/* <BlogSection/> */}
        <div>
        <div className='lg:w-10/12 mx-auto px-6 py-16'>
        <div className="grid lg:grid-cols-2 gap-8">
            {
                blogPosts.map ((posts) => (
                    <div key={posts.sys.id}>
                        <div className='mx-3 bg-white rounded-sm shadow-md overflow-hidden'>
                        <div className="relative flex-shrink-o h-72">
                            <Image src={"https:" + posts.fields.image.fields.file.url} alt={posts.fields.title} className="object-cover hover:scale-125 ease-in-out duration-500" fill/>
                            <div className="bg-white absolute top-0 left-0">
                                <p className="text-base leading-4 py-3 px-5 capitalize text-gray-800">{posts.fields.type}</p>
                            </div>
                        </div>
                        <div className='bg-white p-4'>
                        <p className="text-sm font-light leading-4 capitalize text-neutral-500 mt-6">by {posts.fields.author}</p>
                        <h1 className="text-2xl font-semibold leading-7 sm:pr-20 mt-2 text-neutral-700">{posts.fields.title}</h1>
                        <p className="text-base leading-normal mt-4 sm:pr-20 md:pr-10 text-neutral-600">{posts.fields.description}</p>
                        <button className="rounded-md px-4 py-2 mt-6 w-full bg-[#53afe5] hover:bg-[#f8a72a] ease-in-out duration-500 capitalize text-white"><Link href={`/blog/${posts.fields.slug}`}>read more</Link></button>
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

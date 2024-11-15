import React from 'react'
import { useState } from 'react'
import { getBlogPosts } from '../../../lib/blogpost'
import Layout from '../../components/constants/layout/layout'
import Banner from '../../components/views/blog/banner'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import ReactPaginate from 'react-paginate'


const PAGE_SIZE = 9;


export async function getStaticProps() {
    const blogPosts = await getBlogPosts();
    return {
      props: { blogPosts },
    };
  }


export default function Index({blogPosts}) {

  const [currentPage, setCurrentPage] = useState(0);

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

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Calculate the total number of pages
  const totalPages = Math.ceil(blogPosts.length / PAGE_SIZE);

  // Calculate the start and end indexes for the current page
  const startIndex = currentPage * PAGE_SIZE;
  const endIndex = (currentPage + 1) * PAGE_SIZE;
  const currentPosts = blogPosts.slice(startIndex, endIndex);

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
          
            <link rel="icon" href="/images/LUKEMAN.COM-LOGO.jpg" />    
        </Head>
      <Layout>
        <Banner/>
        {/* <BlogSection/> */}
        <div>
        <div className='lg:w-10/12 mx-auto px-6 py-16'>
        <div className="grid lg:grid-cols-3 gap-6 md:grid-cols-2 ">
            {
                currentPosts.map ((posts) => (
                    <div key={posts.sys.id} className='card-container'>
                        <div className=' bg-white rounded-sm shadow-sm overflow-hidden h-full'>
                        <div className="relative flex-shrink-0 overflow-hidden h-72">
                        <Image
                          loader={contentfulLoader}
                          src={"https:" + posts.fields.image.fields.file.url}
                          alt={posts.fields.title}
                          className="object-cover hover:scale-125 ease-in-out duration-500"
                          placeholder="blur"
                          blurDataURL={`${"https:" + posts.fields.image.fields.file.url}?w=10&q=10`}
                          fill
                        />
                            <div className="bg-white absolute top-0 left-0">
                                <p className="text-base leading-4 py-3 px-5 capitalize text-gray-800">{posts.fields.type}</p>
                            </div>
                        </div>
                        <div className='bg-white p-4'>
                        <p className="text-sm font-medium leading-4 capitalize text-neutral-500 py-3 ">{formatDate(posts.sys.createdAt)}</p>
                        {/* <h1 className="text-2xl font-semibold leading-7 sm:pr-20 mt-2 text-neutral-700">{posts.fields.title}</h1> */}
                        <Link href={`/blog/${posts.fields.slug}`} className="capitalize text-2xl font-semibold text-neutral-700 sm:pr-20 mt-2 tracking-wide hover:text-[#1d92ce] ease-in-out duration-500">
                            <h1>{posts.fields.title}</h1>
                        </Link>
                        <p className="text-base leading-normal mt-4 text-neutral-600">{posts.fields.description}</p>
                        <div className='mt-4 w-full py-4'>
                          <Link href={`/blog/${posts.fields.slug}`} className="rounded-md px-4 py-2 w-full bg-[#07286f] hover:bg-[#1d92ce] ease-in-out duration-500 capitalize text-white">read more</Link>
                        </div>
                        </div>
                    </div>
                    </div>
                ))
            }
            </div>

            {/* Pagination controls */}
            <div className='py-6'>
            <ReactPaginate
              pageCount={totalPages}
              pageRangeDisplayed={3} // Number of page links to display
              marginPagesDisplayed={2} // Number of pages to display on the edges
              onPageChange={handlePageClick}
              containerClassName={'pagination'}
              activeClassName={'active'}
            />
            </div>
        </div>
        </div>
      </Layout>
    </div>
  )
}

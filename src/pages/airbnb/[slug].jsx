import { getBlogPostBySlug } from "../../../lib/AirBnB";
import { getBlogPosts } from "../../../lib/AirBnB";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/constants/layout/layout";
import { useEffect, useState } from "react";
import { FadeLoader } from "react-spinners";
import ModalImage from "react-modal-image";
import { NextSeo } from "next-seo";



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

function calculateNumberOfNights(checkin, checkout) {
  const checkinDate = new Date(checkin);
  const checkoutDate = new Date(checkout);
  const timeDifference = checkoutDate - checkinDate;
  const nights = Math.ceil(timeDifference / (1000 * 3600 * 24)); // 1 day = 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
  return nights;
}




export default function BlogPost ({ blogPost }) {
  
  const [formData, setFormData] = useState({
    visitor_name: '',
    visitor_email: '',
    visitor_phone: '',
    total_adults: '',
    total_children: '',
    checkin: '',
    checkout: '',
    visitor_message: '',
    subject:blogPost.fields.name
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [minDate, setMinDate] = useState();

  useEffect(() => {
    // Calculate the minimum date (e.g., one day from now) when the component mounts.
    const today = new Date();
    today.setDate(today.getDate() + 0);
    setMinDate(today.toISOString().split('T')[0]);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

        // Calculate the number of nights
        const numberOfNights = calculateNumberOfNights(formData.checkin, formData.checkout);

        // Calculate the total price
        const totalPrice = numberOfNights * blogPost.fields.price;
    
        // Include total price in the form data
        formData.total_price = totalPrice;

      // Check if the visitor_message is empty
  if (formData.visitor_message.trim() === '') {
    // Set a default message
    formData.visitor_message = 'No additional message provided.';
  }

    try {
      const response = await fetch('/api/mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        setIsSuccess(true);
        setFormData({
          visitor_name: '',
          visitor_email: '',
          visitor_phone: '',
          total_adults: '',
          total_children: '',
          checkin: '',
          checkout: '',
          visitor_message: '',
          subject:blogPost.fields.name
        });
      } else {
        const data = await response.json();
        setErrorMessage(data.error);
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred while sending the message.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const calculateTotalPrice = () => {
    // Calculate the number of nights
    const numberOfNights = calculateNumberOfNights(formData.checkin, formData.checkout);

    // Calculate the total price
    const totalPrice = numberOfNights * blogPost.fields.price;

    return totalPrice;
  };

        
return (
        <>
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
                {/* <title>{blogPost.fields.name}</title> */}
                <link href="https://fonts.cdnfonts.com/css/reddit-sans" rel="stylesheet"/>
                <link rel="icon" href="/images/logo.png" />
            </Head>
            <Layout>
            <div className='w-full single bg-cover bg-center'>
            <div className='bannerOverlay h-96 flex flex-col justify-center text-white'>
            <div className="lg:w-10/12 mx-auto px-6 w-full">
            <div className="xl:text-5xl pt-12 md:text-3xl flex flex-col space-y-6 text-2xl text-left">
                <h1 className="font-medium capitalize "> {blogPost.fields.name} </h1>
                <p className='text-base max-w-prose capitalize'> {blogPost.fields.description} </p>
            </div>
            </div>
            </div>
            </div>

            <div className='lg:w-10/12 mx-auto px-6 py-16'>
                <div className='grid lg:grid-cols-3 gap-8'>
                    <div className='lg:col-span-2 space-y-8'>

                        <div className='grid lg:grid-cols-3 gap-4'>
                        <button className='border border-[#f8a72a] justify-center text-sm text-neutral-700 items-center flex space-x-6 rounded-full py-3'>
                        <span>
                        <svg fill="none" className='w-5 h-5' stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path>
                        </svg>
                        </span>
                        <span>{blogPost.fields.guests} Guest(s)</span>
                        </button>

                        <button className='border border-[#f8a72a] justify-center text-sm text-neutral-700 items-center flex space-x-6 rounded-full py-3'>
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none">
                        <g clip-path="url(#clip0_1610_32377)">
                        <path d="M1.83303 7.5H14.1664C14.52 7.5 14.8591 7.64048 15.1092 7.89052C15.3592 8.14057 15.4997 8.47971 15.4997 8.83333V12H0.499695V8.83333C0.499695 8.47971 0.640171 8.14057 0.890219 7.89052C1.14027 7.64048 1.47941 7.5 1.83303 7.5V7.5Z" stroke="#191919" stroke-width="1.35954" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M0.499695 12V14" stroke="#191919" stroke-width="1.35954" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15.4996 12V14" stroke="#191919" stroke-width="1.35954" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M13.9998 7.5V3C13.9998 2.73478 13.8944 2.48043 13.7069 2.29289C13.5193 2.10536 13.265 2 12.9998 2H2.99976C2.73454 2 2.48019 2.10536 2.29265 2.29289C2.10511 2.48043 1.99976 2.73478 1.99976 3V7.5" stroke="#191919" stroke-width="1.35954" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5.6663 5H10.333C10.5098 5 10.6793 5.07024 10.8044 5.19526C10.9294 5.32029 10.9996 5.48986 10.9996 5.66667V7.5H4.99963V5.66667C4.99963 5.48986 5.06987 5.32029 5.1949 5.19526C5.31992 5.07024 5.48949 5 5.6663 5V5Z" stroke="#191919" stroke-width="1.35954" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1610_32377">
                        <rect width="18" height="18" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                        </span>
                        <span>{blogPost.fields.bedrooms} Bedroom(s)</span>
                        </button>

                        <button className='border border-[#f8a72a] justify-center text-sm text-neutral-700 items-center flex space-x-6 rounded-full py-3'>
                            <span className="text-2xl font-bold">Kshs. {blogPost.fields.price}&nbsp;</span> per night
                        </button>

                        </div>

                        <div className='space-y-6'>
                            <h1 className='capitalize text-neutral-700 font-bold text-[32px]'>about the apartment</h1>
                            <ReactMarkdown className="text-neutral-600 prose prose-neutral"> 
                                {blogPost.fields.body}
                            </ReactMarkdown>
                        </div>

                        <div class="border-b border-neutral-500"></div>

                        <div className='space-y-6'>
                            <h1 className='capitalize text-neutral-700 font-bold text-[32px]'>amenities</h1>
                            <ul className='grid lg:grid-cols-3 gap-4 list-disc list-inside space-y-3 text-neutral-700 capitalize'>
                                
                            </ul>
                        </div>
                    </div>

                    <div>      
                    <div className="">
                    {isLoading ? (
                    <p className='text-[24px] flex flex-col space-y-4 justify-center items-center text-center font-bold text-[#53afe5]'>
                      <span><FadeLoader height={20} color="#53afe5"/></span>
                      <span>Sending...</span>
                    </p>
                    ) : isSuccess ? (
                    <p className='text-[24px] flex flex-col space-y-4 justify-center items-center text-center font-bold text-green-600'>
                      <span>
                        <svg fill="none" className="h-16 -w-16" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </span>
                      <span>Message sent successfully!</span>
                    </p>
                    ) : errorMessage ? (
                    <p className='text-[24px] flex flex-col space-y-4 capitalize justify-center items-center text-center font-bold text-red-600'>
                      <span>
                        <svg fill="none" className="h-16 -w-16" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </span>
                      <span>Error: {errorMessage}</span>
                    </p>
                    ) : (  
                      <form className="bg-white mx-auto p-6 rounded-lg max-w-md" onSubmit={handleSubmit}>
                        <div className="mb-4">
                          <label className="block text-neutral-600 font-semibold text-base mb-2" htmlFor="name">
                            Your Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="visitor_name"
                            placeholder="John Doe"
                            value={formData.visitor_name} onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-teal-500"
                            pattern="[A-Za-z\s]{3,20}"
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-neutral-600 font-semibold text-base mb-2" htmlFor="email">
                            Your E-mail
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="visitor_email"
                            value={formData.visitor_email} onChange={handleChange}
                            placeholder="john.doe@email.com"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-teal-500"
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-neutral-600 font-semibold text-base mb-2" htmlFor="phone">
                            Your Phone
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="visitor_phone"
                            value={formData.visitor_phone} onChange={handleChange}
                            placeholder="498-348-3872"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-teal-500"
                            pattern="(\d{3})-?(\d{3})-?(\d{4})"
                            required
                          />
                        </div>
                        <hr className="border-dotted border-gray-300 my-6" />
                        <div className="py-2">
                          <div className="w-full py-1">
                            <label className="block text-neutral-600 font-semibold text-base mb-1" htmlFor="adult">
                              Adults
                            </label>
                            <input
                              type="number"
                              id="adult"
                              name="total_adults"
                              placeholder="2"
                              value={formData.total_adults} onChange={handleChange}
                              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-teal-500"
                              min="1"
                              required
                            />
                          </div>
                          <div className="w-full py-1">
                            <label className="block text-neutral-600 font-semibold text-base mb-1" htmlFor="child">
                              Children
                            </label>
                            <input
                              type="number"
                              id="child"
                              name="total_children"
                              value={formData.total_children} onChange={handleChange}
                              placeholder="2"
                              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-teal-500"
                              min="0"
                              required
                            />
                          </div>
                        </div>
                        <div className="py-2">
                          <div className="w-full py-1">
                            <label className="block text-neutral-600 font-semibold text-base mb-1" htmlFor="checkin-date">
                              Check-in Date
                            </label>
                            <input
                              type="date"
                              id="checkin-date"
                              name="checkin"
                              value={formData.checkin} onChange={handleChange}
                              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-teal-500"
                              required
                              min={minDate}
                            />
                          </div>
                          <div className="w-full py-1">
                            <label className="block text-neutral-600 font-semibold text-base mb-1" htmlFor="checkout-date">
                              Check-out Date
                            </label>
                            <input
                              type="date"
                              id="checkout-date"
                              value={formData.checkout} onChange={handleChange}
                              name="checkout"
                              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-teal-500"
                              required
                              min={minDate}
                            />
                          </div>
                        </div>
                        <div className="mb-4">
                      <label className="block text-neutral-600 font-semibold text-base mb-2" htmlFor="totalPrice">
                        Total Price
                      </label>
                      <input
                        type="text"
                        id="totalPrice"
                        name="total_price"
                        value={`Kshs. ${calculateTotalPrice()}`}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-teal-500"
                        readOnly
                      />
                    </div>
                        <hr className="border-dotted border-gray-300 my-6" />
                        <div className="mb-4">
                          <label className="block text-neutral-600 font-semibold text-base mb-2" htmlFor="message">
                            Anything Else?
                          </label>
                          <textarea
                            id="message"
                            name="visitor_message"
                            value={formData.visitor_message} onChange={handleChange}
                            placeholder="Tell us anything else that might be important."
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-teal-500"
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full bg-[#53afe5] text-white font-semibold text-base py-2 rounded hover:bg-[#f8a72a] ease-in-out duration-500"
                        >
                          Make a Reservation
                        </button>
                        <p className=" text-center py-2 font-semibold text-sm text-neutral-600">You won&apos;t be charged yet</p>
                      </form>
                    )}
                    </div>
                    </div>
                </div>

            <div className='py-16'>
            <div className='flex lg:flex-row flex-col lg:items-center space-y-4 lg:space-y-0 items-start justify-between'>
            <h1 className='text-neutral-700 text-[34px] capitalize font-bold leading-[50px]'>
                gallery
            </h1>
            <Link href={'/#'} className={'px-8 py-3 border bg-white rounded-full text-neutral-700 capitalize hover:text-white hover:bg-[#f8a72a] ease-in-out duration-500 font-medium'}>Book now</Link>
            </div>
            <div>
                {/* <PhotoGallery/> */}
                <div className="grid lg:grid-cols-4 md:grid-cols-2 py-16 gap-8">
                    {blogPost.fields.gallery.map((image) => (
                        <ModalImage
                        className="rounded-lg"
                        key={image.sys.id}
                        small={image.fields.file.url}
                        medium={image.fields.file.url}
                        large={image.fields.file.url}
                        alt={image.title}
                        hideDownload={true}
                        hideZoom={true}
                        hideRotate={true}
                        />
                    ))}
                </div>
            </div>
            </div>
            </div>
            </Layout>
        </div>
        </>
    )
}
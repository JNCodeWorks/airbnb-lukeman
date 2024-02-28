import React, { useState } from 'react'
import Layout from '@/components/constants/layout/layout'
import Head from 'next/head'
import { createClient } from 'contentful-management'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { FaStar } from 'react-icons/fa';

function Comments() {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [comment, setComment] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [rating, setRating] = useState(null);
    const [hoverRating, setHoverRating] = useState(null);
    const router = useRouter();
    
    const handleRatingClick = (ratingValue) => {
      setRating(ratingValue);
  };

  const handleMouseOver = (ratingValue) => {
      setHoverRating(ratingValue);
  };

  const handleMouseLeave = () => {
      setHoverRating(null);
  };

    
    const handleFormSubmit = async (e) => {
        e.preventDefault();
    
        const cmaAccessToken = process.env.NEXT_PUBLIC_CONTENTFUL_CMA_ACCESS_TOKEN;
    
        try {

            setIsSubmitting(true); //Show submitting state

          const client = createClient({ accessToken: cmaAccessToken });
    
          const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID; // Replace with your actual Contentful space ID
    
          // Get your space
          const space = await client.getSpace(spaceId);
          const environment = await space.getEnvironment('master');
          const contentType = await environment.getContentType('reviews');
    
      // Create a new entry with the specified content type ID
      const entry = await environment.createEntry(contentType.sys.id, {
        fields: {
          name: {
            'en-US': name,
          },
          title: {
            'en-US': title,
          },
          location: {
            'en-US': location,
          },
          comment: {
            'en-US': comment,
          },
          rating: {
            'en-US': rating, // Include the rating value here
        },
        },
      });
    
          const createdEntry = await entry.publish();
    
          if (createdEntry.isPublished()) {
            // Handle successful submission, e.g., clear the form
            setIsSuccess(true); // Show success message
            setIsSubmitting(false); // Hide submitting state
            setName('');
            setTitle('');
            setLocation('');
            setComment('');
            setRating(null);
          } else {
            // Set the error message when there's an error
            setErrorMessage('Failed to submit the comment');
          }
        } catch (error) {
          console.error('Error posting comment to Contentful:', error);
          // Set the error message when there's an error
          setErrorMessage('Error: Unable to post your comment. Try again later.');
        } finally {
          setIsSubmitting(false); // Set the submitting state back to false
        }
      };

        // Render the success message and redirect if isSuccess is true
  if (isSuccess) {
    // Redirect to the success page
    router.push('/success');

    // Return null to prevent rendering the form
    return null;
  }

  return (
<div>
<NextSeo
      title="Lukeman Homestays & Airbnb"
      description="Experience comfort and warmth at Lukeman Homestays & Airbnb – your cozy home away from home. Enjoy hospitality and relaxation for an unforgettable stay."
      canonical="https://www.lukemanbnb.com/"
      openGraph={{
        url: 'https://www.lukemanbnb.com',
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
<div className="flex mx-auto items-center justify-center mt-28 pb-28 mx-8 mb-4 max-w-lg">
  <div>
    <h2 className='mx-auto py-4 font-bold text-neutral-600'>Please take a moment to share your thoughts and experiences by leaving a review or providing comments below.</h2>
   <form className="w-full max-w-xl bg-white rounded-lg px-4 pt-2" onSubmit={handleFormSubmit}>
      <div className="flex flex-wrap -mx-3 mb-6">
         <h2 className="px-4 pt-3 pb-2 text-neutral-700 text-base font-semibold"> Your opinion matters to us!  </h2>
         <div className="w-full md:w-full px-3 mb-2 mt-2">
            <input type='text' className="bg-gray-100 text-sm rounded border border-gray-400 leading-normal resize-none w-full h-10 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder='Type Your Name' required/>
         </div>
         <div className="w-full md:w-full px-3 mb-2 mt-2">
            <input type='text' maxLength={256} className="bg-gray-100 text-sm rounded border border-gray-400 leading-normal resize-none w-full h-10 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title. Eg: "The best weekend of my life"' required/>
            <div className="text-sm text-gray-500">Characters remaining: {256 - title.length}</div>
         </div>
         <div className="w-full md:w-full px-3 mb-2 mt-2">
            <input type='text' className="bg-gray-100 text-sm rounded border border-gray-400 leading-normal resize-none w-full h-10 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="location" value={location} onChange={(e) => setLocation(e.target.value)} placeholder='Location. Eg: "Mombasa, Kenya"' required/>
         </div>

         <div className="w-full md:w-full px-3 mb-2 mt-2">
            <textarea className="bg-gray-100 rounded border border-gray-400 leading-normal text-sm resize-none w-full h-40 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="comment" value={comment}  onChange={(e) => setComment(e.target.value)} placeholder='Type Your Comment . . .' required/>
         </div>
         <div className=' w-full md:w-full px-3 mt-2 text-sm text-gray-600'> Please rate our services</div>
         <div className="flex items-center w-full md:w-full px-3 mb-2 mt-2">
                {[...Array(5)].map((star, index) => {
                    const ratingValue = index + 1;
                    return (
                      <label key={index}>
                      <input
                          type="radio"
                          name="rating"
                          value={rating}
                          onClick={() => handleRatingClick(ratingValue)}
                          onMouseOver={() => handleMouseOver(ratingValue)}
                          onMouseLeave={handleMouseLeave}
                          style={{ display: 'none' }} // Hide the radio input
                      />
                      <FaStar
                          className="cursor-pointer"
                          color={(hoverRating || rating) >= ratingValue ? "#ffc107" : "#e4e5e9"}
                          size={30}
                          onMouseOver={() => handleMouseOver(ratingValue)}
                          onMouseLeave={handleMouseLeave}
                      />
                  </label>
                    );
                })}
                {rating && <p className="ml-4 text-xs text-neutral-600 ">{rating} out of 5 stars</p>}
            </div>
         <div className="w-full md:w-full flex items-start md:w-full pt-4 px-3">
            <div className="flex items-start w-1/2 text-red-600 px-2 mr-auto">
               <svg fill="none" className="w-5 h-5 text-red-600 mr-1" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
               </svg>
               <p className="text-xs md:text-sm  pt-px"> All fields are required.</p>
            </div>
            <div className="-mr-1">
            <button
              type="submit"
              className="bg-[#07286f] text-white font-medium py-1 px-4 border border-[#53ae5] rounded-lg tracking-wide mr-1 hover:bg-[#1d92ce] eas-in-out duration-300"
              disabled={isSubmitting} // Disable the button while submitting
            >
              {isSubmitting ? 'Posting your comment . . .' : 'Post a Comment'}
            </button>
            </div>
         </div>
         <div className='w-full mx-auto items-center text-center pt-4 text-red-500 font-bold'>{errorMessage}</div>
         </div>
      </form>
      </div>
   </div>
   </Layout>
   </div>
  )
}

export default Comments
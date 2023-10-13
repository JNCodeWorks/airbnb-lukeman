import { getBlogPostBySlug } from "../../../lib/AirBnB";
import { getBlogPosts } from "../../../lib/AirBnB";
import client from "../../../lib/contentful"
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/constants/layout/layout";
import { useEffect, useState } from "react";
import { PhoneInput } from "react-international-phone";
import 'react-international-phone/style.css';
import ModalImage from "react-modal-image";

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

const isValidEmail = (email) => {
// Use a regular expression to validate the email format
const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
return emailRegex.test(email);
};

const isValidPhone = (phone) => {
const phoneRegex = /^(\+[0-9]{1,3})?[0-9]{10}$/; // Replace with your phone format regex
return phoneRegex.test(phone);
};


export default function BlogPost ({ blogPost }) {
  
const [formData, setFormData] = useState({
  visitor_name: '',
  visitor_email: '',
  visitor_phone: '',
  total_adults: '',
  total_children: '',
  checkin: '',
  checkout: '',
  room_preference: '',
  visitor_message: '',
});

const [totalPrice, setTotalPrice] = useState(0);
const [showPopup, setShowPopup] = useState(false);
const [formErrors, setFormErrors] = useState({});
const [phoneError, setPhoneError] = useState('');


const handlePhoneChange = (phone) => {
  setFormData({
    ...formData,
    visitor_phone: phone,
  });
};

const handleFormChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value,
  });

    // Clear the phone error when the phone input changes
if (name === 'visitor_phone') {
  setPhoneError('');
}

  setFormErrors({ ...formErrors, [name]: '' });


  if (name === 'checkin' || name === 'checkout') {
    calculateTotalPrice();
  }
};

const calculateTotalPrice = () => {
  const checkinDate = new Date(formData.checkin);
  const checkoutDate = new Date(formData.checkout);

  if (!isNaN(checkinDate.getTime()) && !isNaN(checkoutDate.getTime())) {
    const oneDay = 24 * 60 * 60 * 1000;
    const nights = Math.round((checkoutDate - checkinDate) / oneDay);
    const nightlyRate = blogPost.fields.price; // Replace with your pricing logic

    const total = nights * nightlyRate;
    setTotalPrice(total);
  } else {
    // Handle invalid dates (e.g., display an error message or set the total price to 0)
    setTotalPrice(0);
  }
};

const handleSubmit = (e) => {
  e.preventDefault();
  const validationErrors = validateForm();
  if (Object.keys(validationErrors).length === 0) {
    calculateTotalPrice();
    setShowPopup(true);
  } else {
    setFormErrors(validationErrors);
  }
};

const closePopup = () => {
  setShowPopup(false);
};

const validateForm = () => {
  let isValid = true;
  const errors = {};

  // Validate name
  if (formData.visitor_name.trim() === '') {
    errors.visitor_name = 'Name is required';
    isValid = false;
  }

  // Validate phone
  if (formData.visitor_phone.trim() === '') {
  errors.visitor_phone = 'Phone number is required';
  } else if (!isValidPhone(formData.visitor_phone)) {
  errors.visitor_phone = 'Invalid phone number format';
  }

  // Validate email
  if (formData.visitor_email.trim() === '') {
    errors.visitor_email = 'Email is required';
    isValid = false;
  } else if (!isValidEmail(formData.visitor_email)) {
    errors.visitor_email = 'Invalid email format';
    isValid = false;
  }

  // Validate number of adults and children
  if (formData.total_adults < 1) {
    errors.total_adults = 'At least 1 adult is required';
    isValid = false;
  }

  if (formData.total_children < 0) {
    errors.total_children = 'Number of children cannot be negative';
    isValid = false;
  }

  // Validate check-in and checkout dates
  const checkinDate = new Date(formData.checkin);
  const checkoutDate = new Date(formData.checkout);

  if (isNaN(checkinDate.getTime()) || isNaN(checkoutDate.getTime()) || checkinDate >= checkoutDate) {
    errors.checkin = 'Check-in and checkout dates are invalid';
    isValid = false;
  }

  // Add more validation for other fields as needed

  setFormErrors(errors);
  return isValid;
};

  

return (
      <>
      <div>
          <Head>
              <title>{blogPost.fields.name}</title>
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
                          <span className="text-2xl font-bold">$ {blogPost.fields.price}&nbsp;</span> per night
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
                    <main className="bg-white p-6 rounded-lg shadow-lg">
                      <form className="booking-form" action="#" onSubmit={handleSubmit}>
                        <p className="py-6 capitalize text-neutral-700 font-bold">{blogPost.fields.name} Reservation Form</p>
                          <div className="mb-4">
                            <label htmlFor="name" className="block font-semibold text-neutral-700">Your Name</label>
                            <input
                              type="text"
                              id="name"
                              name="visitor_name"
                              value={formData.visitor_name}
                              onChange={handleFormChange}
                              placeholder="John Doe"
                              pattern="[A-Za-z\s]{3,20}"
                              // required
                              className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring focus:border-[#53afe5]"
                            />
                            {formErrors.visitor_name && (
                              <p className="text-red-500 text-xs font-semibold">{formErrors.visitor_name}</p>
                            )}
                          </div>
                          <div className="mb-4">
                            <label htmlFor="email" className="block font-semibold text-neutral-700">Your E-mail</label>
                            <input
                              type="email"
                              id="email"
                              name="visitor_email"
                              value={formData.visitor_email}
                              onChange={handleFormChange}
                              placeholder="john.doe@email.com"
                              // required
                              className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring focus:border-[#53afe5]"
                            />
                            {formErrors.visitor_email && (
                              <p className="text-red-500 text-xs font-semibold">{formErrors.visitor_email}</p>
                            )}
                          </div>
                          <div className="mb-4">
                            <label htmlFor="phone" className="block font-semibold text-neutral-700">Your Phone</label>
                            <PhoneInput
                            className="items-center"
                            defaultCountry="bw"
                            value={formData.visitor_phone}
                            onChange={(phone) => handleFormChange({ target: { name: 'visitor_phone', value: phone } })}
                            inputProps={{
                              className: 'w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring focus:border-[#53afe5]',
                            }}
                            />
                            {phoneError && <p className="text-red-500 text-xs font-semibold">{phoneError}</p>}
                          </div>
                          <hr className="my-4" />
                          <div className="mb-4">
                            <div className="w-full py-3">
                              <label htmlFor="adult" className="block font-semibold text-neutral-700">Adults</label>
                              <input
                                type="number"
                                id="adult"
                                name="total_adults"
                                value={formData.total_adults}
                                onChange={handleFormChange}
                                placeholder="2"
                                min="1"
                                // required
                                className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring focus:border-[#53afe5]"
                              />
                              {formErrors.total_adults && (
                                <p className="text-red-500 text-xs font-semibold">{formErrors.total_adults}</p>
                              )}
                            </div>
                            <div className="w-full py-3">
                              <label htmlFor="child" className="block font-semibold text-neutral-700">Children</label>
                              <input
                                type="number"
                                id="child"
                                name="total_children"
                                value={formData.total_children}
                                onChange={handleFormChange}
                                placeholder="2"
                                min="0"
                                // required
                                className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring focus:border-[#53afe5]"
                              />
                              {formErrors.total_children && (
                                <p className="text-red-500 text-xs font-semibold">{formErrors.total_children}</p>
                              )}
                            </div>
                            <div className="w-full py-3">
                            <label htmlFor="checkin" className="block font-semibold text-gray-700">Check-in Date</label>
                            <input
                              type="date"
                              id="checkin"
                              name="checkin"
                              value={formData.checkin}
                              onChange={handleFormChange}
                              // required
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                            />
                            {formErrors.checkin && (
                              <p className="text-red-500 text-xs font-semibold">{formErrors.checkin}</p>
                            )}
                          </div>
                          <div className="w-full py-3">
                            <label htmlFor="checkout" className="block font-semibold text-gray-700">Check-out Date</label>
                            <input
                              type="date"
                              id="checkout"
                              name="checkout"
                              value={formData.checkout}
                              onChange={handleFormChange}
                              // required
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                            />
                            {formErrors.checkout && (
                              <p className="text-red-500 text-xs font-semibold">{formErrors.checkout}</p>
                            )}
                          </div>
                          </div>
                          <div className="w-full py-3">
                            <label htmlFor="totalPrice" className="block font-semibold text-gray-700">Total Price</label>
                            <input
                              type="text"
                              id="totalPrice"
                              name="totalPrice"
                              value={`$${totalPrice.toFixed(2)}`}
                              readOnly
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                            />
                          </div>
                          <hr className="my-4" />
                          <div className="mb-4">
                            <label htmlFor="message" className="block font-semibold text-neutral-700">Anything Else?</label>
                            <textarea
                              id="message"
                              name="visitor_message"
                              value={formData.visitor_message}
                              onChange={handleFormChange}
                              placeholder="Tell us anything else that might be important."
                              className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring focus:border-[#53afe5]"
                            ></textarea>
                          </div>
                          <button
                            type="submit"
                            className="w-full bg-[#53afe5] ease-in-out duration-300 text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#f8a72a] focus:outline-none focus:ring focus:border-[#53afe5]"
                          >
                            Reserve
                          </button>
                          <p className="py-6 text-neutral-500 text-center text-sm font-medium">You won&apos;t be charged yet</p>
                      </form>
                      {Object.keys(formErrors).length === 0 && showPopup && (
                      <div className="fixed inset-0 flex items-center justify-center z-50">
                      <div className="fixed inset-0 bg-black opacity-50"></div>
                      <div className="relative bg-white rounded-lg p-6 shadow-lg z-10">
                        <h2 className="text-2xl font-semibold mb-4">Booking Details</h2>
                        <p className="text-lg">Name: {formData.visitor_name}</p>
                        <p className="text-lg">Email: {formData.visitor_email}</p>
                        <p className="text-lg">Phone: {formData.visitor_phone}</p>
                        <p className="text-lg">Adults: {formData.total_adults}</p>
                        <p className="text-lg">Children: {formData.total_children}</p>
                        <p className="text-lg">Check-in Date: {formData.checkin}</p>
                        <p className="text-lg">Check-out Date: {formData.checkout}</p>
                        <p className="text-lg">Total Price: ${totalPrice.toFixed(2)}</p>
                        <div className="flex flex-row items-center text-center justify-between">
                        <button
                          onClick={closePopup}
                          className="bg-[#53afe5] text-white py-2 px-4 rounded-lg mt-4 hover:bg-[#f8a72a] focus:outline-none focus:ring focus:border-[#53afe5]"
                        >
                          Close
                        </button>
                        <button
                          onClick={() => sendEmail(formData)}
                          className="bg-[#53afe5] text-white py-2 px-4 rounded-lg mt-4 hover:bg-[#f8a72a] focus:outline-none focus:ring focus:border-[#53afe5]"
                        >
                          Send Email
                        </button>
                        </div>
                      </div>
                    </div>
                    )}
                    </main>
                    <div className="error-messages">
                    {/* Display error messages here based on formErrors */}
                    {Object.keys(formErrors).map((field) => (
                    <p key={field}>{formErrors[field]}</p>
                    ))}
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
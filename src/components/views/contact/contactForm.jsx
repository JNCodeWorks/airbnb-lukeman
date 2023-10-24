import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { FadeLoader } from "react-spinners";
// import clue from '../../../../src/pages/api' 

export default function ContactForm() {

    const Links = {
        social: [
            {
                id:1,
                name: 'Facebook',
                href: '#',
                icon: (props) => (
                    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                        <path
                            fillRule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clipRule="evenodd"
                        />
                    </svg>
                ),
            },
            {
                id:2,
                name: 'Twitter',
                href: '#',
                icon: (props) => (
                    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                ),
            },
            {
                id:3,
                name: 'Youtube',
                href: '#',
                icon: (props) => (
                    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                        <path
                            fillRule="evenodd"
                            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                            clipRule="evenodd"
                        />
                    </svg>
                ),
            },
            {
                id:4,
                name: 'Instagram',
                href: '#',
                icon: (props) => (
                    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                        <path
                            fillRule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                            clipRule="evenodd"
                        />
                    </svg>
                ),
            },
        ]
    }

    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

      const [isLoading, setIsLoading] = useState(false);
      const [isSuccess, setIsSuccess] = useState(false);
      const [errorMessage, setErrorMessage] = useState('');
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
    
        try {
            const response = await fetch('/api/contact', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            });
      
            if (response.status === 200) {
              setIsSuccess(true);
              setFormData({
                full_name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
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


  return (
    <div className='bg-white'>
    <div className='xl:w-10/12 mx-auto px-6 xl:px-0 py-16'>

<div className="container mx-auto">
            <div className="lg:flex">
                <div className="xl:w-2/5 lg:w-2/5 bg-white py-16 xl:rounded-bl rounded-tl rounded-tr xl:rounded-tr-none ">
                    <div className="xl:w-5/6 xl:px-0 px-8 mx-auto">
                        <h1 className="xl:text-4xl text-3xl pb-4 text-neutral-700 font-bold">Get in Touch</h1>
                        <p className="text-[17px] text-neutral-600 pb-8 leading-relaxed font-normal lg:pr-4">Have questions or need assistance? Our dedicated team is here to help. Reach out to us via the contact form, and we will get back to you promptly. You can also find our contact details and location information for additional inquiries and support.</p>
                        <div className="flex pb-4 items-center">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone-call" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#53afe5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M4 4h5l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v5a1 1 0 0 1 -1 1a16 16 0 0 1 -16 -16a1 1 0 0 1 1 -1" />
                                    <path d="M15 7a2 2 0 0 1 2 2" />
                                    <path d="M15 3a6 6 0 0 1 6 6" />
                                </svg>
                            </div>
                            <p className="pl-4 text-neutral-600 text-base">+254 115 600 233</p>
                        </div>
                        <div className="flex items-center pb-4">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#53afe5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <rect x={3} y={5} width={18} height={14} rx={2} />
                                    <polyline points="3 7 12 13 21 7" />
                                </svg>
                            </div>
                            <p className="pl-4 text-neutral-600 text-base">info@lukemanbnb.com</p>
                        </div>

                        <div className="flex items-center pb-4">
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#53afe5" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                            </svg>


                            </div>
                            {/* <p className="pl-4 text-neutral-600 text-base">abcd@gmail.com</p> */}
                            <p className="text-base pl-4 text-neutral-600 ">
                                Maweni Plaza, Voi, Taita-Taveta County, Kenya.
                            </p>
                        </div>
                        <div className='space-y-2 pb-8'>
                            <h5 className={'capitalize font-semibold text-neutral-600 text-lg'}>opening hours</h5>
                            <p className='text-neutral-600 text-base'><strong>Days:</strong> Monday - Friday</p>
                            <p className='text-neutral-600 text-base'><strong>Time:</strong> 08:00 - 17:00</p>
                        </div>
                        <div className={'flex items-center space-x-4'}>
                            {Links.social.map((item) => (
                                <Link href={item.href} target={'_blank'} key={item.id} className={'h-10 w-10 bg-white rounded-full text-[#53afe5] flex items-center justify-center hover:bg-[#53afe5] hover:text-white ease-in-out duration-300'}>
                                    <item.icon className={'h-8 w-8'} aria-hidden={'true'}/>
                            </Link>
                            ))}
                        </div>

                       
                    </div>
                </div>
                <div className="xl:w-3/5 lg:w-3/5 bg-white shadow-lg h-full pt-5 pb-5 xl:pr-5 xl:pl-0 rounded-tr rounded-br">
                <div className='py-24  justify-center text-center items-center'>
                    {isLoading ? (
                    <p className='text-[24px] flex flex-col space-y-4 justify-center items-center text-center font-bold text-[#53afe5]'>
                        <span><FadeLoader height={20} color="#53afe5"/></span>
                        <span>Sending...</span>
                    </p>
                    ) : isSuccess ? (
                    <p className='text-[24px] capitalize justify-center items-center text-center font-bold text-green-600'>Message sent successfully!</p>
                    ) : errorMessage ? (
                    <p className='text-[24px] capitalize justify-center items-center text-center font-bold text-red-600'>Error: {errorMessage}</p>
                    ) : (    
                    <form onSubmit={handleSubmit} id="contact" className="bg-white py-4 px-8 rounded-tr rounded-br">
                        <h1 className="text-2xl text-neutral-600 font-bold mb-6">Leave your Message</h1>
                        <div className="block xl:flex w-full flex-wrap justify-between mb-6">
                            <div className="w-2/4 max-w-xs mb-6 xl:mb-0">
                                <div className="flex flex-col">
                                    <label htmlFor="full_name" className="text-neutral-600 text-sm font-semibold leading-tight tracking-normal mb-2">
                                        Full Name
                                    </label>
                                    <input required id="full_name" value={formData.full_name} onChange={handleChange} name="full_name" type="text" className="focus:outline-none focus:border focus:border-[#0067DA] font-normal w-64 h-10 flex items-center pl-3 text-sm border-neutral-300 rounded border" placeholder />
                                </div>
                            </div>
                            <div className="w-2/4 max-w-xs xl:flex xl:justify-end">
                                <div className="flex flex-col">
                                    <label htmlFor="email" className="text-neutral-600 text-sm font-semibold leading-tight tracking-normal mb-2">
                                        Email
                                    </label>
                                    <input required id="email" name="email" type="email" value={formData.email} onChange={handleChange} className="focus:outline-none focus:border focus:border-[#0067DA] font-normal w-64 h-10 flex items-center pl-3 text-sm border-neutral-300 rounded border" placeholder />
                                </div>
                            </div>
                        </div>
                        <div className="block xl:flex w-full flex-wrap justify-between mb-6">
                            <div className="w-2/4 max-w-xs mb-6 xl:mb-0">
                                <div className="flex flex-col">
                                    <label htmlFor="phone" className="text-neutral-600 text-sm font-semibold leading-tight tracking-normal mb-2">
                                        Phone
                                    </label>
                                    <input required id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className="focus:outline-none focus:border focus:border-[#0067DA] font-normal w-64 h-10 flex items-center pl-3 text-sm border-neutral-300 rounded border" placeholder />
                                </div>
                            </div>
                            <div className="w-2/4 max-w-xs xl:flex xl:justify-end">
                                <div className="flex flex-col">
                                    <label htmlFor="subject" className="text-neutral-600 text-sm font-semibold leading-tight tracking-normal mb-2">
                                        Subject
                                    </label>
                                    <input required id="subject" name="subject" type="text" value={formData.subject} onChange={handleChange} className="focus:outline-none focus:border focus:border-[#0067DA] font-normal w-64 h-10 flex items-center pl-3 text-sm border-neutral-300 rounded border" placeholder/>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mt-6">
                            <div className="flex flex-col pb-4">
                                <label className="text-sm font-semibold text-neutral-600 mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea placeholder  name="message" value={formData.message} onChange={handleChange} className="border-neutral-300 border mb-4 rounded py-2 text-sm outline-none resize-none px-3 focus:border focus:border-[#0067DA]" rows={8} id="message" defaultValue={""} />
                            </div>
                            <button type="submit" className="focus:outline-none border-2 border-stone-500 text-stone-500 hover:bg-white ease-in-out duration-300 hover:text-[#53afe5] hover:border-[#53afe5] rounded px-8 py-3 text-sm leading-6">
                                Send a Message
                            </button>
                        </div>
                    </form>
                    )}
                </div>
                </div>
            </div>
        </div>
        <div className='py-12'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.8229255644073!2d38.56330905231441!3d-3.393365649918491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18392960cce3241d%3A0xa382038230ab70e2!2sMAWENI%20PLAZA!5e0!3m2!1sen!2ske!4v1696249597424!5m2!1sen!2ske" width="100%" height="500" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
    </div>
  )
}
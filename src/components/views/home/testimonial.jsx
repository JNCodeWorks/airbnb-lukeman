import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Data from '@/pages/data/feedback.json';

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % Data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + Data.length) % Data.length);
  };

    // Automatically advance to the next slide in a loop
    useEffect(() => {
        const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    
        // Clear the interval when the component unmounts to prevent memory leaks
        return () => {
          clearInterval(interval);
        };
      }, [currentIndex]);

  return (
    <div>
      <section className="">
        <div className="lg:w-10/12 mx-auto px-6 py-16">
          <div className="flex flex-col items-center">
            {/* Carousel container */}
            <div className="relative md:order-2">
              <div className="relative grid max-w-lg gap-6 mx-auto md:max-w-none lg:gap-10 lg:grid-cols-1">
                {Data.map((items, index) => (
                  <div
                    key={items.id}
                    className={`testimonial-slide ${
                      index === currentIndex ? 'active' : ''
                    }`}
                  >
                    {/* Your slide content here */}
                    <div className="flex flex-col  space-y-8 justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                      <div className="flex flex-col space-y-2">
                        <h1 className="font-semibold text-neutral-700 text-center text-lg">
                          &quot;{items.title}&quot;
                        </h1>
                        <p className="text-neutral-600 text-center mx-auto px-6 text-[16px]">
                          {items.description}
                        </p>
                      </div>
                      <div className="flex flex-col items-center justify-center space-y-4">
                        <div
                          className="flex-shrink-0 relative"
                          style={{ width: '50px', height: '50px' }}
                        >
                          <Image
                            src={items.image}
                            alt={items.name}
                            className="block w-full h-full rounded-full"
                            fill
                          />
                        </div>
                        <div className="flex flex-col text-sm items-start">
                          <h1 className="font-semibold text-neutral-700">
                            {items.name}
                          </h1>
                          <p className="text-neutral-500">{items.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>     
            </div>
          </div>
          <div className="carousel-controls">
            <button className="prev-button" onClick={prevSlide}>
            <svg fill="none" className='w-6 h-6' stroke="currentColor" stroke-width="4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"></path>
            </svg>
            </button>
            <button className="next-button" onClick={nextSlide}>
            <svg fill="none" className='w-6 h-6' stroke="currentColor" stroke-width="4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
            </svg>
            </button>
          </div>
          <div className="flex md:flex-row flex-col space-y-4 md:space-y-0 md:space-y-0 py-12 justify-center md:space-x-8">
            <Link
              className="bg-[#07286f] py-4 px-8 capitalize rounded-full text-white text-base font-semibold hover:bg-[#1d92ce] ease-in-out duration-500 hover:text-white"
              href={'/airbnb'}
            >
              explore airbnb
            </Link>
            <Link
              className="bg-white capitalize rounded-full py-4 px-8 text-neutral-600 text-base font-semibold hover:bg-[#07286f] ease-in-out duration-500 hover:text-white"
              href={'/homestays'}
            >
              explore homestays
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

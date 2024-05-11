import React from 'react'
import Link from 'next/link'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Banner() {

  const state = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
        <div className='w-full height bg-gray-50'>
          <Slider {...state}>
          <div className="w-full homeBanner6 bg-cover bg-center">
                <div className="bannerOverlay  flex flex-col justify-center text-white">
                    <div className="lg:w-10/12 mx-auto px-6 w-full">
                        <div className="lg:text-5xl text-3xl flex flex-col space-y-12 pt-6 text-left">
                            <h1 className="font-semibold capitalize"> Diani Beach, Ukunda </h1>
                            <p className="lg:text-md text-base capitalize lg:max-w-3xl max-w-prose leading-8 ">Discover a comfortable retreat at Diani Studio Apartments, perfect for solo travellers or couples seeking a serene getaway in the vibrant heart of Diani Beach. Our thoughtfully designed bedsitter-style apartments offer an intimate space for relaxation and exploration.</p>
                            <span className='capitalize'>
                                <Link href='/airbnb/diani-studio-bedsitter' className='bg-[#07286f] rounded-md py-3 px-6 text-white text-base font-semibold hover:bg-[#1d92ce] ease-in-out duration-500 hover:text-white'>
                                    book now
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

          <div className="w-full homeBanner bg-cover bg-center">
                <div className="bannerOverlay  flex flex-col justify-center text-white">
                    <div className="lg:w-10/12 mx-auto px-6 w-full">
                        <div className="lg:text-5xl text-3xl flex flex-col space-y-12 pt-12 text-left">
                            <h1 className="font-semibold capitalize"> Nyali, Mombasa </h1>
                            <p className="lg:text-md text-base capitalize lg:max-w-3xl max-w-prose leading-8 ">Immerse yourself in coastal elegance at our stunning two-bedroom apartment, where every moment is enhanced by the mesmerizing beauty of the Indian Ocean. Nestled in the heart of Nyali, our apartment offers a luxurious retreat with unparalleled sea views, perfect for indulging in the ultimate coastal getaway.</p>
                            <span className='capitalize'>
                                <Link href='/airbnb/2-bedroom-apartment-nyali' className='bg-[#07286f] rounded-md py-3 px-6 text-white text-base font-semibold hover:bg-[#1d92ce] ease-in-out duration-500 hover:text-white'>
                                    book now
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full homeBanner5 bg-cover bg-center">
                <div className="bannerOverlay  flex flex-col justify-center text-white">
                    <div className="lg:w-10/12 mx-auto px-6 w-full">
                        <div className="lg:text-5xl text-3xl flex flex-col space-y-12 pt-12 text-left">
                            <h1 className="font-semibold capitalize"> Voi, Taita-Taveta </h1>
                            <p className="lg:text-md text-base capitalize lg:max-w-3xl max-w-prose leading-8 ">Indulge in comfort and spaciousness at our luxurious three-bedroom apartment, where each bedroom boasts its own en suite bathroom. Nestled in the heart of Voi Town, our apartment offers an exceptional retreat for families or groups seeking a lavish and convenient stay.</p>
                            <span className='capitalize'>
                                <Link href='/homestays/three-bedroom-all-en-suite' className='bg-[#07286f] rounded-md py-3 px-6 text-white text-base font-semibold hover:bg-[#1d92ce] ease-in-out duration-500 hover:text-white'>
                                    book now
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full homeBanner3 bg-cover bg-center">
                <div className="bannerOverlay  flex flex-col justify-center text-white">
                    <div className="lg:w-10/12 mx-auto px-6 w-full">
                        <div className="lg:text-5xl text-3xl flex flex-col space-y-12 pt-12 text-left">
                            <h1 className="font-semibold capitalize"> Watamu, North Coast </h1>
                            <p className="lg:text-md text-base capitalize lg:max-w-3xl max-w-prose leading-8 ">Escape to paradise at our serene one-bedroom studio Airbnb, nestled in the breathtaking coastal town of Watamu. Perfect for solo travelers or couples seeking a peaceful retreat, our cozy studio offers a delightful blend of comfort and tranquility, with the stunning beaches and shores of Watamu just moments away.</p>
                            <span className='capitalize'>
                                <Link href='/airbnb/watamu-north-coast' className='bg-[#07286f] rounded-md py-3 px-6 text-white text-base font-semibold hover:bg-[#1d92ce] ease-in-out duration-500 hover:text-white'>
                                    book now
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full homeBanner4 bg-cover bg-center">
                <div className="bannerOverlay  flex flex-col justify-center text-white">
                    <div className="lg:w-10/12 mx-auto px-6 w-full">
                        <div className="lg:text-5xl text-3xl flex flex-col space-y-12 pt-12 text-left">
                            <h1 className="font-semibold capitalize"> Voi, Taita-Taveta </h1>
                            <p className="lg:text-md text-base capitalize lg:max-w-3xl max-w-prose leading-8 ">This spacious 2-bedroom apartment is designed to cater to your every need. The tastefully furnished living area provides a cozy ambiance for relaxation, complete with comfortable seating and a flat-screen TV. The well-equipped kitchen is perfect for preparing meals and enjoying them at the dining table.</p>
                            <span className='capitalize'>
                                <Link href='/airbnb/2-bedroom-apartment-voi' className='bg-[#07286f] rounded-md py-3 px-6 text-white text-base font-semibold hover:bg-[#1d92ce] ease-in-out duration-500 hover:text-white'>
                                    book now
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full homeBanner7 bg-cover bg-center">
                <div className="bannerOverlay  flex flex-col justify-center text-white">
                    <div className="lg:w-10/12 mx-auto px-6 w-full">
                        <div className="lg:text-5xl text-3xl flex flex-col space-y-12 pt-12 text-left">
                            <h1 className="font-semibold capitalize"> Mtwapa, Kilifi </h1>
                            <p className="lg:text-md text-base capitalize lg:max-w-3xl max-w-prose leading-8 ">Experience comfort and convenience at our charming one-bedroom Airbnb, nestled in the vibrant coastal town of Mtwapa. Perfect for solo travelers, couples, or small families, our cozy retreat offers a delightful blend of relaxation and adventure.</p>
                            <span className='capitalize'>
                                <Link href='/airbnb/1-bedroom-aribnb-mtwapa' className='bg-[#07286f] rounded-md py-3 px-6 text-white text-base font-semibold hover:bg-[#1d92ce] ease-in-out duration-500 hover:text-white'>
                                    book now
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

          </Slider>
        </div>
    </div>
  )
}

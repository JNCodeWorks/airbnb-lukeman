import React from 'react'
import Layout from '@/components/constants/layout/layout'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import Image from 'next/image'
import NewImg from '../../../public/images/1.jpeg'

export default function index() {
  return (
    <div>
    <NextSeo
      title="Lukeman Homestays & Airbnb"
      description="Experience comfort and warmth at Lukeman Homestays & Airbnb – your cozy home away from home. Enjoy hospitality and relaxation for an unforgettable stay."
      canonical="https://www.lukemanbnb.com/"
      openGraph={{
        url: 'https://www.lukemanbnb.com/',
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
        <div class="min-h-screen w-full bg-cover bg-center bg-gray-400 flex flex-col items-center justify-center relative px-4">
            <Image src={NewImg} alt={'Lukemanbnb'} className="object-cover" fill/>
            <div className='absolute top-0 left-0 w-full h-full bg-gray-900 opacity-80 flex flex-col justify-center text-white'>
            <h1 class="text-5xl md:text-7xl text-white font-bold mb-8 z-10 text-center">Coming Soon</h1>
            <p class="text-white text-xl md:text-2xl text-center">
                We&apos;re working hard to bring you something amazing. Stay tuned!
            </p>

                    <div className="flex items-center text-center justify-center gap-x-4 py-8">
                        <div className="opacity-80 w-12 h-12 flex-shrink-0 bg-neutral-700 cursor-pointer hover:bg-neutral-700 rounded-full flex items-center justify-center">
                            <svg width="30" height="30" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M9.00081 0.233398C6.68327 0.233398 6.39243 0.243215 5.48219 0.283343C4.57374 0.323644 3.95364 0.462973 3.41106 0.667403C2.84981 0.87855 2.37372 1.161 1.8994 1.62066C1.42473 2.08016 1.13317 2.54137 0.914502 3.08491C0.702944 3.61071 0.558942 4.2116 0.518053 5.09132C0.477342 5.97311 0.466675 6.25504 0.466675 8.50015C0.466675 10.7453 0.476986 11.0262 0.518231 11.9079C0.560009 12.788 0.703833 13.3887 0.914679 13.9144C1.13282 14.4581 1.42437 14.9193 1.89887 15.3788C2.37301 15.8386 2.8491 16.1218 3.40999 16.3329C3.95293 16.5373 4.57321 16.6767 5.48148 16.717C6.39171 16.7571 6.68238 16.7669 8.99974 16.7669C11.3175 16.7669 11.6074 16.7571 12.5176 16.717C13.4261 16.6767 14.0469 16.5373 14.5898 16.3329C15.1509 16.1218 15.6263 15.8386 16.1004 15.3788C16.5751 14.9193 16.8667 14.4581 17.0853 13.9145C17.2951 13.3887 17.4391 12.7878 17.4818 11.9081C17.5227 11.0263 17.5333 10.7453 17.5333 8.50015C17.5333 6.25504 17.5227 5.97328 17.4818 5.09149C17.4391 4.21143 17.2951 3.61071 17.0853 3.08508C16.8667 2.54137 16.5751 2.08016 16.1004 1.62066C15.6258 1.16082 15.1511 0.878377 14.5893 0.667403C14.0453 0.462973 13.4249 0.323644 12.5164 0.283343C11.6062 0.243215 11.3164 0.233398 8.99814 0.233398H9.00081ZM8.23525 1.72311C8.46245 1.72277 8.71597 1.72311 9.00077 1.72311C11.2792 1.72311 11.5492 1.73104 12.449 1.77065C13.281 1.8075 13.7326 1.94218 14.0334 2.05533C14.4316 2.20517 14.7155 2.38428 15.014 2.67362C15.3127 2.96295 15.4976 3.23851 15.6526 3.62429C15.7694 3.91535 15.9086 4.3528 15.9464 5.15881C15.9873 6.03026 15.9962 6.29204 15.9962 8.49823C15.9962 10.7044 15.9873 10.9662 15.9464 11.8377C15.9084 12.6437 15.7694 13.0811 15.6526 13.3722C15.4979 13.758 15.3127 14.0327 15.014 14.3218C14.7153 14.6112 14.4318 14.7903 14.0334 14.9401C13.7329 15.0538 13.281 15.1881 12.449 15.225C11.5494 15.2646 11.2792 15.2732 9.00077 15.2732C6.72217 15.2732 6.45212 15.2646 5.55256 15.225C4.72055 15.1878 4.26899 15.0531 3.96801 14.9399C3.56978 14.7901 3.28533 14.611 2.98666 14.3216C2.68799 14.0323 2.5031 13.7574 2.34808 13.3715C2.23128 13.0804 2.09208 12.643 2.05421 11.837C2.01332 10.9655 2.00514 10.7037 2.00514 8.49617C2.00514 6.2886 2.01332 6.0282 2.05421 5.15674C2.09226 4.35073 2.23128 3.91329 2.34808 3.62188C2.50275 3.2361 2.68799 2.96054 2.98666 2.67121C3.28533 2.38187 3.56978 2.20276 3.96801 2.05258C4.26881 1.93891 4.72055 1.80457 5.55256 1.76755C6.33977 1.7331 6.64484 1.72277 8.23525 1.72105V1.72311ZM13.5558 3.09574C12.9905 3.09574 12.5318 3.53956 12.5318 4.08741C12.5318 4.63508 12.9905 5.07942 13.5558 5.07942C14.1212 5.07942 14.5799 4.63508 14.5799 4.08741C14.5799 3.53974 14.1212 3.09574 13.5558 3.09574ZM9.00082 4.25481C6.58071 4.25481 4.61855 6.15564 4.61855 8.50013C4.61855 10.8446 6.58071 12.7446 9.00082 12.7446C11.4209 12.7446 13.3824 10.8446 13.3824 8.50013C13.3824 6.15564 11.4209 4.25481 9.00082 4.25481ZM9.00079 5.74454C10.5717 5.74454 11.8453 6.97818 11.8453 8.50013C11.8453 10.0219 10.5717 11.2557 9.00079 11.2557C7.42975 11.2557 6.15632 10.0219 6.15632 8.50013C6.15632 6.97818 7.42975 5.74454 9.00079 5.74454Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                        <div className="opacity-80 w-12 h-12 flex-shrink-0 bg-neutral-700 cursor-pointer hover:bg-neutral-700 rounded-full flex items-center justify-center">
                        <svg  className="svg-icon w-10 h-10" viewBox="0 0 20 20">
							<path fill="white" d="M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z"></path>
						</svg>
                        </div>
                        <div className="opacity-80 w-12 h-12 flex-shrink-0 bg-neutral-700 cursor-pointer hover:bg-neutral-700 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                            <path fill="white" d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
                        </svg>
                        </div>
                        <div className="opacity-80 w-12 h-12 flex-shrink-0 bg-neutral-700 cursor-pointer hover:bg-neutral-700 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 640 640"><path fill="white" d="M546.704 91.89C486.526 31.584 406.482-1.582 321.229-1.582 145.609-1.583 2.67 141.368 2.67 317.118c0 56.139 14.705 111.05 42.567 159.297L.001 641.595l168.959-44.34c46.595 25.382 99.013 38.835 152.222 38.835h.13C496.944 636.09 640 493.14 640 317.401c0-85.182-33.166-165.179-93.344-225.463l.047-.047zM321.323 582.315c-47.599 0-94.218-12.827-134.895-36.957l-9.697-5.788-100.265 26.257 26.776-97.726-6.272-10.04C70.312 415.965 56.4 367.244 56.4 317.13c0-146.082 118.832-264.96 265.066-264.96 70.713 0 137.328 27.65 187.302 77.622 49.996 50.127 77.493 116.588 77.493 187.42-.118 146.187-118.95 265.066-264.96 265.066l.024.036zM466.541 383.85c-7.913-4.028-47.115-23.233-54.39-25.89-7.276-2.658-12.58-4.028-17.977 4.027-5.268 7.914-20.587 25.89-25.252 31.265-4.666 5.28-9.284 6.035-17.197 2.008-7.914-4.028-33.674-12.426-64.064-39.568-23.634-21.095-39.662-47.221-44.328-55.134-4.665-7.914-.52-12.308 3.532-16.193 3.661-3.544 7.925-9.284 11.941-13.95 4.028-4.665 5.28-7.925 7.925-13.31 2.658-5.28 1.359-9.946-.637-13.95-2.008-4.015-17.977-43.217-24.485-59.185-6.39-15.603-13.063-13.43-17.965-13.701-4.665-.237-9.945-.237-15.2-.237-5.257 0-13.95 1.996-21.225 9.933-7.276 7.914-27.898 27.26-27.898 66.45 0 39.201 28.512 77.009 32.516 82.407 4.027 5.267 56.162 85.784 136.029 120.238 18.98 8.161 33.803 13.063 45.355 16.854 19.098 6.024 36.425 5.15 50.126 3.13 15.32-2.256 47.115-19.229 53.788-37.831 6.662-18.615 6.662-34.536 4.666-37.831-1.89-3.544-7.158-5.504-15.201-9.58l-.06.048z"/></svg>
                        </div>
                    </div>
            </div>

            {/* <div class="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-30"
                style="background-image: url('https://images.unsplash.com/photo-1604093882750-3ed498f3178b');">
            </div> */}

        </div>
        {/* <div className='w-full relative h-[520px] bg-cover bg-center'>
            <Image src={"https:" + article.fields.image.fields.file.url} alt={article.fields.title} className="object-cover" fill/>
            <div className='absolute top-0 left-0 w-full h-full bg-gray-900 opacity-70 flex flex-col justify-center text-white'>
            <div className="lg:w-10/12 mx-auto px-6 w-full ">
            <div className="xl:text-4xl pt-12 md:text-3xl flex flex-col space-y-6 text-2xl text-left">
                <h1 className="font-semibold capitalize "> {article.fields.title} </h1>
            </div> */}
      </Layout>
    </div>
  )
}
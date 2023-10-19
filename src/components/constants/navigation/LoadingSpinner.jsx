import React from 'react';
import Image from 'next/image';
import Logo from '../../../../public/images/logo.png'
import { PuffLoader } from 'react-spinners';

const LoadingSpinner = () => (
  <div className="fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center bg-white z-50">
    {/* <PuffLoader color="#f8a72a"  size={80} /> */}
    <span className="loader"></span>
    {/* <div className='relative py-4'>
        <Image src={Logo} alt='' height={200} width={200}/>
    </div> */}
  </div>
);

export default LoadingSpinner;

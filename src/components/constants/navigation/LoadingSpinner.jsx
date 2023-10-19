import React from 'react';

const LoadingSpinner = () => (
  <div className="fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center bg-white z-50">
    <span className="loader"></span>
  </div>
);

export default LoadingSpinner;

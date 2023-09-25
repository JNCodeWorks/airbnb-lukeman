// components/Gallery.js

import React from 'react';

const Gallery = ({ images }) => {
  return (
    <div className="gallery lg:w-10/12 mx-auto px-6">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image.url} alt={image.alt} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;

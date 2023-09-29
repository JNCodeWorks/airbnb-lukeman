import React from 'react'
import ModalImage from 'react-modal-image'

const photos = [
    { src: '/images/1.jpeg', alt: 'Photo 1', caption: 'Caption for Photo 1' },
    { src: '/images/2.jpg', alt: 'Photo 2', caption: 'Caption for Photo 2' },
    { src: '/images/5.jpg', alt: 'Photo 5', caption: 'Caption for Photo 5' },
    { src: '/images/pxl1.jpg', alt: 'Photo 6', caption: 'Caption for Photo 6' },
    { src: '/images/3.jpg', alt: 'Photo 3', caption: 'Caption for Photo 3' },
    { src: '/images/4.jpg', alt: 'Photo 4', caption: 'Caption for Photo 4' },

    // Add more photos here
  ];

export default function PhotoGallery() {
  return (
    <div className='grid lg:grid-cols-4 py-16 gap-8'>
    {photos.map((photo, index) => (
        <ModalImage
        className='rounded-lg'
          key={index}
          small={photo.src}
          large={photo.src}
          alt={photo.alt}
          hideDownload={true}
          hideZoom={true}
          caption={photo.caption}
        />
      ))}
    </div>
  )
}

import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

const RatingStars = ({ rating }) => {
  const totalStars = 5;

  return (
    <div className="flex items-center">
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span key={index}>
            {starValue <= rating ? (
              <FaStar color="#ffc107" size={22} />
            ) : (
              <FaRegStar color="#e4e5e9" size={22} />
            )}
          </span>
        );
      })}
    </div>
  );
};

export default RatingStars;

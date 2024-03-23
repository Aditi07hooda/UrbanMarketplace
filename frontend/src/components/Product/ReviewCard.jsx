import React from "react";
import profilePng from "../../images/Profile.png";
import StarIcon from "../../images/StarIcon.png"; // Assuming you have a star icon image

const ReviewCard = ({ review }) => {
  const ratingStars = [];
  const roundedRating = Math.round(review.rating);

  for (let i = 1; i <= 5; i++) {
    if (i <= roundedRating) {
      ratingStars.push(
        <img key={i} src={StarIcon} alt="Star" className="h-4 w-4" />
      );
    } else {
      ratingStars.push(
        <img
          key={i}
          src={StarIcon}
          alt="Empty Star"
          className="h-4 w-4 opacity-50"
        />
      );
    }
  }

  return (
    <div className="border p-4 rounded-lg shadow-md flex items-center space-x-4">
      <img src={profilePng} alt="User" className="h-10 w-10 rounded-full" />
      <div>
        <p className="font-semibold">{review.name}</p>
        <div className="flex items-center space-x-1">
          {ratingStars}
        </div>
        <p className="text-gray-600">{review.comment}</p>
      </div>
    </div>
  );
};

export default ReviewCard;

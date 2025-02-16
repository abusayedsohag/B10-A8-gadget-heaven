import React from "react";

const RatingStars = ({ rating, maxStars = 5 }) => {
  const filledStars = Math.floor(rating); // Number of full stars
  const halfStar = rating % 1 !== 0; // Check if there's a half star
  const emptyStars = maxStars - filledStars - (halfStar ? 1 : 0); // Remaining stars

  return (
    <div className="flex items-center">
      {/* Full Stars */}
      {Array(filledStars)
        .fill(0)
        .map((_, index) => (
          <span key={`filled-${index}`} className="text-yellow-500">
            ★
          </span>
        ))}

      {/* Half Star */}
      {halfStar && (
        <span className="text-yellow-500">
          ☆{/* Or use a half-star SVG/icon */}
        </span>
      )}

      {/* Empty Stars */}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <span key={`empty-${index}`} className="text-gray-300">
            ★
          </span>
        ))}
    </div>
  );
};

export default RatingStars;
import React from 'react';

interface ReviewCardProps {
  title: string;
  rating: number;
  date: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ title, rating, date }) => {
  return (
    <div>
      <p>{title}</p>
      <p>⭐ {rating}</p>
      <p>{date}</p>
    </div>
  );
};

export default ReviewCard;

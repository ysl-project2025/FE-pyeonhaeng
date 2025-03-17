import React from 'react';
import ReviewCard from './ReviewCard';

interface Review {
  id: number;
  title: string;
  rating: number;
  date: string;
}

interface ReviewListProps {
  reviews: Review[];
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews }) => {
  return (
    <div>
      {reviews.map((review) => (
        <ReviewCard
          key={review.id}
          title={review.title}
          rating={review.rating}
          date={review.date}
        />
      ))}
    </div>
  );
};

export default ReviewList;

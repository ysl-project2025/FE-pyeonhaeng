import React from 'react';
import ReviewCard from './ReviewCard';
import Review from '../../types/review';

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

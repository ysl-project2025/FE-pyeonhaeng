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
          key={review.reviewId}
          title={review.content}
          rating={review.rating}
          date={review.createdAt}
        />
      ))}
    </div>
  );
};

export default ReviewList;

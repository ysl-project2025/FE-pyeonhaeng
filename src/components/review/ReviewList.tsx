import React from 'react';
import ReviewCard from './ReviewCard';
import Review from '../../types/review';
import styled from '@emotion/styled';

interface ReviewListProps {
  reviews: Review[];
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews }) => {
  return (
    <ReviewWrap>
      {reviews.map((review) => (
        <ReviewCard
          key={review.reviewId}
          title={review.content}
          rating={review.rating}
          date={review.createdAt}
        />
      ))}
    </ReviewWrap>
  );
};

export default ReviewList;

const ReviewWrap = styled.div`
  margin-bottom: 2rem;
  overflow-y: scroll;
`;

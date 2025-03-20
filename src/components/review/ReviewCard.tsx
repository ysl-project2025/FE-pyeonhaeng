import React from 'react';
import { ReviewWrap } from '../../styles/common.css';

interface ReviewCardProps {
  title: string;
  rating: number;
  date: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ title, rating, date }) => {
  return (
    <ReviewWrap>
      <ul>
        <li className='rating'>⭐ {rating}</li>
        <li className='date'>{date}</li>
      </ul>
      <p>{title}</p>
    </ReviewWrap>
  );
};

export default ReviewCard;

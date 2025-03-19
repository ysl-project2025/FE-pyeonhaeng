import React from 'react';

interface ReviewWriteButtonProps {
  onClick: () => void;
}

const ReviewWriteButton: React.FC<ReviewWriteButtonProps> = ({ onClick }) => {
  return <button onClick={onClick}>리뷰 작성</button>;
};

export default ReviewWriteButton;

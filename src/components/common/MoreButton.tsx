import React from 'react';

interface MoreButtonProps {
  onClick: () => void;
}

const MoreButton: React.FC<MoreButtonProps> = ({ onClick }) => {
  return <button onClick={onClick}>더보기</button>;
};

export default MoreButton;

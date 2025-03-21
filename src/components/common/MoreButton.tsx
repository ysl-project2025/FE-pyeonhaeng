import React from 'react';

interface MoreButtonProps {
  onClick: () => void;
}

const MoreButton: React.FC<MoreButtonProps> = ({ onClick }) => {
  return <button style={{ width: "100%" }} onClick={onClick}>더보기</button>;
};

export default MoreButton;

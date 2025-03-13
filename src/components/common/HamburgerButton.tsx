// components/HamburgerButton.tsx
import React from 'react';

interface HamburgerButtonProps {
  onClick: () => void;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      {/* 여기서는 단순 텍스트로 "햄버거 아이콘"이라고 표기 */}
      햄버거 아이콘***
    </button>
  );
};

export default HamburgerButton;

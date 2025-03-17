// components/Header.tsx
import React from 'react';
import HamburgerButton from './HamburgerButton';
import SortButton from './SortButton'; // ✅ SortDropdown → SortButton (정확한 이름 사용)

interface HeaderProps {
  onHamburgerClick: () => void;
  onSortChange: (sortType: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onHamburgerClick, onSortChange }) => {
  return (
    <header>
      <HamburgerButton onClick={onHamburgerClick} />
      <SortButton onSort={onSortChange} />
    </header>
  );
};

export default Header;

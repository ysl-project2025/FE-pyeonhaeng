// components/Header.tsx
import React, { useState } from 'react';
import HamburgerButton from './HamburgerButton';
import SearchBar from './SearchBar';
import SortButton from './SortButton'; // ✅ SortDropdown → SortButton (정확한 이름 사용)

interface HeaderProps {
  onHamburgerClick: () => void;
  onSearch: (keyword: string) => void;
  onSortChange: (sortType: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  onHamburgerClick,
  onSearch,
  onSortChange,
}) => {
  const [searchKeyword, setSearchKeyword] = useState('');

  return (
    <header className="header-container">
      <HamburgerButton onClick={onHamburgerClick} />
      <SearchBar
        value={searchKeyword}
        onChange={setSearchKeyword}
        onSearch={onSearch}
      />
      {/* ✅ onChange -> onSort로 변경 */}
      <SortButton onSort={onSortChange} />
    </header>
  );
};

export default Header;

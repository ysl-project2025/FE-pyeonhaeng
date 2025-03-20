import React, { useState } from 'react';
import Header from '../components/common/Header2';
import ProductList from '../components/product/ProductsList';
import SearchBar from '../components/common/SearchBar';

const IndexPage: React.FC = () => {
  // 검색어와 정렬 상태를 여기서 관리
  const [searchKeyword, setSearchKeyword] = useState('');
  const [sortType, setSortType] = useState('default'); // ✅ state 올바르게 수정

  // 햄버거 버튼 클릭 시 사이드바 열기/닫기 등의 로직
  const handleHamburgerClick = () => {
    console.log('햄버거 버튼 클릭 -> 사이드바 열기/닫기');
  };

  // ✅ 검색어 변경 시 기존 검색 결과 초기화 후 새로운 검색 실행
  const handleSearch = (keyword: string) => {
    setSearchKeyword(keyword); // ✅ 기존 검색어 초기화 후 새로운 검색 실행
  };

  // 정렬 기준 업데이트
  const handleSortChange = (type: string) => {
    setSortType(type);
    console.log(`정렬: ${type}`);
  };

  return (
    <div>
      <Header
        onHamburgerClick={handleHamburgerClick}
        onSortChange={handleSortChange}
      />
      <SearchBar value={searchKeyword} onSearch={handleSearch} />
      <ProductList searchKeyword={searchKeyword} sortType={sortType} />{' '}
      {/* ✅ 정렬 기준 추가 */}
    </div>
  );
};

export default IndexPage;

import { useSearchParams } from 'react-router-dom';
import ProductList from '../components/product/ProductsList';
import { useState } from 'react';
import styled from '@emotion/styled';
import { Section } from '../styles/common.css';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const searchKeyword = searchParams.get('query') || '';
  const [sortType, setSortType] = useState('default'); // ✅ state 올바르게 수정

  // 정렬 기준 업데이트
  const handleSortChange = (type: string) => {
    setSortType(type);
    console.log(`정렬: ${type}`);
  };

  return (
    <div>
        <SearchKeywordWrap>
            "<b>{searchKeyword}</b>" 검색 결과
        </SearchKeywordWrap>
      <div style={{display: "none"}}>
        <button onClick={() => handleSortChange('price')}>가격순</button>
        <button onClick={() => handleSortChange('latest')}>최신순</button>
      </div>

      {/* ✅ 검색어와 정렬 기준을 ProductList에 전달 */}
      <Section>
        <ProductList searchKeyword={searchKeyword} sortType={sortType} />
      </Section>
    </div>
  );
};

export default SearchPage;

const SearchKeywordWrap = styled.p`
    padding: 2rem 1.5rem;
    font-size: 1.8rem;
    b{
        font-weight: bold;
    }
`;
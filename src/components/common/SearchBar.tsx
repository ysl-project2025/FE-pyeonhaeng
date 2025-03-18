import styled from '@emotion/styled';
import React, { useState, useEffect } from 'react';
import { SearchBtnOrg, Section, alc, flexStyle, jb } from '../../styles/common.css';

interface SearchBarProps {
  value?: string; // value를 선택적(optional)으로 설정
  // onChange: (value: string) => void;
  onSearch: (keyword: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value = '', onSearch }) => {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value); // 부모 컴포넌트의 value 변경 시 동기화
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); // 로컬 상태만 변경
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch(inputValue);
    }
  };


  const SearchWrap = styled.div`
    ${flexStyle}
    ${jb}
    ${alc}
    border: 2px solid var(--primary);
    border-radius: 2rem;
    margin: 2rem 0;
    padding: 0 1.5rem;
    input{
      height: auto;
      border: 0;
      padding: 0;
    }
    button{
      width: 4rem;
      height: 4rem;
    }
  `;

  return (
    <>
      <SearchWrap>
        <input
          type="text"
          placeholder="상품 ID 입력"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          style={{margin: 0}}
        />
        <SearchBtnOrg onClick={() => onSearch(inputValue)}>검색</SearchBtnOrg>
      </SearchWrap>
    </>
  );
};

export default SearchBar;

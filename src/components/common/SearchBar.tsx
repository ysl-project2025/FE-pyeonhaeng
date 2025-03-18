import styled from '@emotion/styled';
import React, { useState, useEffect } from 'react';
import { alc, flexStyle, jb } from '../../styles/common.css';

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
  `;

  return (
    <SearchWrap>
      <input
        type="text"
        placeholder="상품 ID 입력"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        style={{margin: 0}}
      />
      <button onClick={() => onSearch(inputValue)}>검색</button>
    </SearchWrap>
  );
};

export default SearchBar;

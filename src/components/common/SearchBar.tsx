import styled from '@emotion/styled';
import React, { useState, useEffect, useRef } from 'react';
import { SearchBtnOrg, alc, flexStyle, jb } from '../../styles/common.css';

interface SearchBarProps {
  value?: string;
  onSearch: (keyword: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value = '', onSearch }) => {
  const [inputValue, setInputValue] = useState(value); // ✅ 검색어 상태
  const inputRef = useRef<HTMLInputElement>(null); // ✅ 입력 값을 추적하는 ref

  // ✅ 부모 `value`가 변경될 때만 업데이트 (입력 중 초기화 방지)
  useEffect(() => {
    if (value !== inputValue) {
      setInputValue(value);
    }
  }, [value]);

  // ✅ 입력 시 useRef 값만 변경 (상태 변경 X → 리렌더링 방지)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (inputRef.current) {
      inputRef.current.value = e.target.value;
    }
  };

  // ✅ Enter 키 입력 시 검색 실행
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // ✅ 검색 버튼 클릭 시 실행
  const handleSearch = () => {
    const searchValue = inputRef.current ? inputRef.current.value : '';
    setInputValue(searchValue); // ✅ 상태 업데이트
    onSearch(searchValue); // ✅ 부모 상태 업데이트
  };

  const SearchWrap = styled.div`
    ${flexStyle}
    ${jb}
    ${alc}
    border: 2px solid var(--primary);
    border-radius: 2rem;
    margin: 2rem 0;
    padding: 0 1.5rem;

    input {
      height: auto;
      border: 0;
      padding: 0;
      outline: none;
    }

    button {
      width: 4rem;
      height: 4rem;
    }
  `;
  console.log(inputValue);
  return (
    <SearchWrap>
      <input
        type="text"
        placeholder="상품 검색"
        defaultValue={inputValue} // ✅ defaultValue로 input 초기값 설정 (state X)
        ref={inputRef} // ✅ useRef 사용 (입력 중 상태 변경 방지)
        onChange={handleChange} // ✅ 상태 변경 X
        onKeyDown={handleKeyDown} // ✅ Enter 키 입력 시 검색 실행
        style={{ margin: 0 }}
      />
      <SearchBtnOrg onClick={handleSearch}>검색</SearchBtnOrg>
    </SearchWrap>
  );
};

export default SearchBar;

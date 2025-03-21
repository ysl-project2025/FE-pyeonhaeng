import React from 'react';

interface SortButtonProps {
  onSort?: (option: string) => void; // ✅ 정렬 변경 시 실행되는 함수
}

// ✅ 한글 옵션과 API 키 값 매핑
const SORT_OPTIONS: { label: string; value: string }[] = [
  { label: '기본', value: 'default' }, // ✅ 기본 정렬 추가
  { label: '조회수', value: 'view_count' },
  { label: '신상품', value: 'new' },
  { label: '평점', value: 'score' },
  { label: '리뷰', value: 'review' },
];

const SortButton: React.FC<SortButtonProps> = ({ onSort }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onSort) {
      onSort(e.target.value);
    }
  };

  return (
    <select onChange={handleChange} defaultValue="default">
      {SORT_OPTIONS.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SortButton;

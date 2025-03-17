// components/SortButton.tsx
import React from 'react';

interface SortButtonProps {
  options?: string[]; // 정렬 옵션 (기본값 제공 가능)
  onSort?: (option: string) => void; // 옵션 선택 시 실행되는 함수 (선택적)
}

const SortButton: React.FC<SortButtonProps> = ({
  options = ['리뷰', '추천', '조회'],
  onSort,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onSort) {
      onSort(e.target.value);
    }
  };

  return (
    <select onChange={handleChange} defaultValue={options[0]}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SortButton;

import { useState, useEffect } from 'react';

interface PageNationProps {
  totalItems: number;
  itemCountPerPage: number;
  pageCount: number;
  currentPage: number;
  onPageChange: (page: number) => void; // ✅ 페이지 변경 핸들러
}

export default function PageNation({
  totalItems,
  itemCountPerPage,
  pageCount,
  currentPage,
  onPageChange,
}: PageNationProps) {
  const totalPages = Math.ceil(totalItems / itemCountPerPage);
  const [start, setStart] = useState(1);

  const noPrev = start === 1;
  const noNext = start + pageCount - 1 >= totalPages;

  // ✅ currentPage가 변경될 때 start 값을 조정
  useEffect(() => {
    if (currentPage >= start + pageCount) setStart((prev) => prev + pageCount);
    if (currentPage < start) setStart((prev) => prev - pageCount);
  }, [currentPage, pageCount, start]);

  return (
    <div>
      <ul
        style={{ display: 'flex', listStyle: 'none', gap: '10px', padding: 0 }}
      >
        {/* 이전 버튼 */}
        <li
          style={{
            cursor: noPrev ? 'default' : 'pointer',
            opacity: noPrev ? 0.5 : 1,
          }}
        >
          <button
            disabled={noPrev}
            onClick={() => !noPrev && onPageChange(start - 1)}
          >
            이전
          </button>
        </li>

        {/* 페이지 번호 */}
        {[...Array(pageCount)].map((_, i) => {
          const pageNum = start + i;
          return (
            pageNum <= totalPages && (
              <li
                key={i}
                style={{
                  fontWeight: currentPage === pageNum ? 'bold' : 'normal',
                }}
              >
                <button onClick={() => onPageChange(pageNum)}>{pageNum}</button>
              </li>
            )
          );
        })}

        {/* 다음 버튼 */}
        <li
          style={{
            cursor: noNext ? 'default' : 'pointer',
            opacity: noNext ? 0.5 : 1,
          }}
        >
          <button
            disabled={noNext}
            onClick={() => !noNext && onPageChange(start + pageCount)}
          >
            다음
          </button>
        </li>
      </ul>
    </div>
  );
}

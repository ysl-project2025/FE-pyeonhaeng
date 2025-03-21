import React, { useState } from 'react';
import ReviewList from '../components/review/ReviewList';
import PageNation from '../components/common/PageNation';
import { useLocation } from 'react-router-dom';
import useReviews from '../hooks/review/useReviews';
import Review from '../types/review';
<<<<<<< HEAD
=======
import { ReviewModal } from '../styles/common.css';
import styled from '@emotion/styled';
import closeIcon from '../assets/icons/close.png';
>>>>>>> develop

interface ReviewPageProps {
  reviews: Review[];
  onClose: () => void;
}

const ReviewPage: React.FC<ReviewPageProps> = ({ onClose }) => {
  const location = useLocation();
  const productId = location.state?.productId;
  const { reviews } = useReviews(productId);
  const [currentPage, setCurrentPage] = useState(1);
  const itemCountPerPage = 5; // ✅ 한 페이지당 리뷰 개수

  if (!reviews) return null; // ✅ 데이터가 없으면 렌더링하지 않음

  const totalItems = reviews.length;
  const totalPages = Math.ceil(totalItems / itemCountPerPage);

  // ✅ 현재 페이지의 리뷰 리스트
  const startIndex = (currentPage - 1) * itemCountPerPage;
  const visibleReviews = reviews.slice(
    startIndex,
    startIndex + itemCountPerPage,
  );

  return (
    <ReviewModal className="review-modal">
      {/* 모달 닫기 버튼 */}
      {/* <button className="close-button" onClick={onClose}>
        닫기
      </button> */}
      <CloseIcon
        src={closeIcon}
        alt="닫기"
        className="close-button"
        onClick={onClose}
      />

      {/* 리뷰 리스트 */}
      <ReviewList reviews={visibleReviews} />

      {/* 페이지네이션 - 2페이지 이상일 때만 표시 */}
      {totalPages > 1 && (
        <PageNation
          totalItems={totalItems}
          itemCountPerPage={itemCountPerPage}
          pageCount={5}
          currentPage={currentPage}
          onPageChange={setCurrentPage} // ✅ 현재 페이지 변경
        />
      )}
<<<<<<< HEAD
    </div>
=======
    </ReviewModal>
>>>>>>> develop
  );
};

export default ReviewPage;

const CloseIcon = styled.img`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 3rem;
  height: 3rem;
`;
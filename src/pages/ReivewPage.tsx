import React from 'react';
import ReviewList from '../components/review/ReviewList';
import PageNation from '../components/common/PageNation';

interface ReviewPageProps {
  onClose: () => void;
}

const ReviewPage: React.FC<ReviewPageProps> = ({ onClose }) => {
  return (
    <div className="review-modal">
      {/* 모달 닫기 버튼 */}
      <button className="close-button" onClick={onClose}>
        닫기
      </button>

      {/* 리뷰 리스트 */}
      <ReviewList reviews={[]} />

      {/* 페이지네이션 */}
      <PageNation
        totalItems={0}
        itemCountPerPage={5}
        pageCount={5}
        currentPage={1}
        onPageChange={() => {}}
      />
    </div>
  );
};

export default ReviewPage;

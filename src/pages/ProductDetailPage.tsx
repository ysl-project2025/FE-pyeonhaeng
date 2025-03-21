import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // ✅ useLocation 추가
import useProductDetail from '../hooks/product/useProductDetail';
import ImageViewer from '../components/common/ImageViewer';
import ProductDetail from '../components/product/ProductDetail';
import ReviewWriteButton from '../components/review/ReviewWriteButton';
import ReviewList from '../components/review/ReviewList';
import MoreButton from '../components/common/MoreButton';
import ReviewPage from '../pages/ReivewPage'; // ✅ ReviewPage 추가
import useReviews from '../hooks/review/useReviews';
import { Section, ImgWrap } from '../styles/common.css';

const ProductDetailPage: React.FC = () => {
  const location = useLocation(); // ✅ useLocation 사용
  const productId = location.state?.productId; // ✅ state에서 productId 가져오기
  const { reviews } = useReviews(productId);
  const { product, loading, error } = useProductDetail(productId);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false); // ✅ 모달 상태 추가

  if (!productId) return <p>상품 ID가 없습니다.</p>;
  if (loading) return <p>상품 정보를 불러오는 중...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>상품 정보가 없습니다.</p>;

  // ✅ 리뷰 5개만 보여주기
  const visibleReviews = reviews.slice(0, 5);
  const hasMoreReviews = reviews.length > 5; // ✅ 5개 이상일 때만 "더보기" 버튼 표시

  return (
    <div>
      {/* ✅ 이미지 뷰어 & 상품 정보 */}
      <Section>
        <ImgWrap className="detailImg">
          <ImageViewer
            src={product.product_image_url}
            alt={product.product_name}
          />
        </ImgWrap>
        <ProductDetail
          name={product.product_name}
          price={product.product_price}
        />
      </Section>

      <Section>
        {/* ✅ 리뷰 작성 버튼 */}
        <ReviewWriteButton onClick={() => console.log('리뷰 작성 모달 열기!')} />

<<<<<<< HEAD
      {/* ✅ 처음 5개 리뷰만 표시 */}
      <ReviewList reviews={visibleReviews} />

      {/* ✅ 리뷰가 5개 초과할 경우 "더보기" 버튼 표시 */}
      {hasMoreReviews && (
        <MoreButton onClick={() => setIsReviewModalOpen(true)} />
      )}

      {/* ✅ ReviewPage 모달 - 모든 리뷰를 표시 */}
      {isReviewModalOpen && (
        <ReviewPage
          reviews={reviews}
          onClose={() => setIsReviewModalOpen(false)}
        />
      )}
=======
        {/* ✅ 처음 5개 리뷰만 표시 */}
        <ReviewList reviews={visibleReviews} />

        {/* ✅ 리뷰가 5개 초과할 경우 "더보기" 버튼 표시 */}
        {hasMoreReviews && (
          <MoreButton onClick={() => setIsReviewModalOpen(true)} />
        )}

        {/* ✅ ReviewPage 모달 - 모든 리뷰를 표시 */}
        {isReviewModalOpen && (
          <ReviewPage
            reviews={reviews}
            onClose={() => setIsReviewModalOpen(false)}
          />
        )}
      </Section>
>>>>>>> develop
    </div>
  );
};

export default ProductDetailPage;

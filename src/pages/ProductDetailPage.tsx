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

const ProductDetailPage: React.FC = () => {
  const location = useLocation(); // ✅ useLocation 사용
  const productId = location.state?.productId; // ✅ state에서 productId 가져오기
  const { reviews } = useReviews(productId);
  const { product, loading, error } = useProductDetail(productId);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false); // ✅ 모달 상태 추가

  if (!productId) return <p>상품 ID가 없습니다.</p>; // ✅ ID가 없을 경우 처리
  if (loading) return <p>상품 정보를 불러오는 중...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>상품 정보가 없습니다.</p>;
  console.log(product.product_image_url);
  return (
    <div>
      {/* ✅ 이미지 뷰어 & 상품 정보 */}
      <div>
        <ImageViewer
          src={product.product_image_url}
          alt={product.product_name}
        />
        <ProductDetail
          name={product.product_name}
          price={product.product_price}
        />
      </div>

      {/* ✅ 리뷰 작성 버튼 */}
      <ReviewWriteButton onClick={() => console.log('리뷰 작성 모달 열기!')} />

      {/* ✅ 리뷰 목록 */}
      <ReviewList reviews={reviews} />

      {/* ✅ 더보기 버튼 클릭 시 리뷰 모달 열기 */}
      <MoreButton onClick={() => setIsReviewModalOpen(true)} />

      {/* ✅ ReviewPage 모달 */}
      {isReviewModalOpen && (
        <ReviewPage onClose={() => setIsReviewModalOpen(false)} />
      )}
    </div>
  );
};

export default ProductDetailPage;

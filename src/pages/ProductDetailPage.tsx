import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useProductDetail from '../hooks/product/useProductDetail';
import ImageViewer from '../components/common/ImageViewer';
import ProductDetail from '../components/product/ProductDetail';
import ReviewWriteButton from '../components/review/ReviewWriteButton';
import ReviewList from '../components/review/ReviewList';
import MoreButton from '../components/common/MoreButton';
import ReviewPage from '../pages/ReivewPage'; // ✅ ReviewPage 추가
import Review from '../types/review';

const mockReviews: Review[] = [
  { id: 1, title: '좋은 상품!', rating: 5, date: '2024-03-18' },
  { id: 2, title: '괜찮아요', rating: 4, date: '2024-03-17' },
  { id: 3, title: '별로였어요', rating: 2, date: '2024-03-16' },
];

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { product, loading, error } = useProductDetail(productId);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false); // ✅ 모달 상태 추가

  if (loading) return <p>상품 정보를 불러오는 중...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>상품 정보가 없습니다.</p>;

  return (
    <div>
      {/* ✅ 이미지 뷰어 & 상품 정보 */}
      <div>
        <ImageViewer src={product.productUrl} alt={product.name} />
        <ProductDetail
          productId={product.productId}
          name={product.name}
          price={product.price}
        />
      </div>

      {/* ✅ 리뷰 작성 버튼 */}
      <ReviewWriteButton onClick={() => console.log('리뷰 작성 모달 열기!')} />

      {/* ✅ 리뷰 목록 */}
      <ReviewList reviews={mockReviews} />

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

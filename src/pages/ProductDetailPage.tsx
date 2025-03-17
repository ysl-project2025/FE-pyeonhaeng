import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ImageViewer from '../components/common/Imageviewer';
import ProductDetail from '../components/product/Productdetail';
import ReviewWriteButton from '../components/review/ReviewWriteButton';
import ReviewList from '../components/review/ReviewList';
import MoreButton from '../components/common/MoreButton';

interface Review {
  id: number;
  title: string;
  rating: number;
  date: string;
}

interface Product {
  imageUrl: string;
  productName: string;
  productPrice: number;
  reviews: Review[];
}

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get(
          `https://your-api.com/products/${productId}`,
        );
        setProduct(response.data);
      } catch (err) {
        setError('상품 정보를 불러오는 데 실패했습니다.');
        console.error('상품 데이터를 불러오는 중 오류 발생:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) return <p>상품 정보를 불러오는 중...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>상품 정보가 없습니다.</p>;

  return (
    <div>
      {/* 이미지 뷰어 & 상품 정보 */}
      <div>
        <ImageViewer src={product.imageUrl} alt={product.productName} />
        <ProductDetail
          name={product.productName}
          price={product.productPrice}
        />
      </div>

      {/* 리뷰 작성 버튼 */}
      <ReviewWriteButton onClick={() => console.log('리뷰 작성 모달 열기!')} />

      {/* 리뷰 목록 */}
      <ReviewList reviews={product.reviews} />

      {/* 더보기 버튼 */}
      <MoreButton onClick={() => console.log('더 많은 리뷰 불러오기!')} />
    </div>
  );
};

export default ProductDetailPage;

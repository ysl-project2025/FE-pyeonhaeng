import { useState, useEffect } from 'react';
import { AxiosError } from 'axios'; // ✅ AxiosError만 임포트
import api from '../../utils/api'; // ✅ 전역 axios 인스턴스 사용
import { ProductDetailResponse, Product } from '../../types/product';

const useProductDetail = (productId: string | undefined) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!productId) return;

    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await api.get<ProductDetailResponse>(
          `/product/${productId}`,
        );

        setProduct(response.data.data);
      } catch (err) {
        const error = err as AxiosError;

        if (error.response?.status === 404) {
          setError('상품 없음'); // 404 응답 처리
        } else {
          setError('상품 정보를 불러오는 데 실패했습니다.');
        }
        console.error('상품 데이터를 불러오는 중 오류 발생:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  return { product, loading, error };
};

export default useProductDetail;

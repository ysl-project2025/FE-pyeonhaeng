import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios'; // ✅ AxiosError 추가
import { ProductDetailResponse, Product } from '../../types/product';

const url = import.meta.env.VITE_API_BASE_URL;

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

        const response = await axios.get<ProductDetailResponse>(
          `${url}/product/${productId}`,
        );
        setProduct(response.data.data);
      } catch (err) {
        // ✅ AxiosError 타입을 사용하여 명확한 오류 처리
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

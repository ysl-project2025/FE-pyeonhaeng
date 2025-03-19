import { useState } from 'react';
import api from '../../utils/api'; // ✅ 전역 axios 인스턴스 사용
import { Product } from '../../types/product';
import { AxiosError } from 'axios';

const useProductSearch = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const searchProduct = async (productId: string) => {
    if (!productId.trim()) return;

    setLoading(true);
    setError(null);
    setProduct(null);

    try {
      const response = await api.get(`/product/${productId}`);
      setProduct(response.data.data);
    } catch (err) {
      const error = err as AxiosError;
      if (error instanceof Error) {
        if (error.response?.status === 404) {
          setError('상품을 찾을 수 없습니다.');
        } else {
          setError('상품 정보를 불러오는 중 오류가 발생했습니다.');
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return { product, error, loading, searchProduct };
};

export default useProductSearch;

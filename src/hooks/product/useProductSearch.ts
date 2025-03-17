import { useState } from 'react';
import { Product } from '../../types/product';

const url = import.meta.env.VITE_API_BASE_URL;

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
      const response = await fetch(`${url}/product/${productId}`); // ✅ 수정됨
      if (!response.ok) {
        if (response.status === 404) {
          setError('상품을 찾을 수 없습니다.');
        } else {
          setError('상품 정보를 불러오는 중 오류가 발생했습니다.');
        }
        return;
      }

      const data = await response.json();
      setProduct(data.data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return { product, error, loading, searchProduct };
};

export default useProductSearch;

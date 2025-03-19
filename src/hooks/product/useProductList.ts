import { useState, useEffect } from 'react';
import api from '../../utils/api'; // ✅ 전역 axios 인스턴스 사용
import { AllProduct, ProductApiResponse } from '../../types/product';

const useProductList = (page: number) => {
  const [products, setProducts] = useState<AllProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const response = await api.get<ProductApiResponse>(
          `/product?page=${page}`,
        );

        console.log(response.data.data);
        setProducts((prevProducts) => [
          ...prevProducts,
          ...(response.data.data || []),
        ]);
      } catch (err) {
        console.error(err);
        setError('상품 목록을 불러오는 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page]);

  return { products, loading, error };
};

export default useProductList;

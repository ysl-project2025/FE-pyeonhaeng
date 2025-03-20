import { useState, useEffect } from 'react';
import api from '../../utils/api'; // ✅ 전역 axios 인스턴스 사용
import { AllProduct } from '../../types/product';

const SORT_ENDPOINTS: Record<string, string> = {
  view_count: '/product/find/view_count',
  new: '/product/find/new',
  score: '/product/find/score',
  review: '/product/find/review',
};

const useProductSort = (sortType: string) => {
  const [products, setProducts] = useState<AllProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!sortType || sortType === 'default') {
      setProducts([]); // ✅ 기본 정렬일 경우 기존 데이터 유지
      return;
    }

    const fetchSortedProducts = async () => {
      try {
        setLoading(true);
        const response = await api.get(SORT_ENDPOINTS[sortType]);

        console.log(`🔍 정렬(${sortType}) 결과:`, response.data.data);

        setProducts(response.data.data || []);
      } catch (err) {
        console.error(`❌ 상품 정렬(${sortType}) 중 오류 발생:`, err);
        setError('상품 정렬 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchSortedProducts();
  }, [sortType]);

  return { products, loading, error };
};

export default useProductSort;

import { useState, useEffect } from 'react';
import api from '../../utils/api'; // ✅ 전역 axios 인스턴스 사용
import { AllProduct } from '../../types/product';

const useProductSearch = (searchKeyword: string) => {
  const [products, setProducts] = useState<AllProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!searchKeyword) {
      setProducts([]); // ✅ 검색어가 없으면 리스트 초기화
      return;
    }

    const fetchProducts = async () => {
      try {
        setLoading(true);
        const encodedKeyword = encodeURIComponent(searchKeyword);
        const response = await api.get(`/product/find/${encodedKeyword}`);

        console.log('🔍 검색 결과:', response.data.data);

        setProducts(response.data.data || []); // ✅ 기존 리스트 유지 X, 새로운 데이터로 덮어쓰기
      } catch (err) {
        console.error('❌ 상품 검색 중 오류 발생:', err);
        setError('상품 검색 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [searchKeyword]); // ✅ 검색어 변경 시만 실행

  return { products, loading, error };
};

export default useProductSearch;

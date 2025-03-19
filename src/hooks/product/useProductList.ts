import { useState, useEffect } from 'react';
import axios from 'axios';
import { AllProduct, ProductApiResponse } from '../../types/product';
const url = import.meta.env.VITE_API_BASE_URL;
const useProductList = (page: number) => {
  const [products, setProducts] = useState<AllProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get<ProductApiResponse>(
          `${url}/product?page=${page}`,
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
  }, [page]); // 페이지가 변경될 때마다 호출

  return { products, loading, error };
};

export default useProductList;

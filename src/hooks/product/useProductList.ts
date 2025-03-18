import { useState, useEffect } from 'react';
import axios from 'axios';
import { AllProduct, ProductApiResponse } from '../../types/product';

const url = import.meta.env.VITE_BASE_URL;

const useProductList = () => {
  const [products, setProducts] = useState<AllProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get<ProductApiResponse>(`${url}/product`);
        setProducts(response.data.data || []);
      } catch (err) {
        console.error(err);
        setError('상품 목록을 불러오는 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};

export default useProductList;

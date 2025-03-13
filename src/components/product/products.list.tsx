import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './product.card';
import { AllProduct, ProductApiResponse } from '../../types/product';

interface ProductPageProps {
  searchKeyword?: string; // 검색 키워드를 상위에서 받아올 수도 있음
  sortType?: string; // 정렬 기준을 상위에서 받아올 수도 있음
}

const ProductPage: React.FC<ProductPageProps> = ({
  searchKeyword,
  sortType,
}) => {
  const [products, setProducts] = useState<AllProduct[]>([]);

  useEffect(() => {
    // API를 호출해서 상품 목록을 가져옵니다.
    const fetchProducts = async () => {
      try {
        const response = await axios.get<ProductApiResponse>(
          'https://example.com/api/products',
        );
        setProducts(response.data.data);
      } catch (error) {
        console.error('상품 데이터를 불러오는 중 오류 발생:', error);
      }
    };

    fetchProducts();
  }, []);
  useEffect(() => {
    if (searchKeyword) {
      console.log(`검색 키워드: ${searchKeyword}`);
      // 실제로는 products를 필터링하거나 재호출하는 로직 등을 구현
    }
  }, [searchKeyword]);

  useEffect(() => {
    if (sortType) {
      console.log(`정렬 기준: ${sortType}`);
      // 실제로는 products를 정렬하거나 재호출하는 로직 등을 구현
    }
  }, [sortType]);

  // 상품 카드 클릭 시 실행되는 이벤트 핸들러
  const handleProductClick = (id: number) => {
    console.log(`상품 ID ${id} 클릭됨`);
    // 예: 상세 페이지로 이동하거나 모달을 표시하는 등 원하는 동작을 추가
  };

  return (
    <div className="product-page">
      <h1>상품 목록</h1>
      <div className="product-page__list">
        {products.map((product) => (
          <ProductCard
            key={product.productId}
            product={product}
            onClick={handleProductClick}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;

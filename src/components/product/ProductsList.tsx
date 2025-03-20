import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ 추가
import ProductCard from './ProductCard';
import useProductList from '../../hooks/product/useProductList';
import { PATHS } from '../../constants/constants';
import { ListWrap02 } from '../../styles/common.css';

interface ProductPageProps {
  searchKeyword?: string;
  sortType?: string;
}

const ProductPage: React.FC<ProductPageProps> = ({
  searchKeyword,
  sortType,
}) => {
  const [page, setPage] = useState(1);
  const { products, loading, error } = useProductList(page);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const navigate = useNavigate(); // ✅ 페이지 이동을 위한 useNavigate 훅 추가

  useEffect(() => {
    setPage(1);
  }, [searchKeyword, sortType]);

  const lastElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return;
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setPage((prev) => prev + 1);
          }
        },
        { threshold: 1.0 },
      );

      if (node) observerRef.current.observe(node);
    },
    [loading],
  );

  // ✅ 상품 클릭 시 해당 상품의 상세 페이지로 이동
  const handleProductClick = (id: number) => {
    navigate(PATHS.product_detail, { state: { productId: id } }); // ✅ `state`로 id 전달
  };

  return (
    <div className="product-page">
      <h1>상품 목록</h1>
      {error && <p>{error}</p>}
      <ListWrap02 className="product-page__list">
        {products.map((product, index) => {
          if (index === products.length - 1) {
            return (
              <div ref={lastElementRef} key={product.product_id}>
                <ProductCard product={product} onClick={handleProductClick} />
              </div>
            );
          }
          return (
            <ProductCard
              key={product.product_id}
              product={product}
              onClick={handleProductClick}
            />
          );
        })}
      </ListWrap02>
      {loading && <p>상품을 불러오는 중...</p>}
    </div>
  );
};

export default ProductPage;

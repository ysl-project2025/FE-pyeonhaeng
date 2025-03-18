import React, { useEffect } from 'react';
import ProductCard from './ProductCard';
import useProductList from '../../hooks/product/useProductList'; // ✅ 새로 만든 훅을 사용

interface ProductPageProps {
  searchKeyword?: string;
  sortType?: string;
}

const ProductPage: React.FC<ProductPageProps> = ({
  searchKeyword,
  sortType,
}) => {
  const { products, loading, error } = useProductList(); // ✅ 상품 목록 불러오기

  useEffect(() => {
    if (searchKeyword) {
      console.log(`검색 키워드: ${searchKeyword}`);
      // 실제로는 products를 필터링하거나 재호출하는 로직 등을 구현
    }
  }, [searchKeyword]);

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
    navigate(`/product/${id}`); // ✅ /product/{상품 ID} 경로로 이동
  };

  return (
    <div className="product-page">
      <h1>상품 목록</h1>

      {loading && <p>상품을 불러오는 중...</p>}
      {error && <p>{error}</p>}

      <div className="product-page__list">
        {products.map((product, index) => {
          if (index === products.length - 1) {
            return (
              <div ref={lastElementRef} key={product.productId}>
                <ProductCard product={product} onClick={handleProductClick} />
              </div>
            );
          }
          return (
            <ProductCard
              key={product.productId}
              product={product}
              onClick={handleProductClick}
            />
          );
        })}
      </div>
      {loading && <p>상품을 불러오는 중...</p>}
    </div>
  );
};

export default ProductPage;

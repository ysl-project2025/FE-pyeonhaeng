import React, { useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import useProductList from '../../hooks/product/useProductList';
import useSearchProducts from '../../hooks/product/useProductSearch';
import useSortProducts from '../../hooks/product/useProdcutSort';
import { PATHS } from '../../constants/constants';
import { ListWrap02 } from '../../styles/common.css';

interface ProductListProps {
  searchKeyword?: string;
  sortType?: string;
}

const ProductList: React.FC<ProductListProps> = ({
  searchKeyword,
  sortType = 'default',
}) => {
  const [page, setPage] = useState(1);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const navigate = useNavigate();

  // ✅ 상품 목록 불러오기 (페이지네이션 적용)
  const { products: allProducts, loading, error } = useProductList(page);

  // ✅ 검색 결과 (페이지네이션 없음 → 검색어 변경 시 기존 데이터 초기화)
  const { products: searchResults, loading: searchLoading } = useSearchProducts(
    searchKeyword || '',
  );

  // ✅ 정렬 결과 (페이지네이션 없음 → 정렬 기준 변경 시 기존 데이터 초기화)
  const { products: sortedProducts, loading: sortLoading } =
    useSortProducts(sortType);

  // ✅ 무한 스크롤 감지 (페이지네이션 필요할 때만 적용)
  const lastElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (!node || loading || searchKeyword || sortType !== 'default') return; // ✅ 검색/정렬 중이면 무한 스크롤 비활성화

      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setPage((prev) => prev + 1); // ✅ 다음 페이지 요청
          }
        },
        { threshold: 1.0 },
      );

      observerRef.current.observe(node);
    },
    [loading, searchKeyword, sortType],
  );

  // ✅ 상품 클릭 시 상세 페이지로 이동
  const handleProductClick = (id: number) => {
    navigate(PATHS.product_detail, { state: { productId: id } });
  };

  // ✅ 검색어가 있으면 검색 결과, 없으면 정렬된 목록 사용 (기본 정렬 시 useProductList 사용)
  const displayedProducts = searchKeyword
    ? searchResults
    : sortType === 'default'
      ? allProducts
      : sortedProducts.length > 0
        ? sortedProducts
        : allProducts;

  return (
    <div className="product-page">
      {error && <p>{error}</p>}
      <ListWrap02 className="product-page__list">
        {displayedProducts.map((product, index) => {
          if (
            index === displayedProducts.length - 1 &&
            !searchKeyword &&
            sortType === 'default'
          ) {
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
      {(loading || searchLoading || sortLoading) && (
        <p>상품을 불러오는 중...</p>
      )}
      {displayedProducts.length === 0 && <p>검색 결과가 없습니다.</p>}
    </div>
  );
};

export default ProductList;

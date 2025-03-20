import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import useProductList from '../../hooks/product/useProductList';
import useSearchProducts from '../../hooks/product/useProductSearch';
import useSortProducts from '../../hooks/product/useProdcutSort'; // ✅ 정렬 훅 추가
import { PATHS } from '../../constants/constants';

interface ProductListProps {
  searchKeyword?: string;
  sortType?: string;
}

const ProductList: React.FC<ProductListProps> = ({
  searchKeyword,
  sortType = 'default',
}) => {
  const { products: allProducts, loading, error } = useProductList(1);
  const { products: searchResults, loading: searchLoading } = useSearchProducts(
    searchKeyword || '',
  );
  const { products: sortedProducts, loading: sortLoading } =
    useSortProducts(sortType);

  const navigate = useNavigate();

  // ✅ 검색어가 있으면 검색 결과, 없으면 정렬된 목록 사용 (기본 정렬 시 useProductList 사용)
  const displayedProducts = searchKeyword
    ? searchResults
    : sortType === 'default'
      ? allProducts
      : sortedProducts.length > 0
        ? sortedProducts
        : allProducts;

  // ✅ 상품 클릭 시 상세 페이지로 이동
  const handleProductClick = (id: number) => {
    navigate(PATHS.product_detail, { state: { productId: id } });
  };

  return (
    <div className="product-page">
      <h1>상품 목록</h1>
      {error && <p>{error}</p>}
      <div className="product-page__list">
        {displayedProducts.map((product) => (
          <ProductCard
            key={product.product_id}
            product={product}
            onClick={handleProductClick}
          />
        ))}
      </div>
      {(loading || searchLoading || sortLoading) && (
        <p>상품을 불러오는 중...</p>
      )}
      {displayedProducts.length === 0 && <p>검색 결과가 없습니다.</p>}{' '}
      {/* ✅ 검색 결과 없을 때 표시 */}
    </div>
  );
};

export default ProductList;

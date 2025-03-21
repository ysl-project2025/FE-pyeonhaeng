import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import useProductList from '../../hooks/product/useProductList';
import useSearchProducts from '../../hooks/product/useProductSearch';
import useSortProducts from '../../hooks/product/useProdcutSort'; // ✅ 정렬 훅 추가
import { PATHS } from '../../constants/constants';
import { ListWrap02 } from '../../styles/common.css';

interface ProductListProps {
  searchKeyword?: string;
  sortType?: string;
  maxProducts?: number; // ✅ 추가: 최대 표시할 상품 개수
}

const ProductListForIndex: React.FC<ProductListProps> = ({
  searchKeyword,
  sortType = 'default',
  maxProducts = 10, // ✅ 기본값 10개
}) => {
  const { products: allProducts, loading, error } = useProductList(1);
  const { products: searchResults, loading: searchLoading } = useSearchProducts(
    searchKeyword || '',
  );
  const { products: sortedProducts, loading: sortLoading } =
    useSortProducts(sortType);

  const navigate = useNavigate();

  // ✅ 검색어가 있으면 검색 결과, 없으면 정렬된 목록 사용
  const displayedProducts = searchKeyword
    ? searchResults
    : sortType === 'default'
      ? allProducts
      : sortedProducts.length > 0
        ? sortedProducts
        : allProducts;

  // ✅ 최대 개수만큼 자르기
  const limitedProducts = displayedProducts.slice(0, maxProducts);

  const handleProductClick = (id: number) => {
    navigate(PATHS.product_detail, { state: { productId: id } });
  };

  return (
    <div className="product-page">
      {error && <p>{error}</p>}
      <ListWrap02 className="product-page__list">
        {limitedProducts.map((product) => (
          <ProductCard
            key={product.product_id}
            product={product}
            onClick={handleProductClick}
          />
        ))}
      </ListWrap02>
      {(loading || searchLoading || sortLoading) && (
        <p>상품을 불러오는 중...</p>
      )}
      {limitedProducts.length === 0 && <p>검색 결과가 없습니다.</p>}
    </div>
  );
};


export default ProductListForIndex;

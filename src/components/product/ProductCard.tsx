import React from 'react';
import { AllProduct } from '../../types/product';
import ImageViewer from '../common/ImageViewer';
import { ImgWrap, ProductName, ProductPrice } from '../../styles/common.css';

interface ProductCardProps {
  product: AllProduct;
  onClick?: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(product.product_id);
    }
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      <ImgWrap>
        <ImageViewer src={product.product_image_url} alt={product.product_name} />
      </ImgWrap>
      <ProductName>{product.product_name}</ProductName>
      <ProductPrice>{product.product_price}원</ProductPrice>
    </div>
  );
};

export default ProductCard;

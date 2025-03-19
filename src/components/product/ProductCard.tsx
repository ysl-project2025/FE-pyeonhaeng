import React from 'react';
import { AllProduct } from '../../types/product';
import ImageViewer from '../common/ImageViewer';

interface ProductCardProps {
  product: AllProduct;
  onClick?: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(product.productId);
    }
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      <h3>{product.name}</h3>
      <ImageViewer src={product.productUrl} alt={product.name} />
      <p>{product.price}원</p>
    </div>
  );
};

export default ProductCard;

import React from 'react';
import { AllProduct } from '../../types/product';

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
    <div onClick={handleClick}>
      <h3>{product.name}</h3>
      <p>{product.price.toLocaleString()}원</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductCard;

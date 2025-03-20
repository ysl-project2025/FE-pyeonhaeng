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
      onClick(product.product_id);
    }
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      <h3>{product.product_name}</h3>
      <ImageViewer src={product.product_image_url} alt={product.product_name} />
      <p>{product.product_price}원</p>
    </div>
  );
};

export default ProductCard;

import React from 'react';

interface ProductDetailProps {
  name: string;
  price: number;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ name, price }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{price.toLocaleString()}원</p>
    </div>
  );
};

export default ProductDetail;

import React from 'react';
import { ProductName, ProductPrice } from '../../styles/common.css';

interface ProductDetailProps {
  name: string;
  price: number;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ name, price }) => {
  return (
    <div>
      <ProductName className='detailName'>{name}</ProductName>
      <ProductPrice className='detailPrice'>{price}원</ProductPrice>
    </div>
  );
};

export default ProductDetail;

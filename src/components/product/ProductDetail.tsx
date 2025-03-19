import React from 'react';

interface ProductDetailProps {
  productId: number;
  name: string;
  price: number;
}

const mockProduct: ProductDetailProps = {
  productId: 1,
  name: '테스트 상품',
  price: 19900,
};

const ProductDetail: React.FC<ProductDetailProps> = ({
  productId,
  name,
  price,
}) => {
  productId = mockProduct.productId;
  name = mockProduct.name;
  price = mockProduct.price;
  return (
    <div>
      <p>{productId}</p>
      <p>{name}</p>
      <p>{price}원</p>
    </div>
  );
};

export default ProductDetail;

// types/product.ts
export interface AllProduct {
  productId: number;
  name: string;
  price: number;
  description: string;
}

// API 응답 전체를 표현할 수 있는 타입 (필요시)
export interface ProductApiResponse {
  data: AllProduct[];
}

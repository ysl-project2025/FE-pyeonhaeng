export interface AllProduct {
  productId: number;
  name: string;
  price: number;
  description: string;
}

export interface ProductApiResponse {
  data: AllProduct[];
}

export type Product = {
  product_id: number;
  name: string;
  price: number;
  description: string;
  created_at?: string;
};

export type ProductDetailResponse = {
  data: Product;
};

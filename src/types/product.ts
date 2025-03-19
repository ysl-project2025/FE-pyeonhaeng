export interface AllProduct {
  productId: number;
  productUrl: string;
  name: string;
  price: number;
  isNew: boolean;
}

export interface ProductApiResponse {
  data: AllProduct[];
}

export type Product = {
  productId: number;
  name: string;
  price: number;
  productUrl: string;
  created_at?: string;
};

export type ProductDetailResponse = {
  data: Product;
};

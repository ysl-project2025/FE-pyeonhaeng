export interface AllProduct {
  product_id: number;
  product_image_url: string;
  product_name: string;
  product_price: number;
  is_new: boolean;
}
// export interface AllProduct {
//   productId: number ;
//   productUrl: string;
//   name: string;
//   price: number;
//   isNew: boolean;
// }

export interface ProductApiResponse {
  data: AllProduct[];
}

export type Product = {
  product_id: number;
  product_image_url: string;
  product_name: string;
  product_price: number;
  is_new: boolean;
};

export type ProductDetailResponse = {
  data: Product;
};

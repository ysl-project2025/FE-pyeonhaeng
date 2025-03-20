export default interface Review {
  reviewId: number;
  userId: string;
  productId: number;
  content: string;
  rating: number;
  like: number;
  dislike: number;
  createdAt: string;
  updatedAt: string;
}

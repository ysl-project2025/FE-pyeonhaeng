import { useState, useEffect } from 'react';
import api from '../../utils/api'; // ✅ axios 인스턴스 사용
import Review from '../../types/review';

interface ReviewApiResponse {
  data: {
    review_id: number;
    user_id: string;
    product_id: number;
    review_content: string;
    review_rating: string;
    review_like: string;
    review_dislike: string;
    created_at: string;
    updated_at: string;
  }[];
}

const useReviews = (productId: number) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!productId) return;

    const fetchReviews = async () => {
      setLoading(true);
      try {
        const response = await api.get<ReviewApiResponse>(
          `/review/${productId}`,
        );

        // ✅ API 응답 데이터를 `Review` 타입으로 변환
        const formattedReviews: Review[] = response.data.data.map((review) => ({
          reviewId: review.review_id,
          userId: review.user_id,
          productId: review.product_id,
          content: review.review_content,
          rating: Number(review.review_rating), // 문자열을 숫자로 변환
          like: Number(review.review_like),
          dislike: Number(review.review_dislike),
          createdAt: review.created_at,
          updatedAt: review.updated_at,
        }));
        console.log(formattedReviews);
        setReviews(formattedReviews);
      } catch (err) {
        console.error('리뷰를 가져오는 중 오류 발생:', err);
        setError('리뷰를 불러오는 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [productId]);

  return { reviews, loading, error };
};

export default useReviews;

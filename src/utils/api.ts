import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // 환경 변수에서 API URL 가져오기
  withCredentials: true, // ✅ 모든 요청에서 자동으로 쿠키 포함
});

export default api;

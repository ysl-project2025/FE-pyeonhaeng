import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // 환경 변수에서 API URL 가져오기
  withCredentials: true, // ✅ 모든 요청에서 자동으로 쿠키 포함
});

// ✅ 모든 요청에 `Authorization` 헤더 자동 추가 (쿠키 기반이 아니라면 필요)
api.interceptors.request.use(
  (config) => {
    const token = document.cookie
      .split('; ')
      .find((row) => row.startsWith('token='))
      ?.split('=')[1];

    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // ✅ 헤더에 JWT 추가
    }

    return config;
  },
  (error) => Promise.reject(error),
);

export default api;

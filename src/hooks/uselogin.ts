import { useDispatch } from 'react-redux';
import { loginSuccess, logout } from '../store/slices/login.slice';

const useLogin = () => {
  const dispatch = useDispatch();

  const login = async (id: string, password: string) => {
    try {
      const response = await fetch('/api/login', {
        // 이부분 API에 맞게 수정 필요
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, password }),
        credentials: 'include', // httpOnly Cookie 사용을 위해
      });

      if (response.ok) {
        dispatch(loginSuccess());
      } else {
        console.error('로그인 실패');
      }
    } catch (error) {
      console.error('로그인 오류:', error);
    }
  };

  const checkUserStatus = async () => {
    try {
      const response = await fetch('/api/auth-status', {
        // 이부분 API에 맞게 수정 필요
        method: 'GET',
        credentials: 'include', // ✅ 서버에서 JWT 쿠키 확인 요청을 위해 필요요
      });

      if (response.ok) {
        dispatch(loginSuccess());
      } else {
        dispatch(logout());
      }
    } catch {
      dispatch(logout());
    }
  };

  return { login, checkUserStatus };
};

export default useLogin;

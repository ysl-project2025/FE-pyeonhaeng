import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../store/slices/login.slice';

const useLogin = () => {
  const dispatch = useDispatch();

  const login = async (user_id: string, user_password: string) => {
    try {
      const response = await fetch('/member/login', {
        // base URL은 .env 파일에 설정해두고, 이부분 API에 맞게 수정 필요
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id, user_password }),
        credentials: 'include', // httpOnly Cookie 사용을 위해
      });

      if (response.ok) {
        dispatch(loginSuccess());
        console.log('로그인 성공');
      } else {
        console.error('로그인 실패');
      }
    } catch (error) {
      console.error('로그인 오류:', error);
    }
  };

  const join = async (
    user_id: string,
    user_password: string,
    user_name: string,
  ) => {
    try {
      const response = await fetch('/member/join', {
        // 이부분 API에 맞게 수정 필요
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id, user_password, user_name }),
        credentials: 'include', // ✅ 서버에서 JWT 쿠키 확인 요청을 위해 필요요
      });

      if (response.ok) {
        console.log(response);
      } else {
        console.error(response);
      }
    } catch (error) {
      console.error('회원가입 오류:', error);
    }
  };

  return { login, join };
};

export default useLogin;

import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../store/slices/login.slice';

const useLogin = () => {
  const dispatch = useDispatch();

  const login = async (userId: string, userPassword: string) => {
    try {
      const response = await fetch('/member/login', {
        // base URL은 .env 파일에 설정해두고, 이부분 API에 맞게 수정 필요
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: userId, user_password: userPassword }),
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
  return { login };
};

export default useLogin;

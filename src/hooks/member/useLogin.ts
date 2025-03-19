import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../store/slices/login.slice';
import api from '../../utils/api'; // ✅ 전역 axios 인스턴스 사용

const useLogin = () => {
  const dispatch = useDispatch();

  const login = async (userId: string, userPassword: string) => {
    try {
      const response = await api.post('/member/login', {
        user_id: userId,
        user_password: userPassword,
      });

      if (response.status === 200) {
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

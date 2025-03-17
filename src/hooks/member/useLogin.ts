import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../store/slices/login.slice';
import axios from 'axios';

const url = import.meta.env.VITE_API_BASE_URL;

const useLogin = () => {
  const dispatch = useDispatch();

  const login = async (userId: string, userPassword: string) => {
    try {
      const response = await axios.post(
        `${url}/member/login`,
        {
          user_id: userId,
          user_password: userPassword,
        },
        {
          withCredentials: true, // ✅ httpOnly Cookie 사용을 위해 필요
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

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

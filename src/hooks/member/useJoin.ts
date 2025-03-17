import axios from 'axios';

const url = import.meta.env.VITE_BASE_URL;

const useJoin = () => {
  const join = async (
    userId: string,
    userPassword: string,
    userName: string,
  ) => {
    try {
      const response = await axios.post(
        `${url}/member/join`,
        {
          user_id: userId,
          user_password: userPassword,
          user_name: userName,
        },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      console.log('회원가입 성공:', response);
    } catch (error) {
      console.error('회원가입 오류:', error);
    }
  };

  return { join };
};

export default useJoin;

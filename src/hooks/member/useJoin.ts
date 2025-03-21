import api from '../../utils/api'; // ✅ 전역 axios 인스턴스 사용

const useJoin = () => {
  const join = async (
    userId: string,
    userPassword: string,
    userName: string,
  ) => {
    try {
      const response = await api.post(
        '/member/register', // ✅ baseURL이 설정되어 있으므로 전체 URL 필요 없음
        {
          user_id: userId,
          user_password: userPassword,
          user_name: userName,
        },
      );

      console.log(response.data.data);
    } catch (error) {
      console.error('회원가입 오류:', error);
    }
  };

  return { join };
};

export default useJoin;

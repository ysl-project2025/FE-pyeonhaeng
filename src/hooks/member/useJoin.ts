const useJoin = () => {
  const join = async (
    userId: string,
    userPassword: string,
    userName: string,
  ) => {
    try {
      const response = await fetch('/member/join', {
        // 이부분 API에 맞게 수정 필요
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: userId,
          user_password: userPassword,
          user_name: userName,
        }),
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
  return { join };
};
export default useJoin;

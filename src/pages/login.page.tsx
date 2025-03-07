import React, { useEffect } from 'react';
import LoginForm from '../components/login.component';
import uselogin from '../hooks/uselogin';

const Login = () => {
  const { login, checkUserStatus } = uselogin();

  useEffect(() => {
    checkUserStatus(); // 페이지 로드 시 로그인 상태 확인
  }, []);

  return (
    <div>
      <header>banner</header>
      <main>
        <h1>로그인</h1>
        <LoginForm onLogin={login} />
      </main>
      <footer>banner</footer>
    </div>
  );
};

export default Login;

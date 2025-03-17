import LoginForm from '../../components/member/Login';
import uselogin from '../../hooks/member/useLogin';

const Login = () => {
  const { login } = uselogin();

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

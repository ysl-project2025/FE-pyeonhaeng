import LoginForm from '../../components/member/Login';
import uselogin from '../../hooks/member/useLogin';
import { SectionTitle } from '../../styles/common.css';

const Login = () => {
  const { login } = uselogin();

  return (
    <div>
      <main>
        <SectionTitle>로그인</SectionTitle>
        <LoginForm onLogin={login} />
      </main>
    </div>
  );
};

export default Login;

import LoginForm from '../../components/member/Login';
import uselogin from '../../hooks/member/useLogin';
import { Section, SectionTitle } from '../../styles/common.css';

const Login = () => {
  const { login } = uselogin();

  return (
    <Section>
      <SectionTitle>로그인</SectionTitle>
      <LoginForm onLogin={login} />
    </Section>
  );
};

export default Login;

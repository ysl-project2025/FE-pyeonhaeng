import JoinForm from '../../components/member/Join';
import useJoin from '../../hooks/member/useJoin';
import { Section, SectionTitle } from '../../styles/common.css';

const Login = () => {
  const { join } = useJoin();

  return (
    <Section>
      <SectionTitle>회원가입</SectionTitle>
      <JoinForm onJoin={join} />
    </Section>
  );
};

export default Login;

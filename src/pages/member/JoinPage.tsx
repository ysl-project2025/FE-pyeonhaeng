import JoinForm from '../../components/member/Join';
import useJoin from '../../hooks/member/useJoin';
import { SectionTitle } from '../../styles/common.css';

const Login = () => {
  const { join } = useJoin();

  return (
    <div>
      <main>
        <SectionTitle>회원가입</SectionTitle>
        <JoinForm onJoin={join} />
      </main>
    </div>
  );
};

export default Login;

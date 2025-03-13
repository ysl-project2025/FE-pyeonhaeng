import JoinForm from '../../components/member/member.join';
import useJoin from '../../hooks/member/useJoin';

const Login = () => {
  const { join } = useJoin();

  return (
    <div>
      <header>banner</header>
      <main>
        <h1>회원가입</h1>
        <JoinForm onJoin={join} />
      </main>
      <footer>banner</footer>
    </div>
  );
};

export default Login;

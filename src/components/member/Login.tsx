import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../constants/constants';
import styled from '@emotion/styled';

interface LoginFormProps {
  onLogin: (id: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(id, password);
  };
  const handleSignup = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate(PATHS.join);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="아이디"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">로그인</button>
      <JoinBtn type="button" onClick={handleSignup}>
        회원가입
      </JoinBtn>
    </form>
  );
};

export default LoginForm;

const JoinBtn = styled.button`
  width: 100%;
  border: 1px solid #000;
  font-weight: 500;
  margin-top: 0.5rem;
`;
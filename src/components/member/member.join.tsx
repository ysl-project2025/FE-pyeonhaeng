import { useState } from 'react';

interface JoinFormProps {
  onJoin: (id: string, password: string, name: string) => void;
}

const LoginForm: React.FC<JoinFormProps> = ({ onJoin }) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onJoin(id, password, name);
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
      <input
        type="text"
        placeholder="닉네임"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">확인</button>
    </form>
  );
};

export default LoginForm;

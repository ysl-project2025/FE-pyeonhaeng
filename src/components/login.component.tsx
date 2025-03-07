import React, { useState } from 'react';

interface LoginFormProps {
  onLogin: (id: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(id, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="id"
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
    </form>
  );
};

export default LoginForm;

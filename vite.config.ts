import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({
    jsxImportSource: '@emotion/react', // 👈 Emotion을 JSX 기본 변환기로 설정
      babel: {
        plugins: ['@emotion/babel-plugin'], // 👈 Emotion 관련 Babel 플러그인 추가
      },
  })],
  base: './',
});

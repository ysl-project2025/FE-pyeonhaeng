# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```


📂 src
├── 📂 assets
├── 📂 components              # UI 컴포넌트
│   ├── 📂 common              # 공통 UI 컴포넌트
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── CommonLayout.tsx
│   │   ├── Layout.css.ts
│   ├── 📂 member              # 회원 관련 컴포넌트
│   │   ├── MemberJoin.tsx
│   │   ├── MemberLogin.tsx
│   │   ├── Member.css.ts
│   ├── 📂 product             # 상품 관련 컴포넌트
│   │   ├── ProductList.tsx
│   │   ├── ProductDetail.tsx
│   │   ├── Product.css.ts
│   ├── 📂 recipe              # 레시피 관련 컴포넌트
│   │   ├── RecipeList.tsx
│   │   ├── RecipeDetail.tsx
│   │   ├── Recipe.css.ts
│   ├── index.tsx
├── 📂 constants
│   ├── constants.ts
├── 📂 hooks                   # 커스텀 훅 모음
│   ├── 📂 product
│   │   ├── useProduct.ts      # 상품 관련 로직
│   ├── 📂 recipe
│   │   ├── useRecipe.ts       # 레시피 관련 로직
├── 📂 pages                   # 페이지 컴포넌트
│   ├── 📂 product             # 상품 페이지
│   │   ├── ProductListPage.tsx
│   │   ├── ProductDetailPage.tsx
│   ├── 📂 recipe              # 레시피 페이지
│   │   ├── RecipeListPage.tsx
│   │   ├── RecipeDetailPage.tsx
│   ├── EventPage.tsx
│   ├── IndexPage.tsx
├── 📂 store                   # Redux 상태 관리
│   ├── 📂 features
│   │   ├── authSlice.ts
│   ├── store.ts
├── 📂 styles                  # 스타일 관련 파일
│   ├── globalStyles.css.ts
│   ├── theme.css.ts
│   ├── reset.css.ts
│   ├── common.css.ts
├── 📂 types
│   ├── types.ts
├── App.tsx
├── main.tsx
├── vite-env.d.ts

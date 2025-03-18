import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/member/LoginPage';
import JoinPage from './pages/member/JoinPage';
import MainPage from './pages/IndexPage';
import ProductDetailPage from './pages/ProductDetailPage';
import { Provider } from 'react-redux';
import store from './store';
import { Global } from '@emotion/react';
import { globalStyles } from './styles/common.css';
import { PATHS } from './constants/constants';

const App = () => {
  return (
    <Provider store={store}>
      <Global styles={globalStyles} />
      <Router>
        <Routes>
          <Route path={PATHS.main} element={<MainPage />} />
          <Route path={PATHS.detail} element={<ProductDetailPage />} />
          <Route path={PATHS.login} element={<LoginPage />} />
          <Route path={PATHS.join} element={<JoinPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;

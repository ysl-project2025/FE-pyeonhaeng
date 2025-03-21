import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/member/LoginPage';
import JoinPage from './pages/member/JoinPage';
import MainPage from './pages/index';
import ProductDetailPage from './pages/ProductDetailPage';
import { Provider } from 'react-redux';
import store from './store';
import { Global } from '@emotion/react';
import { globalStyles } from './styles/common.css';
import { PATHS } from './constants/constants';
import Layout from './components/common/Layout';
import AllProduct from './pages/AllProduct';
import EventProduct from './pages/EventProduct';
import RankProduct from './pages/RankProduct';
import SearchPage from './pages/SearchPage';

const App = () => {
  return (
    <Provider store={store}>
      <Global styles={globalStyles} />
      <Router>
        <Routes>
        <Route element={<Layout />}>
          <Route path={PATHS.main} element={<MainPage />} />
          <Route path={PATHS.search} element={<SearchPage />} />
          <Route path={PATHS.product_detail} element={<ProductDetailPage />} />
          <Route path={PATHS.product_list_all} element={<AllProduct />} />
          <Route path={PATHS.product_list_event} element={<EventProduct />} />
          <Route path={PATHS.product_list_rank} element={<RankProduct />} />
          <Route path={PATHS.login} element={<LoginPage />} />
          <Route path={PATHS.join} element={<JoinPage />} />
        </Route>
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;

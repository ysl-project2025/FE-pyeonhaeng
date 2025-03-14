import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/member/LoginPage';
import JoinPage from './pages/member/JoinPage';
import MainPage from './pages/IndexPage';
import { Provider } from 'react-redux';
import store from './store';
import { PATHS } from './constants/constants';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path={PATHS.main} element={<MainPage />} />
          <Route path={PATHS.login} element={<LoginPage />} />
          <Route path={PATHS.join} element={<JoinPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;

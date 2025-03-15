import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/member/member.login';
import JoinPage from './pages/member/member.join';
import MainPage from './pages/index';
import { Provider } from 'react-redux';
import store from './store';
import { Global } from "@emotion/react";
import { globalStyles } from './styles/common.css';

const App = () => {
  return (
    <Provider store={store}>
      <Global styles={globalStyles} />
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/join" element={<JoinPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;

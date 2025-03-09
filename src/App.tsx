import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Login from './pages/login.page.tsx';
import './styles/reset.css';
import './styles/common.css';

const App = () => {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
};

export default App;

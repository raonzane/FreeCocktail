import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './_store/store';

ReactDOM.render(
  <Provider store={store}>
<<<<<<< HEAD
    <BrowserRouter>
      <App />
    </BrowserRouter>
=======
    <App />
>>>>>>> 185c8b3... add : 초기 환경 세팅
  </Provider>,
  document.getElementById('root')
);

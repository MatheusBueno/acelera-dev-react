import './config/reactotron';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'reset-css';
import './index.css';

import store from './config/store';
import Router from './config/routes';

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import {Provider} from "react-redux"
import score from './Components/Store.js';

ReactDOM.render(
  <Provider store={score}>
    <App />
  </Provider>,
  document.getElementById('root')
);

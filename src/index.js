import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { store } from './Components/Store/store';

ReactDOM.render(
  <BrowserRouter>
    <Route>
      <Provider store = {store}>
        <App />
      </Provider>
    </Route>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
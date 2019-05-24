import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import App from './components/app';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  // <Provider store={createStoreWithMiddleware(reducers)}>
  <Provider store={createStore(reducers, /* preloadedState, */ composeEnhancers(
        applyMiddleware()
      ))}>
    <App />
  </Provider>
  , document.querySelector('.container'));

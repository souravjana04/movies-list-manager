import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './App';
import configureStore from './store/configureStore'

const store = configureStore()

store.subscribe(() => {
  console.log('store updated', store.getState())
})

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>
  ,document.getElementById('root')
);


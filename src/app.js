import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import { InventoryList } from './containers';

const store = createStore(reducer);

render(
  <Provider store={store}>
    <InventoryList />
  </Provider>,
  document.getElementById('app')
);
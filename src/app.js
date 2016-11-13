import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { combineForms } from 'react-redux-form';

import reducer from './reducer';
import { InventoryList, MainForm } from './containers';


const initialUser = { 
  name: '',
  brand: ''
};

// const formStore = createStore(combineForms({
//   user: initialUser,
// }));

//const store = createStore(reducer)

const store = createStore(combineReducers({
  list: reducer,
  form: combineForms({
    user: initialUser
  }, 'form'),
}));

render(
  <Provider store={store}>
    <MainForm />
  </Provider>,
  document.getElementById('form')
);

render(
  <Provider store={store}>
    <InventoryList />
  </Provider>,
  document.getElementById('list')
);
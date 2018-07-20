import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter.js';
import configureStore from './store/configureStore.js';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import { addExpense } from './actions/expenses.js';
import { setTextFilter } from './actions/filters.js';
import getVisibleExpenses from './selectors/expenses.js';


const store = configureStore();

//const state = store.getState();
const jsx =(
    <Provider store={store}>
      <AppRouter />    
    </Provider>
);
console.log(store.getState());

const appRoot = document.getElementById('app');

ReactDOM.render(jsx, appRoot); 



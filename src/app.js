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

 store.dispatch(addExpense({description:'water bill',note:'1st bill',amount:'250', createdAt:'1500'}));
store.dispatch(addExpense({description:'Gas bill',note:'last bill',amount:'450',createdAt:'1005'}));
store.dispatch(addExpense({description:'Gas bill',note:'last bill',amount:'400',createdAt:'105'}));




const state = store.getState();
 const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses); 


const jsx =(
    <Provider store={store}>
      <AppRouter />    
    </Provider>
);

const appRoot = document.getElementById('app');

ReactDOM.render(jsx, appRoot); 



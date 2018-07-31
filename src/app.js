import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, { history } from './routers/AppRouter.js';
import configureStore from './store/configureStore.js';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import { startSetExpense } from './actions/expenses.js';
import { login, logout } from './actions/auth.js';
import getVisibleExpenses from './selectors/expenses.js';
import { firebase } from './firebase/firebase';


const store = configureStore();

//const state = store.getState();
const jsx =(
    <Provider store={store}>
      <AppRouter />    
    </Provider>
);
console.log(store.getState());

const appRoot = document.getElementById('app');

let hasRendered = false;
const renderApp = () => {
  if(!hasRendered){
    ReactDOM.render(jsx, appRoot);
  }
};

ReactDOM.render(<p>Loading...</p>, appRoot); 

firebase.auth().onAuthStateChanged((user) => {
  if(user){
    store.dispatch(login(user.uid));
    console.log(user.uid);
    store.dispatch(startSetExpense()).then(() => {
      renderApp();
      if(history.location.pathname === '/'){
        history.push('/dashboard');
      } 
    });
  }else{
    console.log('log out');
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});


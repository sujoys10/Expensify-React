import { createStore, combineReducers } from 'redux';
import expenseReducer from '../reducers/expenses.js';
import filtersReducer from '../reducers/filters.js';

// Store creation
export default () =>{
    const store = createStore(
        combineReducers({
           expenses : expenseReducer,
           filters: filtersReducer
    }));
    return store; 
}

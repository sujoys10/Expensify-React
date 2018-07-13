import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//Action Generator

const addExpense = ( { 
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
} = {} ) =>({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ({id} = {}) =>({
    type: 'REMOVE_EXPENSE',
    id
});


const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const setFilter = ({text} = {}) =>({
    type: 'SET_TEXT_FILTER',
    text
});

const sortByAmount = () =>({
    type: 'SORT_BY_AMOUNT'
});

const sortByDate = () =>({
    type: 'SORT_BY_DATE'
});

const startDate = (date) =>({
    type: 'START_DATE',
    date 
});

const endDate = (date) =>({
    type: 'END_DATE',
    date
});

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) =>{
        const startDateMatch = typeof startDate !== 'number' || expenses.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expenses.createdAt <= endDate;;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) =>{
        if(sortBy === 'date'){
            return a.createdAt-b.createdAt;
        }else if(sortBy === 'amount'){
            return a.amount-b.amount;
        }
    });
};

const textfilter = (description, text) =>{
    const lSentence = description.toLowerCase();
    const words = lSentence.split(" ");
    return words.includes(text);
}
//Expense reducer

const expenseReducerDefaultState = [];
const filterReducerDefaultState = {
    text : "",
    sortBy : 'date',
    startDate : undefined,
    endDate : undefined
};

const expenseReducer = (state = expenseReducerDefaultState, action) =>{
  switch (action.type){
      case 'ADD_EXPENSE':
        return [
           ...state,
           action.expense
        ]
      case 'REMOVE_EXPENSE':
        return state.filter((x) => x.id !== action.id );
      case 'EDIT_EXPENSE':
        return state.map((expense) => {
            if(expense.id === action.id){
                return{
                    ...expense,
                    ...action.updates
                };
            }else{
                return state;
            }
        });
              
      default: 
          return state; 
  }
};

//Filter reducer

const filtersReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type){
        case 'SET_TEXT_FILTER':
           return{
               ...state,
               text:action.text
           }
        case 'SORT_BY_AMOUNT':
           return{
               ...state,
               sortBy:'amount'
           }
        case 'SORT_BY_DATE':
           return{
               ...state,
               sortBy:'date'
           }
        case 'START_DATE':
            return{
                ...state,
                startDate: action.date
            }
        case 'END_DATE':
            return{
                ...state,
                endDate: action.date
            }          
        default:
           return state;
    }
};

// Store creation

const store = createStore(
    combineReducers({
       expenses : expenseReducer,
       filters: filtersReducer
}));



const unsubscribe = store.subscribe( ()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description:'beer pilo', note:'for kids', amount:140, createdAt: 1000}));
const expenseTwo = store.dispatch(addExpense({description:'rum', note:'for pros', amount:1040, createdAt:500}));

/* console.log(expenseOne);
store.dispatch(removeExpense({id:expenseOne.expense.id}));
store.dispatch(editExpense(expenseTwo.expense.id,{amount: 500}));

store.dispatch(setFilter({text:'course'})); 
store.dispatch(sortByAmount());
store.dispatch(sortByDate());  */
/* store.dispatch(startDate(150));
store.dispatch(startDate());
store.dispatch(endDate(400)); */
store.dispatch(setFilter({text:''})); 


const demoState = {
    expenses : [{
        id: 'ygfynb',
        description: 'React course',
        note: 'final chance to make a mark',
        amount: 650,
        createdAt: 0
    }],
    filters : {
        text: 'react',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};
import React from 'react';
import ExpenseForm from './ExpenseForm.js';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';

 const AddExpensePage = (props) => (
    <div>
      <h2>Add your expense</h2>
      <ExpenseForm onSubmit={(expense) => {
        props.dispatch(addExpense(expense));
        props.history.push('/');
      }}/>
    </div>
 ); 

 export default connect()(AddExpensePage);
 
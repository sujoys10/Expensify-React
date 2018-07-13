import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses';


const EditExpensePage = (props) => {
  console.log(props);
  return(
    <div>
      edit
      <ExpenseForm 
       expense={props.expense}
       onSubmit={(update) =>{
        props.dispatch(editExpense(id,update));
        props.history.goBack();
      }} />
    </div>
);
};

const mapToStateProps = (state, props) => {
  return{
    expenses: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};
 
export default connect(mapToStateProps)(EditExpensePage);
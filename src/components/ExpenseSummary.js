import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import getTotalAmount from '../selectors/expenses-total';

const ExpenseSummary = (props) =>{
    const expenseWord = props.expenses.length === 1 ? 'expense' : 'expenses';
    return(
        <div>
           You have {props.expenses.length} {expenseWord} totalling {getTotalAmount(props.expenses)}
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        expenses: selectExpenses(state.expenses, state.filters)
    }
}
export default connect(mapStateToProps)(ExpenseSummary);
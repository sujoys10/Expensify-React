import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';
import ExpenseSummary from './ExpenseSummary';

const ExpenseDashboardPage = () => (
    <div>
      The dashboard page
      <ExpenseListFilter />
      <ExpenseSummary />
      <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;

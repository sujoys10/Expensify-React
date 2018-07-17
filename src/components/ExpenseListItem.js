import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import moment from 'moment';


const ExpenseListItem = ({dispatch, id, description, note, amount, createdAt}) => (
    <div>
     <Link to={`/edit/${id}`}>
        <h1>{description}</h1>
     </Link>
      <p>
        {note} - {amount} -{moment(createdAt).format('DD MMM YYYY')}
      </p>
      
    </div>
);


export default connect()(ExpenseListItem);

//export default ExpenseListItem;
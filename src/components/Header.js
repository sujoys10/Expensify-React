import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogOut } from '../actions/auth';

const Header = (props) => (
    <div>
      <h1>Expensify</h1>
      <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
      <NavLink to="/create" activeClassName="is-active">Add Expense</NavLink>
      <NavLink to="/help" activeClassName="is-active">Help</NavLink>
      <button onClick={() => {props.dispatch(startLogOut())}}>Log Out</button>    
    </div>
);
  
export default connect()(Header);
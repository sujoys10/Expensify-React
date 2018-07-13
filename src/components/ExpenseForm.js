import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';

const now = moment();
console.log(now.format('MMM Do'));

export default class ExpenseForm extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        description : props.expense ? props.expense.description : '',
        note : props.expense? props.expense.note : '',
        amount : props.expense? props.expense.amount.toString() : '',
        createdAt : props.expense? moment(props.expense.createdAt) : moment(),
        calendarFocused : false
      }
    }
    onDescriptionChange = (e) => {
      const description = e.target.value;
      this.setState(() => ({ description }));
    };

    onNoteChange = (e) => {
      //const note = e.target.value;
      e.persist();
      this.setState(() => ({ note:e.target.value }));
    }

    onAmountChange = (e) => {
       const amount = e.target.value;
        if(amount.match(/^\d*(\.\d{0,2})?$/)){
          this.setState(() => ({ amount }));
        }
    }
    onDateChange = (createdAt) => {
       this.setState(() => ( {createdAt} ));  
    }
    onFocusChange = ({focused}) => {
      this.setState(() => ( {calendarFocused:focused} ));
    }
    onSubmit = (e) => {
      e.preventDefault();
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10),
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
      
    
    }
   render(){
       return(
           <div>
              <form onSubmit={this.onSubmit}>
                <input 
                 type="text"
                 placeholder="expense"
                 value={this.state.description}
                 onChange={this.onDescriptionChange}
                 autoFocus
                />
                <input 
                  type="text"
                  placeholder="amount"
                  value = {this.state.amount} 
                 onChange = {this.onAmountChange}
                />
                <SingleDatePicker 
                  date={this.state.createdAt}
                  onDateChange={this.onDateChange}
                  focused={this.state.calendarFocused}
                  onFocusChange={this.onFocusChange}
                  numberOfMonths={1}
                  isOutsideRange={() => { false }}
                />
                <textarea
                 placeholder="note"
                 value = {this.state.note} 
                 onChange = {this.onNoteChange}>
                  
                </textarea>
                <button>Add expense</button>
              </form>           
           </div>
        );
   }
}


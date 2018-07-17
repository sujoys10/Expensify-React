import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount , setStartDate, setEndDate } from '../actions/filters.js';
import { DateRangePicker } from 'react-dates';

class ExpenseListFilter extends React.Component {
    state = {
        calenderFocused : null
    };
    onDatesChange = ({startDate, endDate}) =>{
         this.props.dispatch(setStartDate(startDate));
         this.props.dispatch(setEndDate(endDate));
    }
    onFocusChange = (calenderFocused) =>{
          this.setState(() => ({ calenderFocused }));
    }
    render(){
        return(
            <div>
                <input type="text" value={this.props.filters.text} onChange={(e)=>{
                    this.props.dispatch(setTextFilter({text:e.target.value}));
                }}/>
                
                <select value={this.props.filters.sortBy} onChange={(e)=>{
                    if(e.target.value === 'date'){
                        this.props.dispatch(sortByDate());
                    }else{
                        this.props.dispatch(sortByAmount());
                    }  
                }
                }>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                  startDate={this.props.filters.startDate}
                  startDateId="start"
                  endDate={this.props.filters.endDate}
                  endDateId="end"
                  onDatesChange={this.onDatesChange}
                  focusedInput={this.state.calenderFocused}
                  onFocusChange={this.onFocusChange}
                  showClearDates={true}
                  numberOfMonths={1}
                  isOutsideRange={() => { false }}
                />
            </div>
        )
    }
}

const mapToStateProps = (state) =>{
    return{
        filters: state.filters
    }
}

export default connect(mapToStateProps)(ExpenseListFilter);
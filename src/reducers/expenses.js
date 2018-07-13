
const expenseReducerDefaultState = [];

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

  export default expenseReducer;
  
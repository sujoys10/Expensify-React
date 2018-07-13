import { createStore } from 'redux';

//Action generator - Function that return actioned objects

/* const incrementCount = ( payload = {} ) =>({
    type: 'INCREMENT',
    incrementBy: typeof payload.increment_by === 'number'? payload.increment_by : 1
});
 */
const incrementCount = ( {incrementBy = 1} = {} ) =>({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ( {decrementBy = 1} = {} ) =>({
    type: 'DECREMENT',
    decrementBy
});


const reset = () => ({
    type: 'RESET',
    count: 0
});

const set = ( { count } = {} ) => ({
   type: 'SET',
   count
});

const store = createStore( (state = { count:0 }, action) => {
    switch(action.type){
        case 'INCREMENT':
           return {
               count: state.count + action.incrementBy
           }
        case 'DECREMENT':
           return {
               count: state.count - action.decrementBy
           }
        case "SET":
           return {
               count : action.count
           }   
        case 'RESET':
           return {
               count: state.count = 0
           }   
        default:
           return state;      
    }
});


const unsubscribe = store.subscribe(() =>{
  console.log(store.getState());
});

store.dispatch(incrementCount());

store.dispatch(incrementCount({increment_by: 5}));

//unsubscribe();  return resulted in stopping the function

store.dispatch(reset());

store.dispatch(decrementCount({decrementBy:10}));

store.dispatch(set({count: 15}));

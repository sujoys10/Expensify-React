export const setTextFilter = ({text} = {}) =>({
    type: 'SET_TEXT_FILTER',
    text
});

export const sortByAmount = () =>({
    type: 'SORT_BY_AMOUNT'
});

export const sortByDate = () =>({
    type: 'SORT_BY_DATE'
});

export const setStartDate = (date) =>({
    type: 'START_DATE',
    date 
});

export const setEndDate = (date) =>({
    type: 'END_DATE',
    date
});

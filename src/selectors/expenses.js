const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) =>{
        const startDateMatch = typeof startDate !== 'number' || expenses.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expenses.createdAt <= endDate;;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) =>{
        if(sortBy === 'date'){
            return a.createdAt-b.createdAt;
        }else if(sortBy === 'amount'){
            return a.amount-b.amount;
        }
    });
};

export default getVisibleExpenses;
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { expenses, budget } = useContext(AppContext);
    
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const totalExpenses = expenses.reduce((total, item) => {
            return (total = total + item.cost);
        }, 0);
        if(newBudget > 20000)
        alert("too high");
        else if(newBudget < totalExpenses)
        alert("lower than spent");
        else
        {
        setNewBudget(event.target.value);}
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: $</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
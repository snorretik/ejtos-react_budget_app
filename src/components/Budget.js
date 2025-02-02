import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, expenses, currency, dispatch } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const checkingValue = (theValue) => {
        if (theValue < totalExpenses) {
            alert("value can't drop below total expenses")
        } else if (theValue > 20000) {
            alert("value can't exceed 20000")
        } else {
            const newBudget = {
                budget: theValue,
            }

            dispatch({
                type: 'SET_BUDGET',
                payload: newBudget,
            });
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}<input
                            defaultValue={budget}  
                            type='number'
                            step='10'
                            style={{width: "120px"}}
                            onChange={(event) => checkingValue(event.target.value)}
                            ></input></span>
        </div>
    );
};
export default Budget;
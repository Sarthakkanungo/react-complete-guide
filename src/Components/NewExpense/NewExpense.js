
import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense =(props) =>
{



    const [IsEditing , setISEditing] = useState(false);
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString(),

        };
        //console.log(expenseData);
        props.onAddExpense(expenseData);
        setISEditing(false);
    }

    const startEditingHandler = () => {
        setISEditing(true);
    }

    const stopEditingHandler = () => {
        setISEditing(false);
    }

    return (
        <div className="new-expense">
           {!IsEditing && <button onClick={startEditingHandler}>Add new Expense</button>}
           {IsEditing && <ExpenseForm  onSaveExpenseData={onSaveExpenseDataHandler} onCancel = {stopEditingHandler}/>}
        </div>
    )

}

export default NewExpense;
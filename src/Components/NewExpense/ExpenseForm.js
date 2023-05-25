import React, {useState} from "react";
//import ExpenseDetails from "../Expense/ExpenseDetails";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredAmount, setEnteredAmount]= useState('');
  const [ enteredtitle ,setEnteredTitle] = useState('');
  const [ entereddate ,setEnteredDate] = useState('');
  const [ enteredlocation ,setEnteredLocation] = useState('');
  
  

  const amountChangeHandler =(event) => {
    setEnteredAmount('event.target.value');
    
  }
  const titleChangeHandler =(event) => {
    setEnteredTitle('event.target.value');
    
  }
  const dateChangeHandler =(event) => {
    setEnteredDate('event.target.value');
    
  }
  const locationChangeHandler =(event) => {
    setEnteredLocation('event.target.value');
    
  }
  
  
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text"   onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="1"  onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-10-10"  max="2024-10-10" onChange={dateChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>location</label>
          <input type="text"   onChange={locationChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit"> Add Expense </button>
      </div>
    </form>
  );
};
export default ExpenseForm;

import React, { useState } from "react";
//import ExpenseDetails from "../Expense/ExpenseDetails";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredtitle, setEnteredTitle] = useState("");
  const [entereddate, setEnteredDate] = useState("");

  // const [enteredlocation, setEnteredLocation] = useState("");

  // const [userInput , setUserInput] = useState({
  //   enteredAmount : '',
  //   enteredtitle : '',
  //   entereddate : '',
  //   enteredlocation : '',

  // });

  const amountChangeHandler = (event) => {
    setEnteredAmount(parseInt(event.target.value));
    //  setUserInput ({
    //   ...userInput,
    //   enteredAmount : event.target.value ,
    //  });
    // setUserInput((prevState) => {
    //   return {...prevState , enteredAmount : event.target.value }
    //   });
  };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    //  setUserInput((prevState) => {
    //   return {...prevState , enteredtitle : event.target.value , }
    //   });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    //  setUserInput((prevState) => {
    //   return {...prevState ,  entereddate : event.target.value , }
    //   });
  };

  // const locationChangeHandler = (event) => {
  //   setEnteredLocation(event.target.value);
  //   // setUserInput((prevState) => {
  //   //   return {...prevState ,  enteredlocation : event.target.value , }
  //   //   });
  // };

  const submitHandler = (event) => {
    event.preventDefault();
    const expensedata = {
      // amount : userInput.enteredAmount,
      // title : userInput.enteredtitle,
      // location :userInput.enteredlocation,
      // date : userInput.entereddate

      id: Math.random().toString(),
      title: enteredtitle,
      
      amount: enteredAmount,
      date: new Date(entereddate),
    };

    //console.log(expensedata);

    props.onSaveExpenseData(expensedata);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredtitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="1"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-10-10"
            max="2024-10-10"
            value={entereddate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit"> Add Expense </button>
      </div>
    </form>
  );
};
export default ExpenseForm;

import React, {useState} from "react";

// import ExpenseItem from "./Components/ExpenseItem";

import NewExpense from "./Components/NewExpense/NewExpense";

import Expenses from "./Components/Expense/Expenses";

const expense = [
  {
    id : "e1",
    title: "Food",
   // location: "Indore",
    amount: 500,
    date : new Date(2023,5,10),
  },

  {
    id : "e2",
    title: "Travel",
   // location: "Mumbai",
    amount: 650,
    date : new Date(2019,8,2),
  },
  {
    id : "e3",
    title: "Movie",
   // location: "Bhopal",
    amount: 800,
    date : new Date(2022,8,27),
  },
  {
    id : "e4",
    title: "Shopping",
    //location: "Bangluru",
    amount: 5600,
    date : new Date(2022,9,17),
  },
  {
    id : "e5",
    title: "Party Venue",
   // location: "Delhi",
    amount: 8800,
    date : new Date(2023,6,27),
  },
];

const App = () => {
 

  const [expenseList, setExpenseList] = useState(expense);

  const addExpenseHandler = (newexpense) => {
        setExpenseList((prevExpense) => {
       return [newexpense, ...prevExpense]
     });
    
  }
  return (
    <div>
        <NewExpense  onAddExpense={addExpenseHandler}/>
        <Expenses item ={expenseList}/>
   </div>
       
     
  );
}

export default App;

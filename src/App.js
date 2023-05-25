import React from "react";

// import ExpenseItem from "./Components/ExpenseItem";

import NewExpense from "./Components/NewExpense/NewExpense";

import Expenses from "./Components/Expense/Expenses";



function App() {
  const expense = [
    {
      id : "e1",
      title: "Food",
      location: "Indore",
      amount: 500,
      date : new Date(2023,5,10),
    },

    {
      id : "e2",
      title: "Travel",
      location: "Mumbai",
      amount: 650,
      date : new Date(2023,8,2),
    },
    {
      id : "e3",
      title: "Movie",
     location: "Bhopal",
      amount: 800,
      date : new Date(2022,8,27),
    },
    {
      id : "e4",
      title: "Shopping",
      location: "Bangluru",
      amount: 5600,
      date : new Date(2024,9,17),
    },
    {
      id : "e5",
      title: "Party Venue",
      location: "Delhi",
      amount: 8800,
      date : new Date(2023,6,27),
    },
  ];



  // const expenseItems = []; // Create an empty array to hold the ExpenseItem components

  // expense.forEach((expense) => {
  //   expenseItems.push(
  //     <ExpenseItem
  //       title={expense.title}
  //       location={expense.LocationOfExpenditure}
  //       amount={expense.Amount}
  //       date={expense.date}
  //     ></ExpenseItem>
  //   );
  // });
  return (
    <div>
     

        <NewExpense />
        <Expenses item = {expense}/>

    
       
      {/* <ExpenseItem
        title={expense[1].title}
        location={expense[1].LocationOfExpenditure}
        amount={expense[1].Amount}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[2].title}
        location={expense[2].LocationOfExpenditure}
        amount={expense[2].Amount}
      ></ExpenseItem> */}
    </div>
  );
}

export default App;

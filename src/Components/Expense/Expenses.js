import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  console.log(props.item, "IN Expenses");

  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  };

// Filter the expense items based on the selected year
  const filteredExpenses = props.item.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );


  //  let expensesContent = <p> "Only single Expense here. Please add more..."</p> ;
  //   if(filteredExpenses.length > 0)
  //   {
  //     expensesContent = filteredExpenses.map((expenses) => (
  //       <ExpenseItem
  //         key={expenses.id}
  //         title={expenses.title}
  //         amount={expenses.amount}
  //         date={expenses.date}
  //       />
       
  //     ))
  //   }
  //   else if(filteredExpenses.length === 1)
  //   {
  //     expensesContent =filteredExpenses.map((expenses) => (
  //       <ExpenseItem
  //         key={expenses.id}
  //         title={expenses.title}
  //         amount={expenses.amount}
  //         date={expenses.date}
  //       />
       
  //     ))
  //   }
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />



       <ExpenseChart expenses={filteredExpenses} />
        {/* {expensesContent}; */}


      {filteredExpenses.length === 1 ? <p>"Only single Expense here. Please add more..."</p> : 
       (filteredExpenses.map((expenses) => (
        <ExpenseItem
          key={expenses.id}
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
        />
      )))}
     
      {/* <ExpenseItem 
             title = {props.item[0].title}
             amount = {props.item[0].amount}
             date = {props.item[0].date}
             location= {props.item[0].location}

             />
              <ExpenseItem 
             title = {props.item[1].title}
             amount = {props.item[1].amount}
             date = {props.item[1].date}
             location= {props.item[1].location}

             />
              <ExpenseItem 
             title = {props.item[2].title}
             amount = {props.item[2].amount}
             date = {props.item[2].date}
             location= {props.item[2].location}

             />
              <ExpenseItem 
             title = {props.item[3].title}
             amount = {props.item[3].amount}
             date = {props.item[3].date}
             location= {props.item[3].location}

             />
              <ExpenseItem 
             title = {props.item[4].title}
             amount = {props.item[4].amount}
             date = {props.item[4].date}
             location= {props.item[4].location}

             /> */}
    </Card>
  );
};

export default Expenses;

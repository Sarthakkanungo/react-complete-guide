import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";

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


  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      {filteredExpenses.map((expenses) => (
        <ExpenseItem
          key={expenses.id}
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
        />
      ))}

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

// import ExpenseItem from "./Components/ExpenseItem";
import Expenses from "./Components/Expense/Expenses";
function App() {
  const expense = [
    {
      title: "Food",
      location: "Indore",
      amount: 500,
      date : new Date(2023,5,10),
    },

    {
      title: "Travel",
      location: "Mumbai",
      amount: 650,
      date : new Date(2023,8,2),
    },
    {
      title: "Movie",
     location: "Bhopal",
      amount: 800,
      date : new Date(2022,8,27),
    },
    {
      title: "Shopping",
      location: "Bangluru",
      amount: 5600,
      date : new Date(2024,9,17),
    },
    {
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
      <div>
        <h2>Let's get started!</h2>
        <h2>Expense Item</h2>
      </div>
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

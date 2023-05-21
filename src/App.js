import ExpenseItem from "./Components/ExpenseItem";

function App() {
  const expense = [
    {
      title: "Food",
      LocationOfExpenditure: "Indore",
      Amount: 500,
    },

    {
      title: "Travel",
      LocationOfExpenditure: "Mumbai",
      Amount: 650,
    },
    {
      title: "Movie",
      LocationOfExpenditure: "Bhopal",
      Amount: 800,
    },
    {
      title: "Shopping",
      LocationOfExpenditure: "Bangluru",
      Amount: 5600,
    },
    {
      title: "Party Venue",
      LocationOfExpenditure: "Delhi",
      Amount: 8800,
    },
  ];



  const expenseItems = []; // Create an empty array to hold the ExpenseItem components

  expense.forEach((expense) => {
    expenseItems.push(
      <ExpenseItem
        title={expense.title}
        location={expense.LocationOfExpenditure}
        amount={expense.Amount}
      ></ExpenseItem>
    );
  });
  return (
    <div>
      <div>
        <h2>Let's get started!</h2>
      </div>
       {expenseItems}
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

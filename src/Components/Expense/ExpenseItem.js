import React , { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css' 


const ExpenseItem = (props) => {
 
 
  const [amount , setAmount] = useState(props.amount);

  const AddExpense = () => {
    setAmount(amount + 100);
  }
 
  // const [title , setTitle] = useState(props.title);

  // const changeTitle = () => {
  //   setTitle("updated");
  //  console.log(title);
  // }

  // const deleteHandler = (e) => {
    
  //   let item = e.target.parentElement;
  //   //console.log(item); It will target the whole expense item component and in next line we are deleting it.
  //   item.remove();
    
  //   }

  
   
 return (

  <Card className='expense-item'>

  <ExpenseDate date ={props.date} />
  
  <ExpenseDetails amount={amount}  location={props.location}   title={props.title} />
  <button onClick = {AddExpense} > Add $100</button>
  {/* <button  onClick={deleteHandler} > Delete Expense </button> */}
  </Card>
   
  );
}

export default ExpenseItem;
 
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css' 


const ExpenseItem = (props) => {

  const deleteHandler = (e) => {
    
    let item = e.target.parentElement;
    //console.log(item); It will target the whole expense item component and in next line we are deleting it.
    item.remove();
    
    }

  
   
 return (

  <Card className='expense-item'>

  <ExpenseDate date ={props.date} />
  
  <ExpenseDetails amount={props.amount}  location={props.location}   title={props.title} />
  
  <button  onClick={deleteHandler} > Delete Expense </button>
  </Card>
   
  );
}

export default ExpenseItem;
 
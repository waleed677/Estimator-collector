import './App.css';
import Expense from './components/Expense/Expense';
import NewExpenseItem from './components/NewExpense/NewExpenseItem';
import { useState } from 'react';

const dummyExpense = [
  {
  id: 'e1',
  date: new Date('2022-12-09'),  
  title: "Cryto Charges",
  price: "190"
},
{
  id: 'e2',
  date: new Date('2022-12-05'),  
  title: "Toilet Paper",
  price: "290"
},
{
  id: 'e3',
  date: new Date('2022-12-01'),  
  title: "Education Fee",
  price: "200"
}
];

function App() {


  const [expenses, setExpenses] = useState(dummyExpense);


  const submitDataHandler = (expenseData) => {
    setExpenses((prevExpense) => {
      return [expenseData, ...prevExpense]
    });
};


  return (
    <>
    <NewExpenseItem onSubmitData = {submitDataHandler}/>
    <Expense  item = {expenses}/>
    </>
  );
}

export default App;

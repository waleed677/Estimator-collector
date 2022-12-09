import logo from './logo.svg';
import './App.css';
import Expense from './components/Expense/Expense';
import NewExpenseItem from './components/NewExpense/NewExpenseItem';

function App() {

  const submitDataHandler = (expenseData) => {
    console.log("In App.js", expenseData);
};

  const expenses = [
    {
      date: new Date('2022-12-09'),  
      title: "Cryto Charges",
      price: "290"
    },
    {
      date: new Date('2022-12-05'),  
      title: "Cryto Charges",
      price: "290"
    },
    {
      date: new Date('2022-12-01'),  
      title: "Cryto Charges",
      price: "200"
    },
  ]

  return (
    <>
    <NewExpenseItem onSubmitData = {submitDataHandler}/>
    <Expense  item = {expenses}/>
    </>
  );
}

export default App;

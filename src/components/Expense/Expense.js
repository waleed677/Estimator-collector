import React, { useState } from 'react'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import ExpenseItem from './ExpenseItem'

function Expense(props) {

  const [selectedYear, setSelectedYear] = useState('2022');
  const noExpenseItem = "Expense Not Found";
  
  const selectedFilterYear = (selected) => {
    setSelectedYear(selected);
  }

  const expenseItems = props.item.filter((el) =>  { return el.date.getFullYear().toString() === selectedYear });
  console.log(expenseItems);  

  return (
    <>
      <Card className="p-6 mx-auto max-w-7xl mt-16 bg-card">
        <ExpenseFilter onChangeFilter={selectedFilterYear} selected = {selectedYear} />
        {expenseItems.length == 0 && <h2 className='text-white flex justify-center text-4xl mt-5'>Expense Not Found</h2>}
        { expenseItems.map((expense) => (
          <ExpenseItem
            key={expense.id}
            data={expense}
          />
        )) }
       
      </Card>
    </>
  )
}

export default Expense
import React from 'react'
import ExpenseForm from './ExpenseForm/ExpenseForm'

function NewExpenseItem(props) {

    const submitDataHandler = (expenseData) => {

        const newData = {
            ...expenseData,
            id: Math.random()
        }
        console.log({newData});
        props.onSubmitData(expenseData);
    };


  return (
    <div className="expenseForm bg-purple-500  mx-auto max-w-7xl mt-10 pb-5 rounded-lg">
        <ExpenseForm onSubmitDate = { submitDataHandler} />
    </div>
  )
}

export default NewExpenseItem
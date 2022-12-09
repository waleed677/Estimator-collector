import React from 'react'
import ExpenseForm from './ExpenseForm/ExpenseForm'

function NewExpenseItem() {
  return (
    <div className="expenseForm bg-purple-500  mx-auto max-w-7xl mt-10 pb-5 rounded-lg">
        <ExpenseForm />
    </div>
  )
}

export default NewExpenseItem
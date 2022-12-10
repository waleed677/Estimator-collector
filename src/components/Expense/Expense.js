import React from 'react'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import ExpenseItem from './ExpenseItem'

function Expense(props) {
  return (
    <>
        <Card className ="p-6 mx-auto max-w-7xl mt-16 bg-card">
        <ExpenseFilter />
            {props.item.map((expense) => (
                <ExpenseItem
                  key = {expense.id} 
                  data = {expense} 

                />
            ))}
        </Card>
    </>
  )
}

export default Expense
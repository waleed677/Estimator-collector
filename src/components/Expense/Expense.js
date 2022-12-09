import React from 'react'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'

function Expense(props) {
  return (
    <>
        <Card className ="p-6 bg-black mx-auto max-w-7xl mt-64 ">
            {props.item.map((expense) => (
                <ExpenseItem data = {expense} />
            ))}
        </Card>
    </>
  )
}

export default Expense
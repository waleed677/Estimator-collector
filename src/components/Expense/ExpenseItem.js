import React from 'react'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'

function ExpenseItem(props) {


  return (
    <>
        <Card className ="flex justify-between items-center mx-auto bg-gray-700 mt-4 p-3">
            <ExpenseDate data = {props.data} />
            <div></div>
            <h2 className="text-white text-2xl font-bold">{props.data.title}</h2>
            <p className="text-white text-2xl font-bold">{props.data.price}</p>
        </Card>\classes\typography\text-9xl
    </>
  )
}

export default ExpenseItem
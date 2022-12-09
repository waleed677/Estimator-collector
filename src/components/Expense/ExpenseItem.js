import React from 'react'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'

function ExpenseItem(props) {

  return (
    <>
        <Card className ="flex justify-between  bg-gray-700 mt-4 p-3">
            <ExpenseDate data = {props.data} />
            <div className='p-8 items-center'>
            <h2 className="text-white text-2xl font-bold">{props.data.title}</h2>
            </div>
            <div className='bg-violet-900 rounded-lg p-8 py-5 mt-5 h-16'>
            <p className="text-white text-2xl font-bold">${props.data.price}</p>
            </div>
        </Card>
    </>
  )
}

export default ExpenseItem
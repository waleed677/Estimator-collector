import React from 'react'

function ExpenseDate(props) {

    const month = props.data.date.toLocaleString('en-us', {month: "long"});
    const day = props.data.date.toLocaleString('en-us', {day: "2-digit"});
    const year = props.data.date.getFullYear();

    return (
        <div className="expense-date">
            <p className="text-white text-2xl">{month}</p>
            <p className="text-white text-2xl">{day}</p>
            <p className="text-white text-2xl">{year}</p>
        </div>
    )
}

export default ExpenseDate
import React from 'react'

function ExpenseDate(props) {

    const month = props.data.date.toLocaleString('en-us', {month: "long"});
    const day = props.data.date.toLocaleString('en-us', {day: "2-digit"});
    const year = props.data.date.getFullYear();

    return (
        <div className="expense-date">
            <p className="expense-date__month">{month}</p>
            <p className="expense-date__day">{day}</p>
            <p className="expense-date__year">{year}</p>
        </div>
    )
}

export default ExpenseDate
import React, { useState } from 'react'

function ExpenseForm(props) {

    const [enteredData, setEnteredData] = useState({
        title: '',
        price: '',
        date: ''
    });
    const titleHandler = (event) => {
        setEnteredData((prevState) => {
            return {...prevState, title:event.target.value}
        });
    }

    const priceHandler = (event) => {
        setEnteredData((prevState) => {
            return {...prevState, price:event.target.value}
        });
    }

    const dateHandler = (event) => {
        setEnteredData((prevState) => {
            return {...prevState, date:event.target.value}
        });
    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.onSubmitDate(enteredData);
        setEnteredData({
            title: '',
            price: '',
            date: ''
        })
    }


    return (
        <>
            <form onSubmit={submitHandler}>
                <div className="space-y-6 px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-4 gap-6">
                        <div className="col-span-2 sm:col-span-2">
                            <label for="company-website" className="block text-3xl font-medium text-black-700">Title</label>
                            <div className="mt-1 flex rounded-md ">
                                <input type="text"
                                    className="block w-full flex-1 text-4xl rounded-md p-1"
                                    value = {enteredData['title']}
                                    onChange={titleHandler}
                                />
                            </div>
                        </div>
                        <div className="col-span-2 sm:col-span-2">
                            <label for="company-website" className="ock text-3xl font-medium text-black-700">Price</label>
                            <div className="mt-1 flex rounded-md ">
                                <input type="number"
                                    className="block w-full flex-1 text-4xl rounded-md p-1"
                                    value = {enteredData['price']}
                                    onChange={priceHandler}
                                />
                            </div>
                        </div>
                        <div className="col-span-2 sm:col-span-2">
                            <label for="company-website" className="ock text-3xl font-medium text-black-700">Price</label>
                            <div className="mt-1 flex rounded-md ">
                                <input type="date"
                                    className="block w-full flex-1 text-4xl rounded-md p-1"
                                    value = {enteredData['date']}
                                    onChange={dateHandler}
                                />
                            </div>
                        </div>

                    </div>

                    <button type="submit" className="rounded-md border border-transparent bg-violet-900 py-2 px-4 text-1xl font-medium text-white shadow-sm hover:bg-indigo-700  focus:ring-2 focus:ring-indigo-500 ">Add Expense</button>

                </div>
            </form>
        </>
    )
}

export default ExpenseForm
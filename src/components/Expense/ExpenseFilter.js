import React, { useState } from 'react'

function ExpenseFilter(props) {

    const filterHandler = (event) => {
        props.onChangeFilter(event.target.value);
    }
    return (
        <>
            <div className="flex justify-between">

                <div>
                    <p className='text-white text-2xl  font-semibold'>Filter By Year</p>
                </div>

                <div>
                    <select 
                    className=" block w-48 rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    onChange={filterHandler}
                    value = {props.selected}
                    >
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default ExpenseFilter
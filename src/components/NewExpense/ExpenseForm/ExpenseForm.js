import React from 'react'

function ExpenseForm() {
    return (
        <>
            <form>
                <div className="space-y-6 px-4 py-5 sm:p-6">
                    <div class="grid grid-cols-4 gap-6">
                        <div class="col-span-2 sm:col-span-2">
                        <label for="company-website" class="block text-3xl font-medium text-black-700">Title</label>
                            <div class="mt-1 flex rounded-md ">
                                <input type="text"  
                                class="block w-full flex-1 text-4xl rounded-md p-1" />
                            </div>
                        </div>
                        <div class="col-span-2 sm:col-span-2">
                            <label for="company-website" class="ock text-3xl font-medium text-black-700">Price</label>
                            <div class="mt-1 flex rounded-md ">
                                <input type="number" 
                                class="block w-full flex-1 text-4xl rounded-md p-1" />
                            </div>
                        </div>
                        <div class="col-span-2 sm:col-span-2">
                            <label for="company-website" class="ock text-3xl font-medium text-black-700">Price</label>
                            <div class="mt-1 flex rounded-md ">
                                <input type="date"  
                                class="block w-full flex-1 text-4xl rounded-md p-1" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default ExpenseForm
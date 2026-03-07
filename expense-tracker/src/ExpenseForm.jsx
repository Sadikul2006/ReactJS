import { useState,useEffect } from 'react'

function ExpenseForm({onAddExpense}) {
  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState("")

  const handelSubmit = (e) => {
    e.preventDefault();

    if(!title || !amount) return alert("Please fill all fields!")
  }

  return (
    <form class="expense-form" onSubmit={handelSubmit}>
        <input 
          placeholder='Expense Title' 
          type="text" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input 
          placeholder='Amount' 
          type="number" 
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type='submit'>Add Expense</button>
    </form>
  )
}

export default ExpenseForm

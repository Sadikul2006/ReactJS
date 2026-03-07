import { useState, useEffect } from 'react'
import './App.css'
import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'

function App() {
  const [expenses, setExpense] = useState([])

  const addExpense = (expense) => {
    setExpense((prev) => [...prev, expense])
  }

  const deleteExpense = (id) => {

  }
  return (
    <div className="app-container">
      <h1>💰 Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <h3 className="total">Total Expense: ₹{totalExpenses.toFixed(2)}</h3>
      <ExpenseList expenses={expenses} onDelete={deleteExpense} />
    </div>
  )
}

export default App

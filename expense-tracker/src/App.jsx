import { useEffect, useState } from 'react'
import './App.css'
import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'

function App() {

  const [expense, setExpense] = useState(() => {
    const saved = localStorage.getItem("expenses")
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expense))
  }, [expense])

  const addExpense = (expense) => {
    setExpense((prev) => [...prev, expense])
  }

  const deleteExpense = (id) => {
    setExpense((prev) => prev.filter((item) => item.id !== id))
  }

  const totalExpenses = expense.reduce((total, item) => {
    return total + Number(item.amount)
  }, 0)

  return (
    <div className="app-container">
      <h1>💰 Expense Tracker</h1>

      <ExpenseForm onAddExpense={addExpense} />

      <h3 className="total">
        Total Expense: ₹{totalExpenses.toFixed(2)}
      </h3>

      <ExpenseList expenses={expense} onDelete={deleteExpense} />
    </div>
  )
}

export default App
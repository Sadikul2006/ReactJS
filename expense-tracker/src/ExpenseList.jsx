import { useState,useEffect } from 'react'
import ExpenseItem from './ExpenseItem'

function ExpenseList() {
  return (
    <div class='expense-list'>
      <ExpenseItem/>
    </div>
  )
}

export default ExpenseList

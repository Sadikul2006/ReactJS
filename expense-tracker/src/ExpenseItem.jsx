function ExpenseItem({ item, onDelete }) {
  return (
    <div className="expense-item">
      <span>{item.title}</span>
      <span>{item.amount}</span>
      <span onClick={() => onDelete(item.id)}>X</span>
    </div>
  )
}

export default ExpenseItem
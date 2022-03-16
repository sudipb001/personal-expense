import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }

    props.onAddExpense(expenseData)
  }

  const newExpenseFormHandler = () => {
    setIsEditing((prevState) => {
      return !prevState
    })
  }

  return (
    <div className='new-expense'>
      {!isEditing && (
        <button onClick={newExpenseFormHandler}>Add new expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={newExpenseFormHandler}
        />
      )}
    </div>
  )
}

export default NewExpense

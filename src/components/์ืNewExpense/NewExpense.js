import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing,setisEditting] = useState(false)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData)
    setisEditting(false)
  };

  const editingHandler = () => {
    setisEditting(true);
  }
  const onCancleHandler = () => {
    setisEditting(false)
  }
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={editingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancle = {onCancleHandler} />}
    </div>
  );
};

export default NewExpense;

import React, { useState } from "react";

function ExpenseItem({ expense, onDeleteExpense, onUpdateExpense }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedExpense, setEditedExpense] = useState({ ...expense });

  const saveEdit = () => {
    onUpdateExpense(expense.id, editedExpense);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <li>
        <input
          type="text"
          value={editedExpense.title}
          onChange={(e) =>
            setEditedExpense({ ...editedExpense, title: e.target.value })
          }
        />
        <input
          type="number"
          value={editedExpense.amount}
          onChange={(e) =>
            setEditedExpense({
              ...editedExpense,
              amount: parseFloat(e.target.value),
            })
          }
        />
        <input
          type="date"
          value={editedExpense.date}
          onChange={(e) =>
            setEditedExpense({ ...editedExpense, date: e.target.value })
          }
        />
        <button onClick={saveEdit}>Save</button>
        <button onClick={() => setIsEditing(false)}>Cancel</button>
      </li>
    );
  }

  return (
    <li>
      {expense.title}: PKR {expense.amount.toFixed(2)} on{" "}
      {new Date(expense.date).toLocaleDateString()}
      <button onClick={() => setIsEditing(true)}>Edit</button>
      <button onClick={() => onDeleteExpense(expense.id)}>Delete</button>
    </li>
  );
}

export default ExpenseItem;

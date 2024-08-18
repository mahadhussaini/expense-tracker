import React from "react";
import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, onDeleteExpense, onUpdateExpense }) {
  return (
    <div>
      {expenses.length > 0 && <h2>Expenses</h2>}
      <ul>
        {expenses.length === 0 ? (
          <li>No expenses found.</li>
        ) : (
          expenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              onDeleteExpense={onDeleteExpense}
              onUpdateExpense={onUpdateExpense}
            />
          ))
        )}
      </ul>
    </div>
  );
}

export default ExpenseList;

import React from "react";

function TotalExpense({ expenses }) {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div>
      <h2>Total Expense: PKR {total.toFixed(2)}</h2>
    </div>
  );
}

export default TotalExpense;

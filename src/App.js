import React, { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import TotalExpense from "./components/TotalExpense";
import ExpenseFilter from "./components/ExpenseFilter";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  const [filteredYear, setFilteredYear] = useState("all");

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const updateExpense = (id, updatedExpense) => {
    setExpenses(
      expenses.map((expense) => (expense.id === id ? updatedExpense : expense))
    );
  };

  const filterExpenses =
    filteredYear === "all"
      ? expenses
      : expenses.filter(
          (expense) =>
            new Date(expense.date).getFullYear().toString() === filteredYear
        );

  return (
    <div className="App">
      <h1>ExpenseBuddy</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseFilter
        selectedYear={filteredYear}
        onFilterChange={setFilteredYear}
      />
      <ExpenseList
        expenses={filterExpenses}
        onDeleteExpense={deleteExpense}
        onUpdateExpense={updateExpense}
      />
      <TotalExpense expenses={filterExpenses} />
    </div>
  );
}

export default App;

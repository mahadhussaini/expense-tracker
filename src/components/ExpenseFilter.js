import React from "react";

function ExpenseFilter({ selectedYear, onFilterChange }) {
  const years = ["2022", "2023", "2024", "2025", "all"];

  return (
    <div className="expense-filter">
      <label>Filter by Year: </label>
      <select
        value={selectedYear}
        onChange={(e) => onFilterChange(e.target.value)}
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year === "all" ? "All Years" : year}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ExpenseFilter;

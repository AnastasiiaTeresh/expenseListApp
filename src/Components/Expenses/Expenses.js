import React from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList item={filteredExpenses} />
      </Card>
    </div>
  );
}

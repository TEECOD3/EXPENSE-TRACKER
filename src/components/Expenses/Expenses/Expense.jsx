import React from "react";
import FilteredYear from "../Expensefilter/FilteredYear";

import ExpenseList from "../ExpenseList/ExpenseList";

import { useState } from "react";
import "./Expense.modules.scss";
import NewExpense from "../../NewExpense/NewExpense";

function Expense({ items, ...otherprops }) {
  const [filtered, setFilteredyear] = useState("2020");

  const filteredyearhandler = (selectyear) => {
    setFilteredyear(selectyear);
  };

  const filteredyear = items.filter((item) => {
    return item.date.getFullYear().toString() === filtered;
  });

  return (
    <div className="Expenses">
      <FilteredYear
        selectedyear={filtered}
        onChangeyear={filteredyearhandler}
      />
      <ExpenseList items={filteredyear} />
    </div>
  );
}

export default Expense;

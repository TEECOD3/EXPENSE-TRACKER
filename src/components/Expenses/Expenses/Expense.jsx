import React from "react";
import FilteredYear from "../Expensefilter/FilteredYear";

import ExpenseList from "../ExpenseList/ExpenseList";

import { useState } from "react";
import "./Expense.modules.scss";
import NewExpense from "../../NewExpense/NewExpense";
import Expensechart from "../../Chart/expensechart";

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
      <Expensechart expenses={filteredyear} />
      <FilteredYear
        selectedyear={filtered}
        onChangeyear={filteredyearhandler}
      />
      <ExpenseList item={filteredyear} />
    </div>
  );
}

export default Expense;

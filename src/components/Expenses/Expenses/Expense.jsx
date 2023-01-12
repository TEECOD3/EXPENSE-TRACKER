import React from "react";
import FilteredYear from "../Expensefilter/FilteredYear";
import ExpenseItems from "../ExpenseItems/ExpenseItems";
import "./Expense.modules.scss";

function Expense({ items, ...otherprops }) {
  return (
    <div>
      <div className="home">
        <div className="home__content">
          <FilteredYear />
          {items.map((expense) => (
            <ExpenseItems
              title={expense.title}
              amount={expense.amount}
              key={expense.id}
              date={expense.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Expense;

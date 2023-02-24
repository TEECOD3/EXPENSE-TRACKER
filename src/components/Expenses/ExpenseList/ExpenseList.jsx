import React from "react";
import ExpenseItems from "../ExpenseList/ExpenseItems";
import "./ExpenseList.modules.scss";

function ExpenseList({ item }) {
  const notFoundmsg = (
    <h1 className="expense-list__error">expense not found</h1>
  );

  if (item.length === 0) {
    return notFoundmsg;
  }
  return (
    <ul className="expense-list">
      {item.map((expense) => (
        <ExpenseItems
          title={expense.title}
          amount={expense.amount}
          key={expense.id}
          date={expense.date}
        />
      ))}
    </ul>
  );
}

export default ExpenseList;

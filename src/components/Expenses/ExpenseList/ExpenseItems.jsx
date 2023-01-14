import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItems.modules.scss";

function ExpenseItems({ amount, title, date }) {
  return (
    <>
      <li className="expense-item">
        <div className="expense-item__details">
          <ExpenseDate date={date} />
          <div className="expense-item__title">{title}</div>
        </div>

        <div className="expense-item__amount"> ${amount}</div>
      </li>
    </>
  );
}

export default ExpenseItems;

import React from "react";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import "./Expenses.modules.scss";

function ExpenseItems({ amount, title, date }) {
  return (
    <>
      <div className="expense-item">
        <div className="expense-item__details">
          <ExpenseDate date={date} />
          <div className="expense-item__title">{title}</div>
        </div>

        <div className="expense-item__amount"> ${amount}</div>
      </div>
    </>
  );
}

export default ExpenseItems;

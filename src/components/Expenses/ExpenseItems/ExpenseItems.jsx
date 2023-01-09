import React from "react";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import "./Expenses.modules.scss";
function ExpenseItems() {
  return (
    <>
      <div className="expense-item">
        <div className="expense-item__details">
          <ExpenseDate />
          <div className="expense-item__title">indomie</div>
        </div>

        <div className="expense-item__amount">$50</div>
      </div>
    </>
  );
}

export default ExpenseItems;

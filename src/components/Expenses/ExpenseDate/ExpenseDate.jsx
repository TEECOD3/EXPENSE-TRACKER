import React from "react";
import "./ExpenseDate.modules.scss";

function ExpenseDate() {
  return (
    <div>
      <div className="expense-date">
        <div className="expense-date__day">23rd</div>
        <div className="expense-date__month">june</div>
        <div className="expense-date__year">2022</div>
      </div>
    </div>
  );
}

export default ExpenseDate;

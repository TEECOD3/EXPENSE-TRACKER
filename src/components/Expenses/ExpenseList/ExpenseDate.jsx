import React from "react";
import "./ExpenseDate.modules.scss";

function ExpenseDate({ date }) {
  const month = date.toLocaleString("en-US", { month: "short" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();
  return (
    <div>
      <div className="expense-date">
        <div className="expense-date__day">
          {day}
          <sub>th</sub>
        </div>
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
      </div>
    </div>
  );
}

export default ExpenseDate;

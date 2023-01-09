import React from "react";
import ExpenseItems from "../ExpenseItems/ExpenseItems";
import "./Expense.modules.scss";

function Expense() {
  return (
    <div>
      <div className="home">
        <div className="home__content">
          <ExpenseItems />
        </div>
      </div>
    </div>
  );
}

export default Expense;

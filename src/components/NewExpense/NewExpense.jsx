import React from "react";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.modules.scss";
function NewExpense() {
  const [isEditing, setIsEditing] = useState(false);
  const starteditingHandler = () => {
    setIsEditing(true);
  };

  const oncancelHandler = () => {
    setIsEditing(false);
  };
  const onaddExpenseHandler = (enteredExpensesdata) => {
    const expensedata = { ...enteredExpensesdata };
    console.log(expensedata);
  };
  return (
    <>
      <div className="New-expense">
        {!isEditing && (
          <div className="New-expense__btn">
            <button className="btn-shine" onClick={starteditingHandler}>
              <span>Add Expense</span>
            </button>
          </div>
        )}
        {isEditing && (
          <ExpenseForm
            onAddexpense={onaddExpenseHandler}
            onCancel={oncancelHandler}
          />
        )}
      </div>
    </>
  );
}

export default NewExpense;

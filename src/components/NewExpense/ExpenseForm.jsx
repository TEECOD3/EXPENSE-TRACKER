import React from "react";
import { useState } from "react";
import { IoIosDoneAll, IoIosExit } from "react-icons/io";
import "./ExpenseForm.modules.scss";

function ExpenseForm({ onAddexpense, onCancel }) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    onAddexpense(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <>
      <div className="expense-form">
        <form action="#" onSubmit={submitHandler}>
          <div className="expense-form__split">
            <div className="expense-form__control">
              <label htmlFor="name">title</label>
              <input value={enteredTitle} type="text" onChange={titleHandler} />
            </div>
            <div className="expense-form__control expense-form__control--amt">
              <label htmlFor="">Amount</label>
              <input
                value={enteredAmount}
                type="text"
                onChange={amountHandler}
              />
            </div>
          </div>
          <div className="expense-form__split  expense-form__split--second ">
            <div className="expense-form__control">
              <label htmlFor="name">date</label>
              <input
                value={enteredDate}
                onChange={dateHandler}
                type="date"
                min="2019-01-01"
                max="2022-12-31"
              />
            </div>

            <div className="buttons">
              <button onClick={onCancel} type="reset">
                <span>cancel</span>
              </button>
              <button type="submit">
                <span>add</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default ExpenseForm;

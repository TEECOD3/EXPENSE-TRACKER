import React from "react";
import { useState } from "react";
import { IoIosDoneAll, IoIosExit } from "react-icons/io";
import "./ExpenseForm.modules.scss";

function ExpenseForm({ onAddexpense, onCancel }) {
  const [userinput, setUserinput] = useState({
    enteredTitle: "",
    enteredDate: "",
    enteredAmount: "",
  });

  const titleHandler = (event) => {
    setUserinput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };
  const amountHandler = (event) => {
    setUserinput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };
  const dateHandler = (event) => {
    setUserinput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = userinput;

    onAddexpense(expenseData);

    setUserinput({
      enteredTitle: "",
      enteredDate: "",
      enteredAmount: "",
    });
  };
  return (
    <>
      <div className="expense-form">
        <form action="#" onSubmit={submitHandler}>
          <div className="expense-form__split">
            <div className="expense-form__control">
              <label htmlFor="name">title</label>
              <input
                value={{ ...userinput }.enteredTitle}
                type="text"
                onChange={titleHandler}
              />
            </div>
            <div className="expense-form__control expense-form__control--amt">
              <label htmlFor="">Amount</label>
              <input
                value={{ ...userinput }.enteredAmount}
                type="text"
                onChange={amountHandler}
              />
            </div>
          </div>
          <div className="expense-form__split  expense-form__split--second ">
            <div className="expense-form__control">
              <label htmlFor="name">date</label>
              <input
                value={{ ...userinput }.enteredDate}
                onChange={dateHandler}
                type="date"
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

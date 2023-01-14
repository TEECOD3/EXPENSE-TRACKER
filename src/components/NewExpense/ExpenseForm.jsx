import React from "react";
import { IoIosDoneAll, IoIosExit } from "react-icons/io";
import "./ExpenseForm.modules.scss";

function ExpenseForm() {
  return (
    <>
      <div className="expense-form">
        <form action="#">
          <div className="expense-form__split">
            <div className="expense-form__control">
              <label htmlFor="">name</label>
              <input type="text" />
            </div>
            <div className="expense-form__control expense-form__control--amt">
              <label htmlFor="">Amount</label>
              <input type="text" />
            </div>
          </div>
          <div className="expense-form__split  expense-form__split--second ">
            <div className="expense-form__control">
              <label htmlFor="name">date</label>
              <input type="date" />
            </div>
            {/* <button>cancel</button>
          <button>add expense</button> */}

            <div className="buttons">
              <button type="submit" class="uiverse">
                <span class="tooltip">
                  <IoIosExit />
                </span>
                <span>cancel</span>
              </button>
              <button type="submit" class="uiverse">
                <span class="tooltip">
                  <IoIosDoneAll />
                </span>
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

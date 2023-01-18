import React from "react";
import { IoMdAnalytics } from "react-icons/io";
import Expense from "../components/Expenses/Expenses/Expense";
import NewExpense from "../components/NewExpense/NewExpense";
import { useState } from "react";

import "./home.modules.scss";

const random_expenses = [
  {
    id: "3941",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "9302", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "963",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 9, 28),
  },
  {
    id: "865",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "757",
    title: "laptop",
    amount: 1200,
    date: new Date(2022, 11, 12),
  },

  {
    id: "559",
    title: "laptop",
    amount: 1200,
    date: new Date(2022, 11, 12),
  },
  {
    id: "233",
    title: "laptop",
    amount: 1200,
    date: new Date(2022, 11, 12),
  },
];
function Home() {
  const [expenses, SetExpenses] = useState(random_expenses);
  const onaddedExpense = (addedexpensdata) => {
    SetExpenses((prevState) => {
      return [...prevState, addedexpensdata];
    });
  };
  return (
    <>
      <div className="navigation">
        <div className="navigation__logo">
          <span>XPENSE-TRACKER</span>
          <IoMdAnalytics className="navigation__icon" />
        </div>
      </div>
      <div className="home">
        <div className="home__content">
          <NewExpense addedExpense={onaddedExpense} />
          <Expense items={expenses} />
        </div>
      </div>
    </>
  );
}

export default Home;

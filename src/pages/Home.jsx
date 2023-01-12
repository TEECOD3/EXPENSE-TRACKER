import React from "react";
import { IoMdAnalytics } from "react-icons/io";
import Expense from "../components/Expenses/Expenses/Expense";
import "./home.modules.scss";

const random_expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e4",
    title: "laptop",
    amount: 1200,
    date: new Date(2022, 11, 12),
  },
];
function Home() {
  return (
    <>
      <nav className="navigation">
        <div className="navigation__logo">
          <span>XPENSE-TRACKER</span>
          <IoMdAnalytics className="navigation__icon" />
        </div>
      </nav>
      <Expense items={random_expenses} />
    </>
  );
}

export default Home;

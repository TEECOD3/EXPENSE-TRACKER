import React from "react";
import { IoMdAnalytics } from "react-icons/io";
import Expense from "../components/Expenses/Expenses/Expense";
import "./home.modules.scss";

function Home() {
  return (
    <>
      <nav className="navigation">
        <div className="navigation__logo">
          <span>XPENSE-TRACKER</span>
          <IoMdAnalytics className="navigation__icon" />
        </div>
      </nav>
      <Expense />
    </>
  );
}

export default Home;

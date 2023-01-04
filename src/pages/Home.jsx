import React from "react";
import { IoMdAnalytics } from "react-icons/io";
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

      <div className="home">
        <div className="home__content"></div>
      </div>
    </>
  );
}

export default Home;

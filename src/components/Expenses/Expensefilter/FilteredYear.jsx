import React from "react";
import "./FilteredYear.modules.scss";

function FilteredYear({ onChangeyear, selectedyear }) {
  const inputEventhandler = (event) => {
    const inputData = event.target.value;
    onChangeyear(inputData);
  };
  return (
    <>
      <div className="expenses-filter">
        <div className="expenses-filter__control">
          <label htmlFor="selections">Filter by year</label>
          <select value={selectedyear} onChange={inputEventhandler}>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default FilteredYear;

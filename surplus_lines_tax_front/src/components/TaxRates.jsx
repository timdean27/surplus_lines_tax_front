import React from "react";

const TaxRates = ({ TaxRatesARY }) => {
  return (
    <div className="div_taxRates_table">
      {TaxRatesARY.map((state, index) => (
        <ul className="ul_taxRates_table" key={index}>
          <li>State: {state.state}</li>
          <li>Abv: {state.abv}</li>
          <li>Tax Rate: {state.taxRate}%</li>
        </ul>
      ))}
    </div>
  );
};

export default TaxRates;

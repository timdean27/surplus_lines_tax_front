import React, { useState, useEffect } from "react";

const StatesInput = () => {
  const [newState, setNewState] = useState(null);
  const [newPremium, setNewPremium] = useState(null);
  const [StatePremiums, setStatePremiums] = useState([
    { id: 1, state: "New York", premium: 3000 },
    { id: 2, state: "New Jersey", premium: 4000 },
    { id: 3, state: "Florida", premium: 5000 },
  ]);

  const TaxRates = [
    { state: "New York", taxRate: 3.5 },
    { state: "New Jersey", taxRate: 3 },
    { state: "Florida", taxRate: 5 },
    { state: "Kentucky", taxRate: 4 },
  ];

  const handleChange = (e) => {
    setNewState({ ...newState, [e.target.id]: e.target.value });
    setNewPremium({ ...newPremium, [e.target.id]: e.target.value });
    console.warn(e.target.value);
    console.log(newState);
    console.log(newPremium);
  };

  const handleSubmit = () => {
    setStatePremiums([
      ...StatePremiums,
      {
        id: StatePremiums.length + 1,
        state: newState.State,
        premium: newPremium.Premium,
      },
    ]);
    console.log(StatePremiums, "hello");
  };

  console.log(StatePremiums, "StatePremiums");

  const TaxFunc = (currentState,premium) => {
    console.log("current", currentState);
    console.log("TaxRates",TaxRates);
    console.log("premium",premium);
    let premiumDue = 0
    TaxRates.map((state, index) => {
        if(state.state == currentState){
            console.log(premium*(state.taxRate/100))
            premiumDue = Math.round((premium*(state.taxRate/100)+ Number.EPSILON) * 100) / 100
        }
    })
    return premiumDue
  };

  return (
    <div>
      <form>
        <input
          id="State"
          type="text"
          placeholder="State"
          onChange={handleChange}
        />
        <input
          id="Premium"
          type="number"
          placeholder="Premium"
          onChange={handleChange}
        />
        <button type="button" onClick={handleSubmit}>
          Input
        </button>
      </form>
      <div>
        {StatePremiums.map((state, index) => (
          <ul key={index}>
            <li>ID:{state.id}</li>
            <li>State:{state.state}</li>
            <li>Premium:{state.premium}</li>
            <li>taxes due:{TaxFunc(state.state, state.premium)}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default StatesInput;

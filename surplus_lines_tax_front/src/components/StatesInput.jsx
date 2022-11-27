import React, { useState, useEffect } from "react";

const StatesInput = () => {
  const [newState, setNewState] = useState(null);
  const [newPremium, setNewPremium] = useState(null);
  const TaxRates = [
    { "New York": 3.5 },
    { "New Jersey": 3 },
    { "Florida": 5 },
    { "Kentucky": 4 },
  ];

  let StatePremiums = [
    { id: 1, state: "New York", premium: 3.5 },
    { id: 2, state: "New Jersey", premium: 3 },
    { id: 3, state: "Florida", premium: 5 },
  ];

  const handleChange = (e) => {
    setNewState({ ...newState, [e.target.id]: e.target.value });
    setNewPremium({ ...newPremium, [e.target.id]: e.target.value });
    console.warn(e.target.value);
    console.log(newState);
    console.log(newPremium);
  };

  const handleSubmit = () => {
    StatePremiums.push({
      id: StatePremiums.length - 1,
      state: newState,
      premium: newPremium,
    });
    console.log(StatePremiums);
  };
  console.log(StatePremiums);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id="State"
          type="text"
          placeholder="State"
          onChange={handleChange}
        />
        <input
          id="Premium"
          type="text"
          placeholder="Premium"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Input</button>
      </form>
      <div>
        {StatePremiums.map((state, index) => (
          <ul key={index}>
            <li>{state.id}</li>
            <li>{state.state}</li>
            <li>{state.premium}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default StatesInput;

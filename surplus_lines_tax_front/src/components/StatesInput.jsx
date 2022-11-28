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
    { state: "Arkansas",abv:"AK", taxRate: 2.7},
    { state: "Alabama",abv:"AL", taxRate: 6},
    { state: "Alaska",abv:"AR", taxRate: 4},
    { state: "Arizona",abv:"AZ", taxRate: 3},
    { state: "California",abv:"CA", taxRate: 3},
    { state: "Colorado",abv:"CO", taxRate: 3},
    { state: "Connecticut",abv:"CT", taxRate: 4},
    { state: "Dominican Republic",abv:"DC", taxRate: 2},
    { state: "Delaware",abv:"DE", taxRate: 3},
    { state: "Florida",abv:"FL", taxRate: 4.94},
    { state: "Georgia",abv:"GA", taxRate: 4},
    { state: "Hawaii",abv:"HI", taxRate: 4.68},
    { state: "Iowa",abv:"IA", taxRate: 1},
    { state: "Idaho",abv:"ID", taxRate: 1.5},
    { state: "Illinois",abv:"IL", taxRate: 3.5},
    { state: "Indiana",abv:"IN", taxRate: 2.5},
    { state: "Kansas",abv:"KS", taxRate: 6},
    { state: "Kentucky",abv:"KY", taxRate: 3},
    { state: "Louisiana",abv:"LA", taxRate: 4.85},
    { state: "Massachusetts",abv:"MA", taxRate: 4},
    { state: "Maryland",abv:"MD", taxRate: 3},
    { state: "Maine",abv:"ME", taxRate: 3},
    { state: "Michigan",abv:"MI", taxRate: 2},
    { state: "Minnesota",abv:"MN", taxRate: 3},
    { state: "Missouri",abv:"MO", taxRate: 5},
    { state: "Mississippi",abv:"MS", taxRate: 4},
    { state: "Montana",abv:"MT", taxRate: 2.75},
    { state: "Arkansas",abv:"NC", taxRate: 5},
    { state: "Arkansas",abv:"ND", taxRate: 1.75},
    { state: "Nebraska",abv:"NE", taxRate: 3},
    { state: "New Hampshire",abv:"NH", taxRate: 3},
    { state: "New Jersey",abv:"NJ", taxRate: 5},
    { state: "New Mexico",abv:"NM", taxRate: 3},
    { state: "Nevada",abv:"NV", taxRate: 3.5},
    { state: "New York",abv:"NY", taxRate: 3.6},
    { state: "Ohio",abv:"OH", taxRate: 5},
    { state: "Oklahoma",abv:"OK", taxRate: 6},
    { state: "Oregon",abv:"OR", taxRate: 2},
    { state: "Pennsylvania",abv:"PA", taxRate: 3},
    { state: "Rhode Island",abv:"RI", taxRate: 4},
    { state: "South Carolina",abv:"SC", taxRate: 6},
    { state: "South Dakota",abv:"SD", taxRate: 2.5},
    { state: "Tennessee",abv:"TN", taxRate: 5},
    { state: "Texas",abv:"TX", taxRate: 4.85},
    { state: "Utah",abv:"UT", taxRate: 4.25},
    { state: "Virginia",abv:"VA", taxRate: 2.25},
    { state: "Vermont",abv:"VT", taxRate: 3},
    { state: "Washington",abv:"WA", taxRate: 2},
    { state: "Wisconsin",abv:"WI", taxRate: 3},
    { state: "West Virginia",abv:"WV", taxRate: 4},
    { state: "Wyoming",abv:"WY", taxRate: 3},

    
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

  const TaxFunc = (currentState) => {
    console.log("current", currentState.state);
    console.log("TaxRates",TaxRates);
    console.log("premium",currentState.premium);
    let premiumDue = 0
    TaxRates.map((state, index) => {
        if(state.state == currentState.state || state.abv == currentState.state){
            console.log(currentState.premium*(state.taxRate/100))
            premiumDue = Math.round((currentState.premium*(state.taxRate/100)+ Number.EPSILON) * 100) / 100
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
            <li>taxes due:{TaxFunc(state)}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default StatesInput;

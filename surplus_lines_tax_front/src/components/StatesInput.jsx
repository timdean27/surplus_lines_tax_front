import React, { useState, useEffect } from "react";

import TaxRates from './TaxRates'


const StatesInput = () => {
  const [newState, setNewState] = useState(null);
  const [newPremium, setNewPremium] = useState(null);
  const [TaxDue, setTaxDue] = useState(null);
  const [StatePremiums, setStatePremiums] = useState([
    { id: 1, state: "New York", premium: 3000 ,taxDue: 0},
    { id: 2, state: "New Jersey", premium: 4000,taxDue: 0 },
    { id: 3, state: "Florida", premium: 5000,taxDue: 0 },
  ]);

  const TaxRatesARY = [
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
    console.log("newPremium",newPremium);

    console.log(TaxDue);
  };

  const handleSubmit = async () => {
    let taxdue = await TaxFunc(newState.State,newPremium.Premium)
    console.log("tax",taxdue,newPremium.Premium)
    // setTaxDue({ ...TaxDue, [taxDue]: TaxFunc(newState.State,newPremium.Premium)});
    setStatePremiums([
      ...StatePremiums,
      {
        id: StatePremiums.length + 1,
        state: newState.State,
        premium: newPremium.Premium,
        taxDue: TaxDue.taxDue
      },
    ]);
    console.log(StatePremiums, "hello");
  };

  console.log(StatePremiums, "StatePremiums");

  const TaxFunc = (currentState, premium) => {
    console.log("current", currentState);
    console.log("TaxRates",TaxRatesARY);
    console.log("premium",premium);
    let premiumDue = 0
    TaxRatesARY.map((state, index) => {
        if(state.state == state || state.abv == state){
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
            <li>taxes due:{}</li>
          </ul>
        ))}
      </div>
      <TaxRates TaxRatesARY={TaxRatesARY}/>
    </div>
  );
};

export default StatesInput;

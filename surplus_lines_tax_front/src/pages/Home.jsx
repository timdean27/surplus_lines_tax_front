import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

import StatesInput from "../components/StatesInput";
import StateTotals from "./StateTotals";

const Home = () => {
  const [StatePremiums, setStatePremiums] = useState([
    { id: 1, state: "New York", premium: 3000, taxesDue: 0 },
    { id: 2, state: "New Jersey", premium: 4000, taxesDue: 0 },
    { id: 3, state: "Florida", premium: 5000, taxesDue: 0 },
  ]);
  return (
    <div>
      <h1>Home Page</h1>
      <p>
        This app will be a one stop to allow business to report surplus lines
        taxes to all states and have required forms auto generated and filled
      </p>
      <div>
        <StatesInput
          StatePremiums={StatePremiums}
          setStatePremiums={setStatePremiums}
        />
      </div>

      <Router>
        <div className="app">
          <Routes>
            <Route
              path="/state/totals"
              element={
                <StateTotals
                  StatePremiums={StatePremiums}
                  setStatePremiums={setStatePremiums}
                />
              }
            />
          </Routes>
        </div>
        <div>
          <Link to="/state/totals">
            <p>Profiles</p>
          </Link>
        </div>
      </Router>
    </div>
  );
};

export default Home;

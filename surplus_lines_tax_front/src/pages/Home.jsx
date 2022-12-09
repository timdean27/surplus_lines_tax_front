import React from "react";
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import StatesInput from "../components/StatesInput";


const Home = ({StatePremiums ,setStatePremiums}) => {

  return (
    <div>
      <h1>Home Page</h1>
      <p>
        This app will be a one stop to allow business to report surplus lines
        taxes to all states and have required forms auto generated and filled
      </p>
      <Link to="/state/totals"><button>State Totals</button></Link>
      
      <div>
        <StatesInput
          StatePremiums={StatePremiums}
          setStatePremiums={setStatePremiums}
        />
      </div>
      


    </div>
  );
};

export default Home;

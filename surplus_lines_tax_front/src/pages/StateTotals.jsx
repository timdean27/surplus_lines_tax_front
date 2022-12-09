import React from 'react'
import { useState , useEffect} from 'react'
import { useNavigate } from "react-router-dom";
const StateTotals = ({StatePremiums, setStatePremiums}) => {
    console.log("state premiums in Totals page", StatePremiums)
    const navigate = useNavigate();
    const [stateTotal, setStateTotal] = useState(null);

    let hash = {}
    
    const setStateTotalFucntion =()=> { 

    for(let i = 0; i < StatePremiums.length; i++){
      console.log(StatePremiums[i].state)
      
      //if hash already exists push nums[i] into key
      if(hash[StatePremiums[i].state]){
        hash[StatePremiums[i].state].premium +=(StatePremiums[i].premium)
        hash[StatePremiums[i].state].taxesDue +=(StatePremiums[i].taxesDue)
          console.log(StatePremiums[i].state)
      }
      //else if hash does not exist set hash name with nums[i] = to nums[i]
      else{
        hash[StatePremiums[i].state] = { id: StatePremiums[i].id, state: StatePremiums[i].state, premium: StatePremiums[i].premium, taxesDue: StatePremiums[i].taxesDue }
        console.log(StatePremiums[i].state)
      }
      console.log("hash",hash)
      setStateTotal(hash)
    }


  console.log("stateTotal", stateTotal)
}

useEffect(() => {
  setStateTotalFucntion()
},[]);
    
  return (
    <div>
    <h1>State Totals Page</h1>
    <button onClick={() => navigate(-1)}>Back</button>
    <div>
    {/* {stateTotal.map((state, index) => (
      <ul key={index}>
        <li>ID:{state.id}</li>
        <li>State:{state.state}</li>
        <li>Premium:{state.premium}</li>
        <li>taxes due:{state.taxesDue}</li>
      </ul>
    ))} */}
    </div>
    </div>
  )
}

export default StateTotals
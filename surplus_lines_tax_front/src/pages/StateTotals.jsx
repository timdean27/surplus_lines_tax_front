import React from 'react'
import { useState , useEffect} from 'react'
const StateTotals = ({StatePremiums, setStatePremiums}) => {
    console.log("state premiums in Totals page", StatePremiums)

    const [stateTotal, setStateTotal] = useState(null);

    let hash = {}
    const setStateTotalFucntion = ()=> {
    for(let i = 0; i < StatePremiums.length; i++){
      console.log(StatePremiums[i].state)
      
      //if hash already exists push nums[i] into key
      if(hash[StatePremiums[i].state]){
        hash[StatePremiums[i].state].premium = hash[StatePremiums[i].state].premium+(StatePremiums[i].premium)
          console.log(StatePremiums[i].state)
      }
      //else if hash does not exist set hash name with nums[i] = to nums[i]
      else{
        hash[StatePremiums[i].state] = { id: StatePremiums[i].id, state: StatePremiums[i].state, premium: StatePremiums[i].premium, taxesDue: 0 }
        console.log(StatePremiums[i].state)
      }
      console.log("hash",hash)
      setStateTotal(hash)
      console.log("stateTotal", stateTotal)
  }
}

useEffect(() => {
  setStateTotalFucntion()
},[hash]);
    
  return (
    <div>
    {/* {stateTotal.map(state, index) => (
      <ul key={index}>
        <li>ID:{state.id}</li>
        <li>State:{state.state}</li>
        <li>City:{state.city}</li>
        <li>Zip:{state.zipcode}</li>
        <li>Premium:{state.premium}</li>
        <li>taxes due:{state.taxesDue}</li>
      </ul>
    )} */}
    </div>
  )
}

export default StateTotals
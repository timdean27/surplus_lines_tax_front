import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import StateTotals from "./pages/StateTotals";

function App() {
  const [StatePremiums, setStatePremiums] = useState([
    { id: 1, state: "New York", premium: 3000, taxesDue: 0 },
    { id: 2, state: "New Jersey", premium: 4000, taxesDue: 0 },
    { id: 3, state: "Florida", premium: 5000, taxesDue: 0 },
    { id: 4, state: "New York", premium: 3000, taxesDue: 0 },
  ]);
  return (


    <div className="app">
          <Router>
        <div className="app">
          <Routes>
          <Route
            path="/"
            element={<Home
              StatePremiums={StatePremiums}
              setStatePremiums={setStatePremiums}
            />}
          />
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
      </Router>
   
     </div>
  )
}

export default App

import React from 'react'
import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StatesInput from '../components/StatesInput'
import StateTotals from './StateTotals'
const Home = () => {
  return (
    <div>
    <h1>Home Page</h1>
    <p>This app will be a one stop to allow business to report surplus lines taxes to all states and have required forms auto generated and filled</p>
    <div><StatesInput/></div>
    <Router>
    <div className="app">
      <Routes>
        <Route path="/state/totals" element={<StateTotals/>}/>
      </Routes>
    </div>
    </Router>
    </div>
  )
}

export default Home
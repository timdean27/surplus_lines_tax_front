import React from 'react'
import { useState } from 'react'

import StatesInput from '../components/StatesInput'

const Home = () => {
  return (
    <div>
    <h1>Home Page</h1>
    <p>This app will be a one stop to allow business to report surplus lines taxes to all states and have required forms auto generated and filled</p>
    <div><StatesInput/></div>
    </div>
  )
}

export default Home
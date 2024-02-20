import { useEffect, useState } from "react";
import '../Sass/Landing.scss'
import axios from 'axios';
import Box from './Landingbox'

function Landing({setCurrentPage}) {

  return (
    <div className="App">
      <div className="landing frame">
        <div className="headbar">
          <span className="logout"
          onClick={() => setCurrentPage('Login')}
          >Logout</span>
          <div class="Container Landing-Header">
            <span className="Landing-Heading">Welcome Back!</span>
          </div>
        </div>
        <div className="landing Center">
          <div className="quotes">
            <Box context={'Quote'}/>
          </div>
          <div className="orders">
            <Box context={'Order'}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing;
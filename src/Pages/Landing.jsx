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
          <div className="Container Landing-Logo">
          <img className="Logoimg" src='VFlogo.png'/>
          </div>
          <div class="Container Landing-Header">
            <span className="Landing-Heading">Welcome Back!</span>
          </div>
        </div>
        <div className="landing-Center">
          <div className="recent quotes">
            <Box context={'Quote'}/>
          </div>
          <div className="recent orders">

          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing;
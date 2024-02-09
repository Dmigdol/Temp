import { useEffect, useState } from "react";
import '../Sass/Landing.scss'
import axios from 'axios';



function App() {

  return (
    <div className="App">
      <div className="Landing-Frame">
        <div className="Logo" />
        <span className="Heading"> Sign In</span>
        <div className="Email-Entry"></div>
        <div className="Password-Entry"></div>
        <button className="Login"></button>
        <p className="Forgot-Login"></p>
      </div>
    </div>
  );
}

export default App;

{/* <button className='test'
          onClick={() => {
            axios.get(`http://localhost:3000/api/test`)
              .then(function (response) {
                //handle success
                console.log(response);
              })
              .catch(function (error) {
                //handle error
                console.log('***ERROR*** ',error)
              })
              .finally(() => {
                console.log('request finished')
              });
          }}
          >
            Test
          </button> */}
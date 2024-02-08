import { useEffect, useState } from "react";
import axios from 'axios';



function App() {

  return (
    <div className="App">
          <button
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
          </button>
    </div>
  );
}

export default App;

import React from 'react';
import { useEffect, useState } from "react";
import Login from './Login';
import Landing from './Landing';
import QuoteBuilder from './QuoteBuilder'
import '../Sass/App.scss'

function App() {

  const [currentPage, setCurrentPage] = useState('Login');

  console.log(currentPage)

  function renderSwitch(param) {
    switch(param) {
      case 'Login':
        return <Login setCurrentPage={setCurrentPage}/>;
        break;
      case 'Landing' :
        return <Landing setCurrentPage={setCurrentPage}/> ;
        break;
      case 'QuoteBuilder' :
        return <QuoteBuilder setCurrentPage={setCurrentPage}/> ;
        break;
      default: return <div>{`Error in Switch Statement: Trying to load ` + param}</div>
        break;
    }
  }


  return (
    <div className='app'>
      {renderSwitch(currentPage)}
    </div>
  )

}

export default App;
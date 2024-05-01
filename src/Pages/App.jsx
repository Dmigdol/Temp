import React from 'react';
import { useEffect, useState, useRef } from "react";
import Login from './Login';
import Landing from './Landing';
import QuoteBuilder from './QuoteBuilder'
import NewRow from './NewRow'
import '../Sass/App.scss'


function App() {

  const [currentPage, setCurrentPage] = useState('Login');
  const [slide, setSlide] = useState(0)
  const [optShow, setOptShow] = useState(false)

  const wrapperRef = useRef(null);


  console.log(currentPage)

  function renderSwitch(param) {
    switch(param) {
      case 'Login':
        return <Login setCurrentPage={setCurrentPage}/>;
        break;
      case 'Landing' :
        return <Landing ref={wrapperRef} setCurrentPage={setCurrentPage} setOptShow={setOptShow} optShow={optShow}/> ;
        break;
      case 'QuoteBuilder' :
        return <QuoteBuilder setCurrentPage={setCurrentPage}/>;
        break;
      default: return <div>{`Error in Switch Statement: Trying to load ` + param}</div>
        break;
    }
  }


  return (
    <div className='app' ref={wrapperRef}>
      {renderSwitch(currentPage)}
    </div>
  )

}

export default App;
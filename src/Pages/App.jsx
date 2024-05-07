import React from 'react';
import { useEffect, useState, useRef } from "react";
import Login from './Login';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Landing from './Landing';
import QuoteBuilder from './QuoteBuilder'
import NewRow from './NewRow'
import '../Sass/App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [currentPage, setCurrentPage] = useState(['Login']);
  const [slide, setSlide] = useState(0)
  const [optShow, setOptShow] = useState(false)

  const wrapperRef = useRef(null);


  console.log(currentPage)

  function renderSwitch(param) {
    switch(param[0]) {
      case 'Login':
        return <Login setCurrentPage={setCurrentPage} data={param[1]}/>;
        break;
      case 'Landing' :
        return <Landing ref={wrapperRef} setCurrentPage={setCurrentPage} setOptShow={setOptShow} optShow={optShow} data={param[1]}/> ;
        break;
      case 'QuoteBuilder' :
        return <QuoteBuilder setCurrentPage={setCurrentPage} data={param[1]}/>;
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
import { useEffect, useState } from "react";
import '../Sass/Landingbox.scss';
import RenderRecent from './Components/RenderRecent'
import axios from 'axios';
import testData from './Components/testData.js'


/*
  Next step is to set up viewmore button to send a request to route, and return
  the testdata
*/

function box({context, recent}) {

  // might not need due to fetch function in parent
  const viewMore = () => {
    axios.get(`http://localhost:3000/api/test`)
    .then(response => {
      console.log(response)
      return (response);
    })
    .catch((err) => {
      console.log('error in axios get ', err)
    })
  }

  return (
    <div className='recent'>
      <div className='headbar box'>
        <p className='headbar-text'>Recent {context}s</p>
      </div>
      <span className='Add-Tooltip'>Create new {context}</span>
      <div className='Add button'
      onClick={() => alert(`New ${context} button clicked.`)}
      >
        <span className='Add-text'>+</span>
      </div>
      <div className='large-box'>
        <div className='entry-container'>
          <RenderRecent id={context} context={context} testData={testData} recent={recent}/>
        </div>
      </div>
      <div className='bottombar box'>
        <span className='Viewmore'
        onClick={() => {
          viewMore()
        }}
        >View more</span>
      </div>
    </div>
  )
}

export default box;

/*
alert(`View more ${context}s clicked`)
<div className='headbar box'>
        <p className='headbar-text'>Recent {context}s</p>
      </div>
      <div className='info-box'>
      <div className='Name-container'>
        <ul className='number-list'>
          <li className='list-entry'>11232</li>
          <li className='list-entry'>24312</li>
          <li className='list-entry'>34322</li>
          <li className='list-entry'>43422</li>
          <li className='list-entry'>54324</li>
        </ul>
      </div>
      <div className='Name-container'>
        <ul className='name-list'>
          <li className='list-entry'>Dill</li>
          <li className='list-entry'>Joe</li>
          <li className='list-entry'>Trevor</li>
          <li className='list-entry'>Levi</li>
          <li className='list-entry'>Paul</li>
        </ul>
      </div>
      </div>
      <div className='bottombar box'>
        <span className='Viewmore'>View more</span>
      </div>
*/
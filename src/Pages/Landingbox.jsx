import { useEffect, useState } from "react";
import '../Sass/Landingbox.scss';
import axios from 'axios';

function box({context}) {

  return (
    <div className='recent'>
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
    </div>
  )
}

export default box;
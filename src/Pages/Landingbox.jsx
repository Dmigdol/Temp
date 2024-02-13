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
        <ul className='number-list'>
          <li className='list-entry'>test</li>
          <li className='list-entry'>test</li>
          <li className='list-entry'>test</li>
          <li className='list-entry'>test</li>
          <li className='list-entry'>test</li>
        </ul>
        <ul className='name-list'>
          <li className='list-entry'>test</li>
          <li className='list-entry'>test</li>
          <li className='list-entry'>test</li>
          <li className='list-entry'>test</li>
          <li className='list-entry'>test</li>
        </ul>
      </div>
      <div className='bottombar'>
        <span className='Viewmore'></span>
      </div>
    </div>
  )
}

export default box;
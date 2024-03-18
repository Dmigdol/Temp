import { useEffect, useState } from "react";
import '../Sass/Landingbox.scss';
import RenderRecent from './Components/RenderRecent'
import axios from 'axios';
import testData from './Components/testData.js'

function landingRow({current, data}) {


  return (
    <div className='row-container'>
      <RenderRecent id={current} current={current} data={data}/>
    </div>
  )
}

export default landingRow
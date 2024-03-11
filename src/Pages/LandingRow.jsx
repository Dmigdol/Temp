import { useEffect, useState } from "react";
import '../Sass/Landingbox.scss';
import RenderRecent from './Components/RenderRecent'
import axios from 'axios';
import testData from './Components/testData.js'

function landingRow({context, recent, setCurrentPage}) {

  return (
    <div className='row-container'>
      <RenderRecent id={context} context={context} testData={testData} recent={recent}/>
      <RenderRecent id={context} context={context} testData={testData} recent={recent}/>
      <RenderRecent id={context} context={context} testData={testData} recent={recent}/>
      <RenderRecent id={context} context={context} testData={testData} recent={recent}/>
    </div>
  )
}

export default landingRow
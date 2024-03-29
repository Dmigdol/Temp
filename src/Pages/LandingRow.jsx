import { useEffect, useState } from "react";
import '../Sass/Landingbox.scss';
import RenderRecent from './Components/RenderRecent'
import axios from 'axios';

function LandingRow({current, data, optShow, setOptShow, wrapperRef}) {



  return (
    <div className='row-container'>
      <RenderRecent wrapperRef={wrapperRef} id={current} current={current} data={data} setOptShow={setOptShow} optShow={optShow}/>
    </div>
  )
}

export default LandingRow
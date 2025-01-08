import { useEffect, useState } from "react";
import '../Sass/Landingbox.scss';
import RenderRecent from './Components/RenderRecent'
import axios from 'axios';

function LandingRow({current, data, optShow, setOptShow, wrapperRef, setCurrentPage, setQuoteContext, quoteContext, filteredData, keyword}) {



  return (
    <div className='row-container'>
      <RenderRecent wrapperRef={wrapperRef} setCurrentPage={setCurrentPage} id={current} current={current} data={data} keyword={keyword}
      filteredData={filteredData} setQuoteContext={setQuoteContext} quoteContext={quoteContext} setOptShow={setOptShow} optShow={optShow}/>
    </div>
  )
}

export default LandingRow
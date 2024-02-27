import { useEffect, useState } from "react";

function QuoteBuilder({setCurrentPage}) {

  return(
    <div className='quote container'>
      <div className='quote-info'>
        <span className='quote-info-text'></span>
      </div>
      <div className='rows-container'>
        <div className='rows header'>
          {/* Each Row Rendered Here as its own div*/}
        </div>
      </div>
      <div className='NewRow button'>
      </div>
    </div>
  )
}

export default QuoteBuilder;
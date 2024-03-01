import { useEffect, useState } from "react";
import '../Sass/QuoteBuilder.scss'

function QuoteBuilder({setCurrentPage}) {

  let context = {

  }

  return(
    <div className='quote framing'>
      <div className='quote-header'>
      </div>
      <div className='quote-info'>
        <div className='quote-info-header'>
          <span className='Line-num quote-top'>Line #</span>
          <span className='Item-ID quote-top'>Item ID</span>
          <span className='Frame-type quote-top'>Frame</span>
          <span className='Hinge quote-top'>Hinge</span>
          <span className='Item-Description quote-top'>Description</span>
          <span className='Qty quote-top'>Qty</span>
        </div>
      </div>
      <div className='rows-container'>
        <div className='rows header'>
          {/* Each Row Rendered Here as its own div*/}
        </div>
      </div>
      <div className='NewRow buttonn'>
      </div>
    </div>
  )
}

export default QuoteBuilder;

/*
          <span className='Size quote-top'>{`Size Width x Height`}</span>
          <span className='Frame-Types quote-top'>Frame Type</span>
          <span className='Hinge-Type quote-top'>Hinge Type</span>
          <span className='Strike-Type quote-top'>Strike Type</span>
          <span className='Strike-Height quote-top'>Strike Height</span>
          <span className='Closer-Prep quote-top'>Closer Prep</span>
          <span className='Fire-Rating quote-top'>Fire Rating</span>
          <span className='Handling quote-top'>Handling</span>
*/
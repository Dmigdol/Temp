import { useEffect, useState } from "react";
import '../Sass/QuoteBuilder.scss'
import RenderRow from './Components/RenderRow'

function QuoteBuilder({setCurrentPage}) {

  const [Quoteinfo, setQuoteInfo] = useState({})

  class Row {
    constructor(num, id, frame, hinge, desc, qty) {
      this.num = num;
      this.id = id;
      this.frame = frame;
      this.hinge = hinge;
      this.desc = desc;
      this.qty = qty;
    }
  }


  const newRow = (obj) => {
    const num = new Row(obj.num, obj.id, obj.frame, obj.hinge, obj.desc, obj.qty)

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
      <div className='rows-container'>
          <RenderRow />
      </div>
      </div>
      <div className='NewRow button'
      onClick={()=> {

      }}
      >
        Add Row
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
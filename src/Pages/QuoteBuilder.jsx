import { useEffect, useState } from "react";
import '../Sass/QuoteBuilder.scss'
import RenderRow from './Components/RenderRow'

function QuoteBuilder({setCurrentPage}) {

  const [Quoterows, setQuoteRows] = useState([])

  /*
      NEXT STEP AFTER RETURNING FROM 2/29
      SET UP BASIC INCREMENTING SYSTEM WHERE EVERY CLICK OF ADD ROW
      WILL INCREASE NUMBER AND CREATE A NEW ROW IN THE QUOTEROWS STATE

      LINE 59 WILL NEED TO BE CHANGED TO A FOR EACH FUNCTION
  */


  const test = {
    num: 1,
    id: 1001,
    frame: 'Standard',
    hinge: '(3) Tectus 340 3D',
    desc: `36"x96" T-Strike @ 35" up`,
    qty: 1
  }

  class Row {
    constructor(num, id, frame, hinge, desc, qty) {
      this.num = Quoterows.length + 1;
      this.id = id;
      this.frame = frame;
      this.hinge = hinge;
      this.desc = desc;
      this.qty = qty;
    }
  }


  const newRow = (obj) => {
    const num = new Row(obj.num, obj.id, obj.frame, obj.hinge, obj.desc, obj.qty);
    Quoterows.length > 0 ? setQuoteRows([...Quoterows, num]) : setQuoteRows([num]);
  }


  return(
    <div className='quote framing'>
      <div className='quote-header'>
      </div>
      <div className='quote-info'>
        <div className='quote-info-header'>
          <span className='Line-num quote-top'>#</span>
          <span className='Item-ID quote-top'>Item ID</span>
          <span className='Frame-type quote-top'>Frame</span>
          <span className='Hinge quote-top'>Hinge</span>
          <span className='Item-Description quote-top'>Description</span>
          <span className='Qty quote-top'>Qty</span>
        </div>
        <div className='rows-container'>
            <RenderRow rows={Quoterows}/>
        </div>
      </div>
      <div className='NewRow button'
      onClick={()=> {
        newRow(test)
        console.log(Quoterows)
      }}
      >
        Add Row
      </div>
    </div>
  )
}

export default QuoteBuilder;

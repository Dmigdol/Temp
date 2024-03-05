import { useEffect, useState } from "react";
import '../Sass/QuoteBuilder.scss'
import RenderRow from './Components/RenderRow'
import QuoteTop from './QuoteTop'
import NewRow from './NewRow'

function QuoteBuilder({setCurrentPage}) {

  const [quoterows, setQuoteRows] = useState([])
  const [slide, setSlide] = useState(0)

  /*
      NEXT STEP AFTER RETURNING FROM 2/29
      SET UP BASIC INCREMENTING SYSTEM WHERE EVERY CLICK OF ADD ROW
      WILL INCREASE NUMBER AND CREATE A NEW ROW IN THE QUOTEROWS STATE

      LINE 59 WILL NEED TO BE CHANGED TO A FOR EACH FUNCTION
  */


  const test = {
    num: 1,
    id: 1001,
    height: 96,
    width: 36,
    frame: 'Standard',
    hinge: '(3) Tectus 340 3D',
    qty: 1
  }

  class Row {
    constructor(num, id, height, width, frame, hinge, qty) {
      this.num = quoterows.length + 1;
      this.id = id;
      this.height = height;
      this.width = width;
      this.frame = frame;
      this.hinge = hinge;
      this.qty = qty;
    }
  }


  const newRow = (obj) => {
    const num = new Row(obj.num, obj.id, obj.height,obj.width, obj.frame, obj.hinge, obj.qty);
    quoterows.length > 0 ? setQuoteRows([...quoterows, num]) : setQuoteRows([num]);
  }

  const slideCheck = () => {
    if(slide) {
      return <NewRow slide={slide} />
    }
  }

  return(
    <div className='QuotePage'>
      {slideCheck()}
      <div className={slide ? 'quote init' : 'quote'}>
        <div className='quote-header'>
          <QuoteTop className='QT'/>
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
            {quoterows.map((current) => {
              console.log('****current', current)
              return(
                <RenderRow rows={quoterows} curr={current}/>
              )
            })}
          </div>
        </div>
        <div className='NewRow button'
        onClick={()=> {
          newRow(test)
          setSlide(!slide)
          console.log(quoterows)
        }}
        >New Row</div>
      </div>
    </div>
  )
}

export default QuoteBuilder;

import { useEffect, useState } from "react";
import '../Sass/QuoteBuilder.scss'
import RenderRow from './Components/RenderRow'
import QuoteTop from './QuoteTop'
import NewRow from './NewRow'

function QuoteBuilder({setCurrentPage}) {

  const [quoterows, setQuoteRows] = useState([])
  const [slide, setSlide] = useState(0)

 const test = {
   num: 1,
   id: 1001,
   height: 96,
   width: 36,
   frame: 'Standard',
   strike: [4, 2],
   hinge: [4, 2],
   qty: 1
 }

 class Row {
   constructor(num, id, height, width, frame, strike, hinge, desc, qty) {
     this.num = quoterows.length + 1;
     this.id = id;
     this.height = height;
     this.width = width;
     this.frame = frame;
     this.strike = strike;
     this.hinge = hinge;
     this.desc = desc;
     this.qty = qty;
    }

    /*
      Placeholder prices for parts
    */

      calcPrice() {
        return (((this.width + (2*(this.height)) * 0.34) + (this.hinge[1] * (this.hinge[0])) + (this.strike[1]*(this.strike[0])) + 10) * this.qty)
      }
  }

  const newRow = (obj) => {
    const num = new Row();
    return num;
  }

  const addRow = (obj) => {
    const num = new Row(obj.num, obj.id, obj.height, obj.width, obj.frame, obj.strike, obj.hinge, obj.desc, obj.qty);
    console.log('added row', num);
    quoterows.length > 0 ? setQuoteRows([...quoterows, num]) : setQuoteRows([num]);
  }

  const slideCheck = () => {
    if(slide) {
      return <NewRow slide={slide} rowObj={newRow()} addRow={addRow} setSlide={setSlide}/>
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
              return(
                <RenderRow rows={quoterows} key={current.num} curr={current} addRow={addRow} setSlide={setSlide}/>
              )
            })}
          </div>
        </div>
        <div className='NewRow button'
        onClick={()=> {
          setSlide(!slide)
        }}
        >New Row</div>
      </div>
    </div>
  )
}

export default QuoteBuilder;

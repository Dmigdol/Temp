import '../Sass/Quote.scss';
import QuoteList from './Components/QuoteComponents/QuoteList.jsx'
import QuoteInput from './Components/QuoteComponents/QuoteInput.jsx'
import Quote2Canvas from './PdfRender/Quote2Canvas.jsx'
import { useEffect, useState } from "react";
import RenderRow from './Components/RenderRow'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import QuoteTop from './QuoteTop.jsx'
import QuoteFooter from './Components/QuoteComponents/QuoteFooter.jsx'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'


function Quote({setCurrentPage, data, quoteContext, setQuoteContext}) {


  const [quoterows, setQuoteRows] = useState([])
  const [slide, setSlide] = useState(0)
  const [show, setShow] = useState(false)
  const [inputs, setInputs] = useState({frame: '', numDoors: 'single', strikeHeight: ''})
  const [inputContext, setInputContext] = useState('')
  const [currEntry, setCurrEntry] = useState()
  const [pdfShow, setPdfShow] = useState(false)


  console.log('QUOTE ROWS', quoterows)


  useEffect(() => {
    console.log('UE DATA', data)
    if (data) {
      setQuoteRows(data.items)
    }
  },[])


  class QuoteRow {
    constructor(num, tag, room, height, width, frame, numDoors, strike, strikeHeight, handing, deadBolt, closer, fireRating, hinge, desc, qty) {
      this.num = quoterows.length + 1;
      this.tag = tag;
      this.room = room;
      this.height = height;
      this.width = width;
      this.frame = frame;
      this.numDoors = numDoors;
      this.strike = strike;
      this.strikeHeight = strikeHeight
      this.handing = handing
      this.deadBolt = deadBolt
      this.closer = closer;
      this.fireRating = fireRating;
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
    const num = new QuoteRow();
    return num;
  }

  const addRow = (obj) => {
    const num = new QuoteRow(obj.num, obj.tag, obj.room, obj.height, obj.width, obj.frame, obj.numDoors, obj.strike, obj.strikeHeight, obj.handing, obj.deadBolt, obj.closer, obj.fireRating, obj.hinge, obj.desc, obj.qty);
    quoterows.length > 0 ? setQuoteRows([...quoterows, num]) : setQuoteRows([num]);
  }

  const slideCheck = () => {
    if(slide) {
      setShow(true);
      return
    }
  }

  function printDocument() {
    const input = document.getElementById('Quote');
    html2canvas(input, {
      width: 1980,
      height: 1080,
      scale: 0.8
    })
      .then((canvas) => {
        const newDate = new Date().toLocaleDateString('en-CA');
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({orientation: 'l'});
        pdf.addImage(imgData, 'JPEG', 10, 10);
        pdf.save(`${data.customer.company_name} ${newDate}`);
      })
    ;
  }

  return (
    <>
      {show ?
          <QuoteInput className='input-container' data={data} setShow={setShow}
          setSlide={setSlide} slide={slide} rowObj={newRow()} addRow={addRow} quoterows={quoterows} setQuoteRows={setQuoteRows}
          show={show} inputs={inputs} setInputs={setInputs} inputContext={inputContext}
          setInputContext={setInputContext} setCurrEntry={setCurrEntry} currEntry={currEntry}/>
      : ''}
      <Container id='Quote'  className={slide ? 'full-container init' : 'full-container'}>
        <Row className='header-row'>
          <Col>
          <QuoteTop  data={data}/>
          </Col>
        </Row>
        <QuoteList rows={quoterows} addRow={addRow} slide={slide} setShow={setShow}
        inputs={inputs} setInputs={setInputs} setSlide={setSlide} inputContext={inputContext}
        setInputContext={setInputContext} setCurrEntry={setCurrEntry} currEntry={currEntry} setQuoteContext={setQuoteContext} quoteContext={quoteContext}/>
      </Container >
      <QuoteFooter slide={slide} printDocument={printDocument} setPdfShow={setPdfShow} setSlide={setSlide} setShow={setShow} data={data} quoterows={quoterows} quoteContext={quoteContext}/>
    </>
  )

}

export default Quote;
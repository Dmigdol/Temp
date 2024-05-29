import '../Sass/Quote.scss';
import QuoteList from './Components/QuoteComponents/QuoteList.jsx'
import QuoteInput from './Components/QuoteComponents/QuoteInput.jsx'
import { useEffect, useState } from "react";
import RenderRow from './Components/RenderRow'
import NewRowModal from './Components/NewRowModal.jsx'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import QuoteTop from './QuoteTop.jsx'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Quote({setCurrentPage, data}) {

  const [quoterows, setQuoteRows] = useState([])
  const [slide, setSlide] = useState(0)
  const [show, setShow] = useState(false)
  const [inputs, setInputs] = useState({frame: 'standard', numDoors: '', strikeHeight: ''})

  console.log('QUOTE ROWS', quoterows)


  class QuoteRow {
    constructor(num, tag, room, height, width, frame, strike, hinge, desc, qty) {
      this.num = quoterows.length + 1;
      this.tag = tag;
      this.room = room;
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
    const num = new QuoteRow();
    return num;
  }

  const addRow = (obj) => {
    const num = new QuoteRow(obj.num, obj.tag, obj.room, obj.height, obj.width, obj.frame, obj.strike, obj.hinge, obj.desc, obj.qty);
    quoterows.length > 0 ? setQuoteRows([...quoterows, num]) : setQuoteRows([num]);
  }

  const slideCheck = () => {
    if(slide) {
      setShow(true);
      return
    }
  }

  return (
    <>
      <QuoteInput className='input-container' etShow={setShow} setSlide={setSlide} slide={slide} rowObj={newRow()} addRow={addRow} quoterows={quoterows} setQuoteRows={setQuoteRows} show={show} inputs={inputs} setInputs={setInputs}/>
      <Container  className={slide ? 'full-container init' : 'full-container'}>
        {/* <NewRowModal setShow={setShow} setSlide={setSlide} slide={slide} rowObj={newRow()} addRow={addRow} quoterows={quoterows} setQuoteRows={setQuoteRows} show={show} inputs={inputs} setInputs={setInputs}/> */}
        <Row className='header-row'>
          <Col md={8}>
          <QuoteTop data={data}/>
          </Col>
        </Row>
        <QuoteList rows={quoterows} addRow={addRow} slide={slide} setShow={setShow} inputs={inputs} setInputs={setInputs} setSlide={setSlide}/>
      </Container >
    </>
  )

}

export default Quote;
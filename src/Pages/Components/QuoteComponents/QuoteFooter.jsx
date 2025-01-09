import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar';
import './QuoteComponentsSCSS/QuoteFooter.scss'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import axios from 'axios';



function quoteFooter({slide, printDocument, setShow, setSlide, data, quoterows, quoteContext, setPdfShow, setCurrentPage}) {
  console.log('footer data', data)


  const url = 'http://localhost:3000/newQuote'


  const handleNewOrder = () => {
    axios.post('http://localhost:3000/newQuote', {
      items: quoterows,
      data: data
    })
    .then(res => {
      console.log('resolution for upload', res)
    })
    .catch((err) => {
      console.log('error upload quote', err)
    })
    setCurrentPage(['Landing'])
  }

  const handleUpdateOrder = () => {
    axios.put('http://localhost:3000/update', {
      items: quoterows,
      data: data
    })
    .then(res => {
      console.log('resolution for update', res)
    })
    .catch((err) => {
      console.log('error update quote', err)
    })
    setCurrentPage(['Landing'])
  }

  const handleDraft = () => {
    axios.post('http://localhost:3000/draft', {
      items: quoterows,
      data: data
    })
    .then(res => {
      console.log('resolution for draft', res)
    })
    .catch((err) => {
      console.log('error draft quote', err)
    })
  }


  return (
    <Navbar  expand='lg' fixed='bottom' className='footer-whole'>
      <Container className='foot-body'>
        {quoteContext === 'new' ?
          <Button
            onClick={handleNewOrder}
          >Submit Order</Button>
          :
          <Button
            onClick={handleUpdateOrder}
          >Update Order</Button>
        }
        <Button variant="outline-primary" className='draft-button'
          onClick={handleDraft}
        >
          Save Draft</Button>
        <Button className='new-button'
          aria-expanded={slide}
          onClick={()=> {
            console.log('New Row test', data)
            setSlide(!slide)
            setShow(true)
          }}
        >New Row</Button>
        <Button className='new-button'
          aria-expanded={slide}
          onClick={()=> {
            printDocument()
          }}
          >
          PDF
        </Button>
      </Container>
    </Navbar>
  )
}

export default quoteFooter
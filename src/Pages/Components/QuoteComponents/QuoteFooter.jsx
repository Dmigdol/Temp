import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar';
import './QuoteComponentsSCSS/QuoteFooter.scss'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

function quoteFooter({slide, setShow, setSlide,}) {

  const handleOrderSubmit = () => {

  }


  return (
    <Navbar  expand='lg' fixed='bottom' className='footer-whole'>
      <Container className='foot-body'>
        <Button>Submit Order</Button>
        <Button variant="outline-primary" className='draft-button'>Save Draft</Button>
        <Button className='new-button'
          aria-expanded={slide}
          onClick={()=> {
            setSlide(!slide)
            setShow(true)
          }}
        >New Row</Button>
      </Container>
    </Navbar>
  )
}

export default quoteFooter
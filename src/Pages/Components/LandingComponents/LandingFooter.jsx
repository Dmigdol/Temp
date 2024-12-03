import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar';
import './LcSCSS/LandingFooter.scss'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import axios from 'axios';

function landingFooter({customer, setCurrentPage}) {

  // Goal is to take current account info and create a new quote sheet for them

  const handleNewQuote = () => {
    console.log('clicked')
    customer.items = []
    setCurrentPage(['QuoteBuilder', customer])
  }

  return (
    <Navbar expand='lg' fixed='bottom' className='landing-footer-whole'>
      <Container classname='landing-footer-body'>
        <Row className='landing-footer-row'>
          <Button classname='new-quote-btn'
          onClick={handleNewQuote}>
            New Quote
          </Button>
        </Row>
      </Container>
    </Navbar>
  )
}

export default landingFooter;
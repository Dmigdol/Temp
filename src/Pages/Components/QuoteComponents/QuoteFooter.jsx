import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar';
import './QuoteComponentsSCSS/QuoteFooter.scss'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import axios from 'axios';


function quoteFooter({slide, setShow, setSlide, data, quoterows}) {
  console.log('footer data', data)

  const handleOrderUpdate = () => {
    axios.post(`http://localhost:3000/api/updateQuote?items=${data.items}&id=${data.id}`, {
      items: quoterows,
      id: data.id
    })
    .then(res => {
      console.log('resolution for update', res)
    })
    .catch((err) => {
      console.log('error update quote', err)
    })
  }


  return (
    <Navbar  expand='lg' fixed='bottom' className='footer-whole'>
      <Container className='foot-body'>
        <Button
          onClick={handleOrderUpdate}
        >Submit Order</Button>
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
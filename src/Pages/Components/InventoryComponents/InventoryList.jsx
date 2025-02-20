import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function InventoryList({data}) {

  return (
      <Container className='modal-body'>
        <Row className='add-header-container'>
          <Col className='comp-add-header header'>
            Serial
          </Col>
        </Row>
        <Row>
          <Col className='add-txt'>{data.serial}</Col>
          <Col md={1}>
          </Col>
        </Row>
        <Row className='email-header-container'>
          <Col className='comp-email-header header'>
            Total amount
          </Col>
        </Row>
        <Row className='email-txt'>
          <Col>{data.amount}</Col>
        </Row>
        <Row className='phone-header-container'>
          <Col className='comp-phone-header header'>
            Price per unit
          </Col>
        </Row>
        <Row className='phone-txt'>
          <Col>{data.ppu}</Col>
        </Row>
      </Container>
  )
}


export default InventoryList;
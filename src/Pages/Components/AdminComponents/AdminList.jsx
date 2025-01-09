import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function AdminList({data}) {

  return (
      <Container className='modal-body'>
        <Row className='add-header-container'>
          <Col className='comp-add-header header'>
            Shipping Address
          </Col>
        </Row>
        <Row>
          <Col className='add-txt'>{data.shipping_address}</Col>
          <Col md={1}>
          </Col>
        </Row>
        <Row className='email-header-container'>
          <Col className='comp-email-header header'>
            Company Email
          </Col>
        </Row>
        <Row className='email-txt'>
          <Col>{data.email}</Col>
        </Row>
        <Row className='phone-header-container'>
          <Col className='comp-phone-header header'>
            Company Phone
          </Col>
        </Row>
        <Row className='phone-txt'>
          <Col md={9}>{data.phone}</Col>
          <Col>Status: {data.status}</Col>
        </Row>
      </Container>
  )
}


export default AdminList;
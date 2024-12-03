import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function ListModalData({data}) {

  return (
      <Container className='modal-body'>
        <Row className='add-header-container'>
          <Col className='comp-add-header header'>
            Quote ID
          </Col>
        </Row>
        <Row>
          <Col className='add-txt'>{data.quote_id.slice(0,5)}</Col>
          <Col md={1}>
          </Col>
        </Row>
        <Row className='email-header-container'>
          <Col className='comp-email-header header'>
            Number of Items
          </Col>
        </Row>
        <Row className='email-txt'>
          <Col>Placeholder</Col>
        </Row>
        <Row className='phone-header-container'>
          <Col className='comp-phone-header header'>
            Date Created
          </Col>
        </Row>
        <Row className='phone-txt'>
          <Col md={9}>{data.created_at}</Col>
          <Col>Status: {data.status}</Col>
        </Row>
      </Container>
  )
}


export default ListModalData;
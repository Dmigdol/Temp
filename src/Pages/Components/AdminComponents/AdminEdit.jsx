import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import { useState } from 'react';


function AdminEdit({data, inputs, setInputs}) {


  const handleInputChange = (e) => {
    const { name, value } = e.target
    setInputs({...inputs, [name]: value})
  }

  const submitForm = (e) => {
    e.preventDefault()
    const payload = inputs;
  }

  return(
    <Container className='modal-body'>
      <Form onSubmit={submitForm}>
        <Row className='add-header-container'>
          <Col className='comp-add-header header'>
            Shipping Address
          </Col>
        </Row>
        <Row>
          <Form.Group as={Col} md={8}>
            <Form.Control value={inputs.shipping_address} placeholder={data.shipping_address} name='shipping_address' onChange={handleInputChange}/>
          </Form.Group>
        </Row>
        <Row className='email-header-container'>
          <Col className='comp-email-header header'>
            Company Email
          </Col>
        </Row>
        <Row className='email-txt'>
          <Form.Group as={Col} md={8}>
            <Form.Control value={inputs.email} placeholder={data.email} name='email' onChange={handleInputChange}/>
          </Form.Group>
        </Row>
        <Row className='phone-header-container'>
          <Col className='comp-phone-header header'>
            Company Phone
          </Col>
        </Row>
        <Row className='phone-txt'>
          <Form.Group as={Col} md={8}>
            <Form.Control value={inputs.phone} placeholder={data.phone} name='phone' onChange={handleInputChange}/>
          </Form.Group>
          <Col md={1}/>
          <Col>Status: {data.status}</Col>
        </Row>
      </Form>
    </Container>
  )
}
 export default AdminEdit
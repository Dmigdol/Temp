import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import { useState } from 'react';


function NewPart({inputs, setInputs}) {


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
            Serial
          </Col>
        </Row>
        <Row>
          <Form.Group as={Col} md={8}>
            <Form.Control value={inputs.serial} name='serial' onChange={handleInputChange}/>
          </Form.Group>
        </Row>
        <Row className='email-header-container'>
          <Col className='comp-email-header header'>
            Total amount
          </Col>
        </Row>
        <Row>
          <Form.Group as={Col} md={1}>
            <Form.Control value={inputs.amount} name='amount' onChange={handleInputChange}/>
          </Form.Group>
        </Row>
        <Row className='phone-header-container'>
          <Col className='comp-phone-header header'>
            {'Price per unit, enter as (0.00)'}
          </Col>
        </Row>
        <Row>
          <Form.Group as={Col} md={2}>
            <Form.Control value={inputs.ppu}  name='ppu' onChange={handleInputChange}/>
          </Form.Group>
        </Row>
      </Form>
    </Container>
  )
}
 export default NewPart
import { useRef, useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import './CustomerInput.scss'

function CustomerInput({newQuote, setNewQuote}) {

  const handleClose = () => setNewQuote(false);

  const [inputs, setInputs] = useState({})

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setInputs({...inputs, [name]: value})
  }

  const handleRadioChange = (e) => {
    setInputs({...inputs, 'difCheck': e.target.id})
  }

  return (

    <Modal centered size='lg' show={newQuote} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Customer Information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container className='modal-body'>
          <Form>
            <Row className='modal-row'>
              <Form.Group as={Col} md={12}>
                <Form.Label className='input-label'>Company Name</Form.Label>
                <Form.Control placeholder='Enter Company Name' name='name' onChange={handleInputChange}/>
              </Form.Group>
            </Row>
            <Row className='modal-row'>
              <Form.Group as={Col} md={6}>
                <Form.Label className='input-label'>Company Email</Form.Label>
                <Form.Control placeholder='Enter Company Email' name='email' onChange={handleInputChange}/>
              </Form.Group>
              <Form.Group as={Col} md={6}>
                <Form.Label className='input-label'>Company Phone</Form.Label>
                <Form.Control placeholder='Enter Company Phone' name='phone' onChange={handleInputChange}/>
              </Form.Group>
            </Row>
            <Row className='address'>
              <Form.Group as={Col} md={8}>
                <Form.Label className='input-label'>Shipping Address</Form.Label>
                <Form.Control placeholder='Enter Shipping Address' name='ship' onChange={handleInputChange}/>
              </Form.Group>
              <Form.Group as={Col} md={4}>
                <Form.Label className='input-label'>City</Form.Label>
                <Form.Control name='city' onChange={handleInputChange}/>
              </Form.Group>
              <Form.Group>
                <Form.Check
                  inline
                  onChange={handleInputChange}
                  name='difCheck'
                  />
                <Form.Label className='customer-check-label'>Is Shipping address different than Billing address?</Form.Label>
              </Form.Group>
            </Row>
            <Row className='modal-row'>
              <Form.Group as={Col} md={4}>
                <Form.Label className='input-label'>State</Form.Label>
                <Form.Control name='state' onChange={handleInputChange}/>
              </Form.Group>
              <Form.Group as={Col} md={4}>
                <Form.Label className='input-label'>Zip Code</Form.Label>
                <Form.Control name='zip' onChange={handleInputChange}/>
              </Form.Group>
            </Row>
          </Form>
        </Container>
      </Modal.Body>
    </Modal>

  )


}

export default CustomerInput;
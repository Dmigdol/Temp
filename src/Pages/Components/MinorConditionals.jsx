import { useRef, useEffect, useState } from "react";
import './MinorConditionals.scss'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'


function MinorConditionals({data, setInputs}){

  const handleInputChange = (e) => {
    const { name, value } = e.target
    console.log('deadbolt check', e.target)
    setInputs({...data, [name]: value})
  }

  return(
    <Container fluid>
      <Row className='modal-row'>
        <Form.Group as={Col} md={4}>
          <Form.Label className='input-label'>DeadBolt</Form.Label>
          <Form.Check
            className='box-text'
            inline
            onChange={handleInputChange}
            name='deadBolt'
            id='deadBolt'
          />
        </Form.Group>
        <Form.Group as={Col} md={4}>
          <Form.Label className='input-label'>Closer</Form.Label>
          <Form.Check
            className='box-text'
            inline
            onChange={handleInputChange}
            name='closer'
            id='closer'
          />
        </Form.Group>
      </Row>
    </Container>
  )



}

export default MinorConditionals
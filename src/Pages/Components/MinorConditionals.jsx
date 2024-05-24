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
        <Form.Group as={Col} md={8}>
          <Form.Label className='input-label'>Handling</Form.Label>
          <Form.Select name='hanlding' onChange={handleInputChange}>
            <option hidden value/>
            <option value='LH'>Left Hand</option>
            <option value='RH'>Right Hand</option>
            <option value='LHr'>Left Hand Reverse</option>
            <option value='RHr'>Right Hand Reverse</option>
          </Form.Select>
        </Form.Group>
      </Row>
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
        {data.frame !== 'pivot' ?
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
        :
          <Form.Group as={Col} md={4}>
            <Form.Label className='input-label disabled'>Closer</Form.Label>
            <Form.Check
            disabled
              className='box-text'
              inline
              onChange={handleInputChange}
              name='closer'
              id='closer'
            />
          </Form.Group>
        }
        {data.frame === 'standard' ?
          <Form.Group as={Col} md={4}>
          <Form.Label className='input-label'>Fire Rating</Form.Label>
            <Form.Check
              className='box-text'
              inline
              onChange={handleInputChange}
              name='fireRating'
              id='fireRating'
            />
          </Form.Group>
        :
          <Form.Group as={Col} md={4}>
          <Form.Label className='input-label disabled'>Fire Rating</Form.Label>
            <Form.Check
              disabled
              className='box-text'
              inline
              onChange={handleInputChange}
              name='fireRating'
              id='fireRating'
            />
          </Form.Group>
        }
      </Row>
    </Container>
  )



}

export default MinorConditionals
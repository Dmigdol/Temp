import { useRef, useEffect, useState } from "react";
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'


function MiscConditionals({inputs, setInputs}){

  const handleInputChange = (e) => {
    const { name, value } = e.target
    console.log('deadbolt check', e.target)
    setInputs({...inputs, [name]: value})
  }

  const handleCheckChange = (e) => {
    const { name, checked } = e.target
    setInputs({...inputs, [name]: checked})
  }

  return(
    <Container fluid>
      <Row>
        <Form.Group as={Col} md={6}>
          <Form.Label className='input-label'>Handing</Form.Label>
          <Form.Select name='handing' onChange={handleInputChange}
            defaultValue={inputs.handing}
          >
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
            defaultChecked={inputs.deadBolt}
            inline
            onChange={handleCheckChange}
            name='deadBolt'
            id='deadBolt'
          />
        </Form.Group>
        {inputs.frame !== 'pivot' ?
          <Form.Group as={Col} md={4}>
            <Form.Label className='input-label'>Closer</Form.Label>
            <Form.Check
              className='box-text'
              defaultChecked={inputs.closer}
              inline
              onChange={handleCheckChange}
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
              onChange={handleCheckChange}
              name='closer'
              id='closer'
            />
          </Form.Group>
        }
        {inputs.frame === 'standard' ?
          <Form.Group as={Col} md={4}>
          <Form.Label className='input-label'>Fire Rating</Form.Label>
            <Form.Check
              className='box-text'
              defaultChecked={inputs.fireRating}
              inline
              onChange={handleCheckChange}
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
              onChange={handleCheckChange}
              name='fireRating'
              id='fireRating'
            />
          </Form.Group>
        }
      </Row>
    </Container>
  )



}

export default MiscConditionals
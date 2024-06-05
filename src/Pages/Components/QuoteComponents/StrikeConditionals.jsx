import { useRef, useEffect, useState } from "react";
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

function StrikeRender({inputs, setInputs}) {

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setInputs({...inputs, [name]: value})
  }


    return (
      <Container fluid>
        <Row>
          <Form.Group as={Col} md={5}>
            <Form.Label className='input-label'>Strike Type</Form.Label>
            {inputs.numDoors !== 'on' ?
            <Form.Select name='strike' onChange={handleInputChange}>
              <option hidden value/>
              <option value='ASA'>ASA Strike</option>
              <option value='T'>T-Strike</option>
              <option value='LIP'>Lip Strike</option>
              <option value='NS'>No Strike</option>
            </Form.Select>
            :
            <Form.Select name='strike' onChange={handleInputChange}>
              <option hidden value/>
              <option value='RHS'>Roller Head</option>
              <option value='NS'>No Strike</option>
            </Form.Select>
            }
          </Form.Group>
          {inputs.strike !== 'NS' ?
          <Form.Group as={Col} md={4}>
            <Form.Label className='input-label' >{'Strike Height (in)'}</Form.Label>
            <Form.Control name='strikeHeight' value={inputs.strikeHeight} placeholder='Strike Height' onChange={handleInputChange}/>
          </Form.Group>
          :
          <Form.Group as={Col} md={4}>
            <Form.Label className='input-label' >{'Strike Height (in)'}</Form.Label>
            <Form.Control disabled name='strikeHeight' value={inputs.strikeHeight} onChange={handleInputChange}/>
          </Form.Group>
          }
        </Row>
      </Container>
    )
}

export default StrikeRender
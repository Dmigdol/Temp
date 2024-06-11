import { useRef, useEffect, useState } from "react";
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

function StrikeRender({inputs, setInputs}) {

  const [strikeStake, setStrikeState] = useState(true)

  const handleInputChange = (e) => {
    if(e.target === 'NS') {
      console.log(e.target)
      setInputs({...inputs, 'strikeHeight': ''})
    }
    const { name, value } = e.target
    setInputs({...inputs, [name]: value})
  }


    return (
      <Container fluid>
        <Row>
          <Form.Group as={Col} md={5}>
            <Form.Label className='input-label'>Strike Type</Form.Label>
            {inputs.numDoors === 'single' ?
            <Form.Select name='strike' onChange={handleInputChange}
            defaultValue={inputs.strike}
            >
              <option hidden value/>
              <option value='ASA Strike'>ASA Strike</option>
              <option value='T-Strike'>T-Strike</option>
              <option value='Lip-Strike'>Lip Strike</option>
              <option value='No Strike'>No Strike</option>
            </Form.Select>
            :
            <Form.Select name='strike' onChange={handleInputChange}
            defaultValue={inputs.strike}
            >
              <option hidden value/>
              <option value='Roller Head'>Roller Head</option>
              <option value='No Strike'>No Strike</option>
            </Form.Select>
            }
          </Form.Group>
          {inputs.strike !== 'No Strike' ?
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
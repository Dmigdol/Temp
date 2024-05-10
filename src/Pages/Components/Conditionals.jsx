import './Conditionals'
import Select from 'react-select'
import { useRef, useEffect, useState } from "react";
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

function Conditionals({data, setInputs}) {

  console.log('conditionals payload', data)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setInputs({...data, [name]: value})
  }

  const formRender = (opt1, opt2, opt3) => {
    return(
      <Container fluid>
        <Row className='modal-row'>
          <Form.Group as={Col} md={8}>
            <Form.Label className='input-label'>Hinge Type</Form.Label>
            <Form.Select name='hinge' default={opt1[0]} onChange={handleInputChange}>
              <option>Select Hinge</option>
              <option value={opt1[0]}>{`${opt1[1]}`}</option>
              <option value={opt2[0]}>{`${opt2[1]}`}</option>
              {opt3 ? <option value={opt3[0]}>{`${opt3[1]}`}</option> : ''}
            </Form.Select>
          </Form.Group>
        </Row>
        <Row className='modal-row'>
          <Form.Group as={Col} md={8}>
            <Form.Label className='input-label'>Strike Type</Form.Label>
            <Form.Select name='strike' default={opt1[0]} onChange={handleInputChange}>

            </Form.Select>
          </Form.Group>
        </Row>
      </Container>
    )
  }

  const logicCheck = (frame, height) => {
    if (frame === 'standard') {
      switch (true) {
        case height <= 72 :
          return formRender(['CR3D51-2', 'CalRoyal CR3D51 (2)'], ['340 3D-2', 'Tectus 340 3D (2)']);
          break;
        case height > 72 && height < 84 :
          return formRender(['CR3D51-3', 'CalRoyal CR3D51 (3)'], ['340 3D-3', 'Tectus 340 3D (3)'], ['butt-3', '4x4 butt hinge (3)']);
          break;
        case height > 84 && height <= 96 :
          return formRender(['CR3D62-3', 'CalRoyal CR3D62 (3)'], ['540 3D-3', 'Tectus 540 3D (3)'], ['butt-4', '4x4 butt hinge (4)']);
          break;
        case height > 96 && height <= 120 :
          return formRender(['CR3D62-4', 'CalRoyal CR3D62 (4)'], ['540 3D-4', 'Tectus 540 3D (4)'], ['butt-4', '4x4 butt hinge (4)']);
          break;
      }
    }
    if (frame === 'in-swing') {
      console.log('firing')
      switch (true) {
        case height <= 72 :
          return formRender(['CR3D51-2', 'CalRoyal CR3D51 (2)'], ['340 3D-2', 'Tectus 340 3D (2)']);
          break;
        case height > 72 && height < 84 :
          return formRender(['CR3D51-3', 'CalRoyal CR3D51 (3)'], ['340 3D-3', 'Tectus 340 3D (3)']);
          break;
        case height > 84 && height <= 96 :
          return formRender(['CR3D62-3', 'CalRoyal CR3D62 (3)'], ['540 3D-3', 'Tectus 540 3D (3)']);
          break;
        case height > 96 && height <= 120 :
          return formRender(['CR3D62-4', 'CalRoyal CR3D62 (4)'], ['540 3D-4', 'Tectus 540 3D (4)']);
          break;
      }
    }
      if(frame === 'pivot'){
        return formRender(['Frits system-one', 'FritsJurgen System One'], ['Dorma CP440', 'Dorma CP440'])
    }
  }

  console.log('pre switch', data)
  switch(data.frame) {
    case 'standard':
      return logicCheck(data.frame, data.height);
      break;
    case 'in-swing':
      return logicCheck(data.frame, data.height);
      break;
    case 'pivot' :
      return logicCheck(data.frame, data.height);
      break;
  }
}


export default Conditionals;
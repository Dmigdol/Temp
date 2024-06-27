import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse'
import './QuoteComponentsSCSS/QuoteInput.scss'
import Hinge from './HingeConditionals.jsx'
import Strike from './StrikeConditionals.jsx'
import Misc from './MiscConditionals.jsx'

function QuoteInput({show, setShow, setSlide, slide, data, rowObj, addRow, inputs,
   quoterows, setInputs, inputContext, setInputContext, setCurrEntry, currEntry}) {


  const [checkBox, setCheckBox] = useState(false)


  const handleClose = () => {
    setSlide(false)
    setShow(false)
    returnToDefault()
  }

  const handleUpdate = (e) => {

    let obj = quoterows.find((o, i) => {
      if (o.num === currEntry.num) {
          quoterows[i] = {...inputs};
          return true; // stop searching
      }
  });
    console.log('log', obj)

  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setInputs({...inputs, [name]: value})
  }

  const handleCheckChange = (e) => {
    const { name, checked } = e.target
    setInputs({...inputs, [name]: checked})
  }

  const returnToDefault = () => {
    setCheckBox('');
    setInputContext('')
    setInputs({frame: '', strikeHeight: ''});
    setSlide(false)
  }

  const checkInputs = () => {
    if (Object.keys(inputs).length > 5 && Object.values(inputs).every(x => x === null || x === '')) {
      return  true
    } else {return false}
  }

  const submitForm = (e) => {
    e.preventDefault()
    const payload = inputs;

    console.log('inputs',inputs)

    payload.num = rowObj.num;
    // payload.checkBox = checkBox;
    // payload.hinge = 'PH';

    console.log(payload)
    addRow(payload)
    returnToDefault();
  }

  return (
    <Container className='input-container'>
      <div className="form-exit" onClick={() => {
        returnToDefault();
        setShow(!show)
      }}>
        &#x2715;
      </div>
      <Form onSubmit={submitForm}>
      <Row>
        <Col md={8} className='input-header'>
          Location
        </Col>
        <Col md={4}/>
        <Form.Group as={Col} md={6}>
          <Form.Label className='input-label'>Tag</Form.Label>
          <Form.Control value={inputs.tag} placeholder='Tag' name='tag' type='tag' onChange={handleInputChange}/>
        </Form.Group>
        <Form.Group as={Col} md={4}>
          <Form.Label className='input-label'>Room</Form.Label>
          <Form.Control value={inputs.room} placeholder='Room' name='room' onChange={handleInputChange}/>
        </Form.Group>
      </Row>
      <Row>
        <Col md={8} className='input-header'>
            Frame
        </Col>
        <Col md={4}/>
        <Form.Group as={Col} md={4}>
          <Form.Label className='input-label'>{`Width (in)`}</Form.Label>
          <Form.Control value={inputs.width} placeholder ='Width' name='width' onChange={handleInputChange}/>
        </Form.Group>
        <Form.Group as={Col} md={4}>
          <Form.Label className='input-label'>{`Height (in)`}</Form.Label>
          <Form.Control value={inputs.height} placeholder ='Height' name='height' onChange={handleInputChange}/>
        </Form.Group>
        <Form.Group as={Col} md={8}>
          <Form.Label className='input-label'>Frame Type</Form.Label>
          <Form.Select value={inputs.frame}  name='frame'  onChange={handleInputChange}>
            <option hidden value/>
            <option value='standard'>Standard</option>
            <option value='in-swing'>In-Swing</option>
            <option value='pivot'>Pivot</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Row>
      <Form.Group as={Col} md={4}>
        <Form.Label className='double-box-text'>Double Door</Form.Label>
          <Form.Check
            inline
            defaultChecked={inputs.numDoors}
            onChange={handleCheckChange}
            name='numDoors'
            id='double'
          />
      </Form.Group>
      </Row>
      <Row>
        <Col md={8} className='input-header'>
          Hinge
        </Col>
        <Col md={4}/>
        <Hinge inputs={inputs} setInputs={setInputs}/>
      </Row>
      <Row>
        <Col md={8} className='input-header'>
          Strike
        </Col>
        <Col md={4}/>
        <Strike inputs={inputs} setInputs={setInputs}/>
      </Row>
        <Row>
          <Col md={8} className='input-header'>
            Misc
          </Col>
          <Col md={4}/>
        <Misc inputs={inputs} setInputs={setInputs}/>
        </Row>
      </Form>
      {
        inputContext !== 'edit' ?
          <Button
            className='submit-button'
            onClick={(e) => {
              if (checkInputs) {
                setSlide(false)
                submitForm(e)
                handleClose()
              }
          }}>
            Add Row
          </Button>
          :
          <Button
            className='submit-button'
            onClick={(e) => {
              if (checkInputs) {
                setSlide(false)
                handleUpdate(e)
                handleClose()
              }
          }}>
            Update
          </Button>
      }
    </Container>
  )
}

export default QuoteInput;
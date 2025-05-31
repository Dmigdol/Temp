import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Conditionals from './Conditionals.jsx'
import StrikeRender from './StrikeRender.jsx'
import MinorConditionals from './MinorConditionals.jsx'
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import './NewRowModal.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import  newDesc from '../Helpers/DescBuilder.js'
import { useState } from 'react';

function NewRowModal({show, setShow, setSlide, slide, data, rowObj, addRow, inputs, setInputs}) {

  const [checkBox, setCheckBox] = useState('single')
  const [modalPage, setModalPage] = useState('first')

  const handleClose = () => {
    setShow(false)
    setSlide(false)
    returnToDefault()
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setInputs({...inputs, [name]: value})
  }

  const handleRadioChange = (e) => {
    setInputs({...inputs, 'numDoors': e.target.id})
  }

  const returnToDefault = () => {
    setCheckBox('');
    setModalPage('first');
    setInputs({});
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
    payload.handling = 'LH-r'
    payload.desc = newDesc(payload)

    console.log(payload)


    addRow(payload)
    returnToDefault();
    setSlide(false)
  }


  return(
    <>
      <Modal centered size='md' className='modal-dialog-right'
      show={show} onHide={handleClose}>
        <Modal.Header className='modal-header' closeButton>
          <Modal.Title>{`Entry ${rowObj.num}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      {modalPage === 'first' ?
        <Container fluid className='test'>
          <Form onSubmit={submitForm}>
              <Row className='modal-row'>
                <Form.Group as={Col} md={5}>
                  <Form.Label className='input-label'>Item ID</Form.Label>
                  <Form.Control value={inputs.id} placeholder='Item ID' name='id' type='id' onChange={handleInputChange}/>
                </Form.Group>
                <Form.Group as={Col} md={4}>
                  <Form.Label className='input-label'>Qty</Form.Label>
                    <Form.Control value={inputs.qty} placeholder='QTY' name='qty' onChange={handleInputChange}/>
                </Form.Group>
              </Row>
              <Row className='modal-row'>
                <Form.Group as={Col} md={4}>
                  <Form.Label className='input-label'>{`Width (in)`}</Form.Label>
                  <Form.Control value={inputs.width} placeholder ='Width' name='width' onChange={handleInputChange}/>
                </Form.Group>
                <Form.Group as={Col} md={4}>
                  <Form.Label className='input-label'>{`Height (in)`}</Form.Label>
                  <Form.Control value={inputs.height} placeholder ='Height' name='height' onChange={handleInputChange}/>
                </Form.Group>
              </Row>
              <Row className='modal-row'>
                <Form.Group as={Col} md={8}>
                  <Form.Label className='input-label'>Frame Type</Form.Label>
                  <Form.Select value={inputs.frame}  name='frame'  onChange={handleInputChange}>
                    <option>Select Frame</option>
                    <option value='standard'>Standard</option>
                    <option value='in-swing'>In-Swing</option>
                    <option value='pivot'>Pivot</option>
                  </Form.Select>
                </Form.Group>
              </Row>
              <Row className='modal-row'>
              <Row  className='modal-row'>
                <Form.Group as={Col} md={4}>
                  <Form.Label className='single-box-text'>Single</Form.Label>
                    <Form.Check
                      inline
                      onChange={handleRadioChange}
                      type='radio'
                      name='group1'
                      id='single'
                    />
                </Form.Group>
                <Form.Group as={Col} md={4}>
                  <Form.Label className='double-box-text'>Double</Form.Label>
                    <Form.Check
                      inline
                      onChange={handleRadioChange}
                      onClick={(e)=> setCheckBox('double')}
                      type='radio'
                      name='group1'
                      id='double'
                    />
                </Form.Group>
              </Row>
              </Row>
              <Button onClick={(e) => {
                setModalPage('second')
                // setSlide(false)
                // handleClose()
                }} >Next</Button>
            </Form>
          </Container>
            :
              <>
              {/* SECOND PAGE STARTS HERE */}
                <Conditionals data={inputs} setInputs={setInputs}/>
                <StrikeRender data={inputs} inputs={inputs} setInputs={setInputs}/>
                <MinorConditionals data={inputs} setInputs={setInputs}/>
                <Button onClick={() => {setModalPage('first')}}>
                  Back
                </Button>
                <Button onClick={(e) => {
                  if (checkInputs) {
                    setSlide(false)
                    submitForm(e)
                    handleClose()
                    setModalPage('first')
                  }
                }}>
                  Submit
                </Button>
              </>
            }
          <Modal.Footer>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default NewRowModal;


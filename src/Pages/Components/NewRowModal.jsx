import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Conditionals from './Conditionals.jsx'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from '@awesome.me/kit-275899ac10/icons'
import './NewRowModal.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import  newDesc from '../Helpers/DescBuilder.js'
import { useState } from 'react';

function NewRowModal({show, setShow, setSlide, slide, data, rowObj, addRow}) {

  const [height, setHeight] = useState(0)
  const [checkBox, setCheckBox] = useState('single')
  const [modalPage, setModalPage] = useState('first')
  const [inputs, setInputs] = useState({frame: 'standard'})

  const handleClose = () => {
    setShow(false)
    setSlide(false)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setInputs({...inputs, [name]: value})
  }

  const returnToDefault = () => {
    setHeight(0);
    setCheckBox('single');
    setModalPage('first');
    setInputs({});
  }

  const submitForm = (e) => {
    e.preventDefault()
    const payload = inputs;



    payload.num = rowObj.num;
    payload.checkBox = checkBox;
    payload.hinge = 'PH';
    payload.strike = 'ASA'
    payload.handling = 'LH-r'
    payload.desc = newDesc(payload)




    addRow(payload)
    returnToDefault();
    setSlide(false)
  }


  return(
    <>
      <Modal centered size='md'
      show={show} onHide={handleClose}>
        <Modal.Header className='modal-header' closeButton>
          <Modal.Title>{`Entry ${rowObj.num}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      {modalPage === 'first' ?
        <Container fluid className='test'>
          <Form onSubmit={submitForm}>
              <Row className='modal-row'>
                <Col md={5}>
                    <Form.Control value={inputs.id} placeholder='Item ID' name='id' type='id' onChange={handleInputChange}/>
                </Col>
                <Col md={3}>
                    <Form.Control value={inputs.qty} placeholder='QTY' name='qty' onChange={handleInputChange}/>
                </Col>
              </Row>
              <Row className='modal-row'>
                <Col md={4}>
                  <Form.Control value={inputs.width} placeholder ='Width' name='width' onChange={handleInputChange}/>
                </Col>
                <Col md={4}>
                  <Form.Control value={inputs.height} placeholder ='Height' name='height' onChange={handleInputChange}/>
                </Col>
              </Row>
              <Row className='modal-row'>
                <Col md={8}>
                  <Form.Select value={inputs.frame}  name='frame' onChange={handleInputChange}>
                    <option value='standard'>Standard</option>
                    <option value='in-swing'>In-Swing</option>
                    <option value='pivot'>Pivot</option>
                  </Form.Select>
                </Col>
              </Row>
              <Row className='modal-row boxes'>
                <Col md={3} className='single-box'>
                  <Form.Label className='single-box-text'>Single</Form.Label>
                  {checkBox === 'single' ?
                  <Form.Check
                  checked
                  onChange={handleInputChange}
                  type='radio'
                  name='group1'
                  id='single'
                  />
                  :
                  <Form.Check
                  onChange={handleInputChange}
                  onClick={(e)=> setCheckBox('single')}
                  type='radio'
                  name='group1'
                  id='single'
                  />
                }
                </Col>
                <Col md={3} className='double-box'>
                  <Form.Label className='double-box-text'>Double</Form.Label>
                  {checkBox === 'double' ?
                  <Form.Check
                  checked
                  onChange={handleInputChange}
                  type='radio'
                  name='group1'
                  id='double'
                  />
                  :
                  <Form.Check
                  onChange={handleInputChange}
                  onClick={(e)=> setCheckBox('double')}
                  type='radio'
                  name='group1'
                  id='double'
                  />
                }
                </Col>
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
                <Conditionals data={inputs} setInputs={setInputs}/>
                <Button onClick={() => {setModalPage('first')}}>
                  Back
                </Button>
                <Button onClick={(e) => {
                  setSlide(false)
                  submitForm(e)
                  handleClose()
                  setModalPage('first')
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
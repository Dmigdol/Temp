import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from '@awesome.me/kit-275899ac10/icons'
import './NewRowModal.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import  newDesc from '../Helpers/DescBuilder.js'
import { useState } from 'react';

function NewRowModal({show, setShow, setSlide, slide, data, rowObj, addRow}) {

  const [frame, selectFrame] = useState('standard');
  const [numOfDoors, setNumOfDoors] = useState('single');
  const [height, setHeight] = useState(0)

  const handleClose = () => {
    setShow(false)
    setSlide(false)
  }

  const submitForm = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);


    payload.num = rowObj.num;
    payload.hinge = 'PH';
    payload.NumOfDoors = numOfDoors
    payload.strike = 'ASA'
    payload.handling = 'LH-r'

    payload.desc = newDesc(payload)

    console.log('submission :', payload)
    addRow(payload)
    setSlide(!slide)
  }


  return(
    <>
      <Modal centered size='md'
      show={show} onHide={handleClose}>
        <Modal.Header className='modal-header' closeButton>
          <Modal.Title>{`Entry ${rowObj.num}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Container fluid className='test'>
          <Form onSubmit={submitForm}>
              <Row className='modal-row'>
                <Col md={5}>
                    <Form.Control placeholder='Item ID' name='id' type='id'/>
                </Col>
                <Col md={3}>
                    <Form.Control placeholder='QTY' name='qty' onChange={(e) => {setNumOfDoors(e.target)}}/>
                </Col>
              </Row>
              <Row className='modal-row'>
                <Col md={4}>
                  <Form.Control placeholder ='Width' name='width' />
                </Col>
                <Col md={4}>
                  <Form.Control placeholder ='Height' name='height' />
                </Col>
              </Row>
              <Row className='modal-row'>
                <Col md={8}>
                  <Form.Select name='frame'>
                    <option value='standard'>Standard</option>
                    <option value='in-swing'>In-Swing</option>
                    <option value='pivot'>Pivot</option>
                  </Form.Select>
                </Col>
              </Row>
              <Button onClick={(e) => {
                handleClose()
                setSlide(false)
                }} type='submit'>Submit</Button>
            </Form>
          </Container>
          <Modal.Footer>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default NewRowModal;
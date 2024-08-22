import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from '@awesome.me/kit-275899ac10/icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ACSCSS/AdminModal.scss'
import { useState } from 'react';

function AdminModal({setShow, show, data, setCurrentPage}) {

  const handleClose = () => setShow(false);

  const handleEdit = () => {
    console.log(data)
  }

  return(

    <div className='modal show'>
      {data ?
        <Modal centered size='lg' show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Button variant='outline-primary' className='edit-btn'>
              <FontAwesomeIcon
              icon={byPrefixAndName.fas['pen-to-square']}
              onClick={()=>{handleEdit()}}
              />
            </Button>
            <Modal.Title className='modal-title'>{data.company_name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container className='modal-body'>
              <Row className='add-header-container'>
                <Col className='comp-add-header header'>
                  Shipping Address
                </Col>
              </Row>
              <Row>
                <Col className='add-txt'>{data.shipping_address}</Col>
                <Col md={1}>
                </Col>
              </Row>
              <Row className='email-header-container'>
                <Col className='comp-email-header header'>
                  Company Email
                </Col>
              </Row>
              <Row className='email-txt'>
                <Col>{data.email}</Col>
              </Row>
              <Row className='phone-header-container'>
                <Col className='comp-phone-header header'>
                  Company Phone
                </Col>
              </Row>
              <Row className='phone-txt'>
                <Col md={9}>{data.phone}</Col>
                <Col>Status: {data.status}</Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer className='modal-footer'>
            <Button variant='outline-danger' onClick={handleClose}>Delete</Button>
          </Modal.Footer>
        </Modal>
       : <></>
      }

    </div>
  )

}

export default AdminModal;
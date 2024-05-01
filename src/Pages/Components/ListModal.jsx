import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from '@awesome.me/kit-275899ac10/icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ListModal.scss'
import { useState } from 'react';

function ListModal({setShow, show, data, setCurrentPage}) {

  console.log(data)

  const handleClose = () => setShow(false);

  const handleEdit = () => {

  }

  return(

    <div className='modal show'>
      <Modal centered size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{data.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container className='modal-body'>
            <Row>
              <Col>ID: {data.reference_id}</Col>
            </Row>
            <Row>
              <Col># of Items: Placeholder</Col>
            </Row>
            <Row>
              <Col>Created By: {data.employee}</Col>
            </Row>
            <Row>
              <Col>Date Created: {data.date}</Col>
              <Col>Last Edited: Placeholder</Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer className='modal-footer'>
          <Button variant='outline-primary' className='edit-btn'>
                  <FontAwesomeIcon
                  icon={byPrefixAndName.fas['pen-to-square']}
                  onClick={()=>{setCurrentPage('QuoteBuilder')}}
                  />
          </Button>
          <Button onClick={handleClose}>Order</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )

}

export default ListModal;
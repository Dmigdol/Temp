import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from '@awesome.me/kit-275899ac10/icons'
import './NewRowModal.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function NewRowModal({show, setShow, setSlide, slide, data, rowObj, addRow}) {

  const handleClose = () => {
    setShow(false)
    setSlide(false)
  }


  return(
    <>
      <Modal  size='lg' show={show} onHide={handleClose}>
        <Modal.Header className='modal-header' closeButton>
          <Modal.Title>{`Entry ${rowObj.num}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container></Container>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default NewRowModal;
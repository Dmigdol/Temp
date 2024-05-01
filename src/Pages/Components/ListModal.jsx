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

function ListModal({setShow, show, data}) {

  console.log(data)

  const handleClose = () => setShow(false);

  return(

    <div className='modal show'>
      <Modal centered size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{data.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col># {data.reference_id}</Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='outline-primary' className='edit-btn'>
                  <FontAwesomeIcon
                  icon={byPrefixAndName.fal['pen-to-square']}
                  />
          </Button>
          <Button variant='secondary' onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )

}

export default ListModal;
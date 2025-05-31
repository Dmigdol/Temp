import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListModalData from './ListModalData.jsx'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from '@awesome.me/kit-275899ac10/icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ListModal.scss'
import { useState } from 'react';
import axios from 'axios';


function ListModal({setShow, show, data, setCurrentPage, setQuoteContext, quoteContext}) {

  const handleClose = () => setShow(false);


  const handleEdit = () => {
    console.log('HANDLE EDIT DATA', data)
    //temp solution
    var shell = {
      billing_address: '21542 Roadway ave. Long Beach, CA',
      company_name: `Dillon's Moving`,
      email: 'BuymyShoes@yahoo.com',
      id: 'f7595862-ebe3-4930-9feb-d65bcac9bea9',
      phone: '555-654-6544',
      shipping_address: '21542 Roadway ave. Long Beach, CA'
    }
    data.customer = shell
    setQuoteContext('edit')
    setCurrentPage(['QuoteBuilder', data])
  }

  const tempEmployee = {
    name: 'Paul Allor',
    id: 1000,
    position: 'admin',
    customer: {
      billing_address: '21542 Roadway ave. Long Beach, CA',
      company_name: `Dillon's Moving`,
      email: 'BuymyShoes@yahoo.com',
      id: 'f7595862-ebe3-4930-9feb-d65bcac9bea9',
      phone: '555-654-6544',
      shipping_address: '21542 Roadway ave. Long Beach, CA'
    }
  }

  const handleDelete = () => {
    console.log('here,',data)
    axios.delete('http://localhost:3000/del', {
      quote_id: data.quote_id
    })
    .then(res => {
      console.log('quote deleted')
      setShow(false)
    })
    .catch((err) => {
      console.log('error deleting quote', err)
    })
  }

  return(

    <div className='modal show'>
      {data ?
        <Modal centered size='lg' show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{data.company_name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container className='modal-body'>
              <Row>
                <Col>ID: {data.quote_id.slice(0,5)}</Col>
              </Row>
              <Row>
                <Col># of Items: Placeholder</Col>
              </Row>
              <Row>
                <Col>Created By: {data.employee_name}</Col>
              </Row>
              <Row >
                <Col>Date Created: {data.created_at}</Col>
                <Col className='last-edited'>Last Edited: Placeholder</Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer className='modal-footer'>
            <Button variant='outline-primary' className='edit-btn'>
                    <FontAwesomeIcon
                    icon={byPrefixAndName.fas['pen-to-square']}
                    onClick={()=>{handleEdit()}}
                    />
            </Button>
            <Button onClick={handleClose}>Order</Button>
          </Modal.Footer>
        </Modal>
       : <></>
      }

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
            <ListModalData data={data}/>
          </Modal.Body>
          <Modal.Footer className='modal-footer'>
            <Button variant='outline-danger' onClick={handleDelete}>Delete</Button>
          </Modal.Footer>
        </Modal>
       : <></>
      }
    </div>
  )

}

export default ListModal;
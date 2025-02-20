import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NewPart from './NewPart.jsx'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from '@awesome.me/kit-275899ac10/icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import axios from 'axios';

function NewInventoryModal({setShowNew, fetchInventory, showNew, list}) {

  const [context, setContext] = useState('list');
  const [inputs, setInputs] = useState({})

  const handleClose = () => {
    setShow(false);
    setTimeout(() => {
      setContext('list')
    }, 500)
  }

  const handleInventorySubmit = () => {
    axios.post('http://localhost:3000/newInventory', {
      id: (list.length + 1),
      inputs: inputs
    })
    .then(res => {
      console.log('resolution for upload', res)
    })
    .catch((err) => {
      console.log('error upload quote', err)
    })

    setShowNew(false);
    setTimeout(() => {
      setContext('list')
      fetchInventory()
    }, 500)
  }

  return(

    <div className='modal show'>
        <Modal centered size='lg' show={showNew} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className='modal-title'>New Part</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <NewPart  setContext={setContext} inputs={inputs} setInputs={setInputs}/>
          </Modal.Body>
          <Modal.Footer className='modal-footer'>
            <Button variant='primary' className='submit-edit-btn' onClick={handleInventorySubmit}>Submit</Button>
          </Modal.Footer>
        </Modal>
    </div>
  )

}

export default NewInventoryModal
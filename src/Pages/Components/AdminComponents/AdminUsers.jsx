import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios';
import UsersList from './AdminUsersList'
import './ACSCSS/AdminUsers.scss'
import AdminModal from './AdminModal'
import { useEffect, useState } from "react";

function AdminUsers() {

  const [clicked, setClicked] = useState();
  const [show, setShow] = useState(false);


  return(
  <>
  <AdminModal setShow={setShow} show={show} data={clicked}/>
    <Container>
      <Row className='user-list-container'>
        <Col>
          <UsersList clicked={clicked} setClicked={setClicked} setShow={setShow}/>
        </Col>
      </Row>
    </Container>
  </>
  )

}

export default AdminUsers;
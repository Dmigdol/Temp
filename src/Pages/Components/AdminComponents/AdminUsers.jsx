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
  const [userList, setUserList] = useState([])
  const [fetchUsersFlag, setFetchUsersFlag] = useState(true)

  const fetchUsers = () => {
    axios.get('http://localhost:3000/users', {
    })
    .then(response => {
      console.log('response', response)
      setUserList(response.data)
    })
    .catch((err) => {
      console.log('error retrieving user list', err)
    })
  }

  useEffect(() => {
    if (fetchUsersFlag) {
      fetchUsers()
      setFetchUsersFlag(false)
    }
  }, [fetchUsersFlag, setFetchUsersFlag])


  return(
  <>
  <AdminModal setShow={setShow} show={show} data={clicked} userList={userList} fetchUsers={fetchUsers}/>
    <Container>
      <Row className='user-list-row'>
        <Col className='user-list-title'>User List</Col>
      </Row>
      <Row className='user-list-container'>
        <Col>
          <UsersList fetchUsersFlag={fetchUsersFlag} setFetchUsersFlag={setFetchUsersFlag} clicked={clicked} setClicked={setClicked} userList={userList} setShow={setShow}/>
        </Col>
      </Row>
    </Container>
  </>
  )

}

export default AdminUsers;
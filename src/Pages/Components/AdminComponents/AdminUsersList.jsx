import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios';
import './ACSCSS/AdminUsersList.scss'
import { useEffect, useState } from "react";

function AdminUsersList({clicked, setClicked, setShow}) {



return (
  <div>
    <Container>
      <Table hover className='user-table'>
        <thead>
          <tr>
            <th>Company</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => {
            return (
              <tr id={user.id} classname='user-cell' onClick={((e) => {
                setClicked(user)
                setShow(1)
              })}>
                <td>{user.company_name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.status}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </Container>
  </div>
)

}

export default AdminUsersList;
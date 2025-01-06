import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import { useRef, useEffect, useState } from "react";



function AdminHistory({ data, setCurrentPage}) {


  const [clicked, setClicked] = useState();
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);


  return (


    <div className='Entry' >
      <Container fluid>
        <Table hover className='table-large'>
          <thead>
            <tr style={{'text-align': 'left', 'font-size': '25px'}}>
              <th>ID</th>
              <th>Company</th>
              <th>Advisor</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.toReversed().map((entry) => {
              console.log('renderdata',entry)
              return (
                <tr id={entry.reference_id} className='table-cell' onClick={((e) => {
                  setClicked(entry)
                  handleShow()
                })}>
                    <td>{entry.quote_id.slice(0,5)}</td>
                    <td className='col-4'>{entry.customer.company_name}</td>
                    <td >{entry.employee.employee_name}</td>
                    <td>{entry.created_at}</td>
                    <td>{entry.status}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  )
}

export default AdminHistory;
import Table from 'react-bootstrap/Table'
import './ACSCSS/AdminHistory.scss'
import Container from 'react-bootstrap/Container'
import { useRef, useEffect, useState } from "react";
import axios from 'axios';
import ListModal from '../ListModal.jsx'
import Search from '../SearchComponents/Search'


function AdminHistory({data, setCurrentPage, setQuoteContext, quoteContext}) {

  const [clicked, setClicked] = useState();
  const [show, setShow] = useState(false);
  const [list, setList] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [keyword, setKeyword] = useState()


  const handleShow = () => setShow(true);

  const tempEmployee = {
    name: 'Paul Allor',
    id: 1000,
    position: 'admin',
    customer: {
      billing_address: '21542 Roadway ave. Long Beach, CA',
      company_name: 'Kurb Bowyerman Plumbing',
      email: 'BuymyShoes@yahoo.com',
      id: 'cc112fd3-3d27-4bfe-b3f1-fec5d3c93d79',
      phone: '555-654-6544',
      shipping_address: '21542 Roadway ave. Long Beach, CA'
    }
  }

  const fetchData = () => {
    if(tempEmployee.position === 'admin') {
      axios.get(`http://localhost:3000/home`, {
        params: {
          id: tempEmployee.id
        }
      })
      .then(response => {
        console.log('response', response)
        setList(response.data)
      })
      .catch((err) => {
        console.log('error retrieving history ', err)
      })
    }
  }

  const checkKeyword = () => {
    if (keyword) {
      return(filteredData)
    } else {
      return (list)
    }
    console.log('CHECKED', keyword)
  }

  useEffect(() => {
    fetchData()
    console.log('full data', data)
  }, [])

  return (


    <div className='tester' >
      <div className='search-container'>
        <Search data={list} setFilteredData={setFilteredData} keyword={keyword} setKeyword={setKeyword}/>
      </div>
      <ListModal setShow={setShow} setCurrentPage={setCurrentPage} setQuoteContext={setQuoteContext} quoteContext={quoteContext} show={show} data={clicked}/>
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
            {checkKeyword().toReversed().map((entry) => {
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
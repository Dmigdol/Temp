import './infobox.scss'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import ListModal from './ListModal.jsx'
import { useRef, useEffect, useState } from "react";
import CustomerInput from './CustomerInput.jsx'



function RenderRecent({current, data, setCurrentPage, setQuoteContext, quoteContext, filteredData, keyword}) {


  const [clicked, setClicked] = useState();
  const [show, setShow] = useState(false);
  const [currentData, setCurrentData] = useState(data)

  const handleShow = () => setShow(true);

  const checkKeyword = () => {
    if (keyword) {
      return(filteredData)
    } else {
      return (data)
    }
    console.log('CHECKED', keyword)
  }

  return (


    <div className='Entry' >
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
              return (
                <tr id={entry.reference_id} className='table-cell' onClick={((e) => {
                  setClicked(entry)
                  handleShow()
                })}>
                    <td>{entry.quote_id.slice(0,5)}</td>
                    <td className='col-4'>{entry.company_name}</td>
                    <td >{entry.employee_name}</td>
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

export default RenderRecent;
/*

*/
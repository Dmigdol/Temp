import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import { useRef, useEffect, useState } from "react";
import axios from 'axios';
import InventoryModal from './InventoryModal.jsx'
import Search from '../SearchComponents/Search'

function Inventory({data, setCurrentPage, setQuoteContext, quoteContext}) {

  const [clicked, setClicked] = useState();
  const [show, setShow] = useState(false);
  const [list, setList] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [keyword, setKeyword] = useState()
  const [fetchInventoryFlag, setFetchInventoryFlag] = useState(true)


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

  const checkKeyword = () => {
    if (keyword) {
      return(filteredData)
    } else {
      return (list)
    }
    console.log('CHECKED', keyword)
  }

  const fetchInventory = () => {
      axios.get(`http://localhost:3000/inventory`, {
      })
      .then(response => {
        console.log('inventory', response)
        setList(response.data)
      })
      .catch((err) => {
        console.log('error retrieving history ', err)
      })
  }

  useEffect(() => {
    if (fetchInventoryFlag) {
      fetchInventory()
      setFetchInventoryFlag(false)
    }
  }, [fetchInventoryFlag, setFetchInventoryFlag])

  return (


    <div className='tester' >
      <div className='search-container'>
        <Search data={list} setFilteredData={setFilteredData} keyword={keyword} setKeyword={setKeyword}/>
      </div>
      <InventoryModal setShow={setShow} fetchInventory={fetchInventory} setCurrentPage={setCurrentPage} setQuoteContext={setQuoteContext} quoteContext={quoteContext} show={show} data={clicked}/>
      <Container fluid>
        <Table hover className='table-large'>
          <thead>
            <tr style={{'text-align': 'left', 'font-size': '25px'}}>
              <th>Serial</th>
              <th>Name</th>
              <th>Amount</th>
              <th>PPU</th>
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
                    <td className='col-2'>{entry.serial}</td>
                    <td className='col-4'>{entry.name}</td>
                    <td className='col-1'>{entry.amount}</td>
                    <td className='col-1'>{entry.ppu}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  )

}

export default Inventory;
import Table from 'react-bootstrap/Table';
import { useRef, useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './QuoteComponentsSCSS/QuoteList.scss'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import Row from 'react-bootstrap/Row'


function QuoteList({rows, slide, setShow, setSlide, inputs,
   setInputs, inputContext, setInputContext, setCurrEntry, currEntry, setQuoteContext, quoteContext}) {



  const handleDupelicate = (entry) => {
    setInputContext('duplicate')
    setInputs({...currEntry, 'tag': '', 'room': ''})
    document.body.click()
    console.log('current entries', inputs)
    setSlide(!slide)
    setShow(true)
  }

  const editEntry = (entry) => {
    console.log('entry', currEntry)
    console.log('entry input', inputs)
    setInputContext('edit')
    setInputs(currEntry)
    document.body.click()
    setSlide(!slide)
    setShow(true)
  }

  const rowClick = (entry) => {
    setCurrEntry(entry)
  }




  const clickMenu = (
    <Popover>
      <Popover.Body>
        <Row>
          <Button className='popover-button' onClick={editEntry}>Edit Row</Button>
        </Row>
        <Row>
          <Button className='popover-button' onClick={handleDupelicate}>Copy</Button>
        </Row>
      </Popover.Body>
    </Popover>
  )


  return (
    <Container className='quote-list-container'>
      <Table className='quote-table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Tag</th>
            <th>Room</th>
            <th>{'Size (W x H)'}</th>
            <th>Frame</th>
            <th>Hinge</th>
            <th>Strike</th>
            <th>Handing</th>
            <th>DeadBolt</th>
            <th>Closer</th>
            <th>Fire Rating</th>
            <th>Unit Price</th>
            <th>Ext Price</th>
          </tr>
        </thead>
        <tbody>
          {rows ? rows.map((entry) => {
            return (
              <OverlayTrigger rootClose trigger="click" placement='right' overlay={clickMenu}>
                <tr className='quote-row-entry'
                onClick={(e) => {
                  rowClick(entry)
                }}
                >
                  <td>{entry.num}</td>
                  <td>{entry.tag}</td>
                  <td>{entry.room}</td>
                  <td>{`${entry.width}" x ${entry.height}"`}</td>
                  <td>{entry.frame}</td>
                  <td>{entry.hinge}</td>
                  <td>{`${entry.strike} ${entry.strikeHeight}"`}</td>
                  <td>{entry.handing}</td>
                  {entry.deadBolt ? <td>Yes</td> : <td>No</td>}
                  {entry.closer ? <td>Yes</td> : <td>No</td>}
                  {entry.fireRating ? <td>Yes</td> : <td>No</td>}
                  <td>PH</td>
                  <td>PH</td>
                </tr>
              </OverlayTrigger>
            )
          }) : <></>}
        </tbody>
      </Table>
    </Container>
  )
}
export default QuoteList;
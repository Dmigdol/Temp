import './Conditionals.scss'
import Select from 'react-select'
import { useRef, useEffect, useState } from "react";
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

function Conditionals({data, setInputs}) {

  console.log('conditionals payload', data)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setInputs({...data, [name]: value})
  }

  if (data.frame === 'standard') {
    if(data.height < 72){
      return(
        <>
          <Form.Select name='hinge' onChange={handleInputChange}>
            <option value='CR3D51-2'>CalRoyal CR3D51 {`(2)`}</option>
            <option value='340 3D-2'>Tectus 340 3D {`(2)`}</option>
            <option value='butt-2'>4x4 butt hinge {`(2)`}</option>
          </Form.Select>
        </>
      )
    }
  }
    if(data.height > 72 && data.height < 84){
      return(
        <>
          <Form.Select name='hinge' onChange={handleInputChange}>
            <option value='CR3D51-3'>CalRoyal CR3D51 {`(3)`}</option>
            <option value='340 3D-3'>Tectus 340 3D {`(3)`}</option>
            <option value='butt-3'>4x4 butt hinge {`(3)`}</option>
          </Form.Select>
        </>
      )
    }
    if(data.height > 84 && data.height <= 96){
      return(
        <>
          <Form.Select name='hinge' onChange={handleInputChange}>
            <option value='CR3D62-3'>CalRoyal CR3D562 {`(3)`}</option>
            <option value='540 3D-3'>Tectus 540 3D {`(3)`}</option>
            <option value='butt-4'>4x4 butt hinge {`(4)`}</option>
          </Form.Select>
        </>
      )
    }
  if(data.height > 96 && data.height <= 120){
    return(
      <>
        <Form.Select name='hinge' onChange={handleInputChange}>
          <option value='CR3D62-4'>CalRoyal CR3D562 {`(4)`}</option>
          <option value='540 3D-4'>Tectus 540 3D {`(4)`}</option>
          <option value='butt-4'>4x4 butt hinge {`(4)`}</option>
        </Form.Select>
      </>
    )
  }
}


export default Conditionals;
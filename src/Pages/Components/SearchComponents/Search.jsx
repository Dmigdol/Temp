import './SSASS/Search.scss'
import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from '@awesome.me/kit-275899ac10/icons'


function Search({data}) {

  const [input, setInput] = useState('')


  const handleSearch = () => {
    const results = data.filter((input) => input.match(data))
    console.log('handle search')
  }

  return (
    <Container className='search-group'>
      <Form>
        <Row className='search-row'>
          <Form.Group className='boot-search-input' as={Col} md={8}>
              <Form.Control value={input} type='search' placeholder='Search' />
          </Form.Group>
          <Button className='search-btn'>
          <FontAwesomeIcon
              icon={byPrefixAndName.fas['magnifying-glass']}
              onClick={()=>{handleSearch()}}
              />
          </Button>
        </Row>
      </Form>
    </Container>
  )

}

export default Search